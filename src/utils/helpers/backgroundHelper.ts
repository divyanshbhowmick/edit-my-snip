import { IContentScriptResponse, IEditorConfig } from "../../@types/config";
import { generateLink } from "./codeEditor/index";
import { isCodeSnippet, sanitizeCode } from "./codeSanitizer";

export const handleContentScriptResponse = (
	response: IContentScriptResponse
) => {
	// Added a check for null data (which is generated when the sendResp is garbage collected and it fires the callback)
	if (response?.data?.code) {
		const code: string = response?.data?.code;
		if (isCodeSnippet(code)) {
			const editorConfig: IEditorConfig = {
				content: response?.data?.code,
				language: response?.data?.language
			};
			const sanitizedCode: IEditorConfig = sanitizeCode(editorConfig);
			const editorUrl = generateLink(sanitizedCode);
			window.open(editorUrl, "_blank");
		} else {
			alert("Please select a valid code!");
		}
	}
};
