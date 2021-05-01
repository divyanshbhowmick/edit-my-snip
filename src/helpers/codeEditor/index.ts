import { IEditorConfig } from "../../@types/config";
import { CURRENT_EDITOR, Editor } from "../../config/editorConfig";
import { generateCSBOXLink } from "./csbox";

export const generateLink = (editorConfig: IEditorConfig): string => {
	const editor = CURRENT_EDITOR;

	// TODO: Need to sanitize the code to support generic imports.
	switch (editor) {
		case Editor.CODE_SANDBOX:
			return generateCSBOXLink(editorConfig);
		default:
			return generateCSBOXLink(editorConfig);
	}
};
