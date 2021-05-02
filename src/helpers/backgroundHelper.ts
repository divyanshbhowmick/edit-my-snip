import { IContentScriptResponse, IEditorConfig } from "../@types/config";
import { generateLink } from "./codeEditor/index";

export const handleContentScriptResponse = (
	response: IContentScriptResponse
) => {
	// Added a check for null data (which is generated when the sendResp is garbage collected and it fires the callback)
	if (response?.data?.code) {
		const editorConfig: IEditorConfig = {
			content: response?.data?.code,
			language: response?.data?.language
		};
		const editorUrl = generateLink(editorConfig);
		window.open(editorUrl, "_blank");
	}
};
