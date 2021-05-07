import { Languages } from "../config/languageConfig";

export type IEditorConfig = {
	language: Languages;
	content: string;
};

export type IContentScriptResponse = {
	data: { code: string; language: Languages };
};

export type IAction = {
	action: string;
	data: { [key: string]: any };
};

export type IReactImports = Record<string, Array<string>>;
