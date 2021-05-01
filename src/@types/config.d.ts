import { Languages } from "../config/languageConfig";

export type IEditorConfig = {
	language: Languages;
	content: string;
};

export type IContentScriptResponse = {
	data: { code: string; language: Languages };
};
