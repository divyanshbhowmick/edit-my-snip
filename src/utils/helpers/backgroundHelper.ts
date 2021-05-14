import {
	IAction,
	IContentScriptResponse,
	IEditorConfig,
	IResponseCallback
} from "../../@types/config";
import { generateLink } from "./codeEditor/index";
import { isCodeSnippet, sanitizeCode } from "./codeSanitizer";
import { SHOW_ALERT_MESSAGE } from "./constants";

let editorConfigData: IEditorConfig = null;

export const handleContentScriptResponse = (
	response: IContentScriptResponse
) => {
	// Added a check for null data (which is generated when the sendResp is garbage collected and it fires the callback)
	if (response?.data?.code) {
		const code: string = response?.data?.code;
		const editorConfig: IEditorConfig = {
			content: response?.data?.code,
			language: response?.data?.language
		};

		if (isCodeSnippet(code)) {
			const sanitizedCode: IEditorConfig = sanitizeCode(editorConfig);
			const editorUrl = generateLink(sanitizedCode);
			window.open(editorUrl, "_blank");
		} else {
			editorConfigData = editorConfig;
			const message = {
				action: SHOW_ALERT_MESSAGE,
				data: {
					message:
						"I see your code isn't valid (P.S: I'm still learning), Are you sure you want to continue?"
				}
			};
			notifyContentScript(message, handleAlertMessageResponse);
		}
	}
};

export const notifyContentScript = (
	message: IAction,
	responseCallBack: IResponseCallback
) => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const currentTabId: number = tabs[0].id;
		chrome.tabs.sendMessage(currentTabId, message, responseCallBack);
	});
};

const handleAlertMessageResponse = (response: IContentScriptResponse) => {
	if (response?.data?.isAccepted) {
		if (editorConfigData) {
			const sanitizedCode: IEditorConfig = sanitizeCode(editorConfigData);
			const editorUrl = generateLink(sanitizedCode);
			window.open(editorUrl, "_blank");
		}
	}
};
