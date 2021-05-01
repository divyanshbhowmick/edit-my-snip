import { IContentScriptResponse, IEditorConfig } from "../@types/config";
import { generateLink } from "./codeEditor/index";

export const handleContentScriptResponse = (
	response: IContentScriptResponse
) => {
	const editorConfig: IEditorConfig = {
		content: response?.data?.code,
		language: response?.data?.language
	};
	const editorUrl = generateLink(editorConfig);
	window.open(editorUrl, "_blank");
};
