import { Languages } from "../config/languageConfig";

export type IEditorConfig = {
	language: Languages;
	content: string;
} & {};

export type IContentScriptResponse = {
	data: {
		code?: string;
		language?: Languages;
		isAccepted?: boolean;
	};
};

export type IAction = {
	action: string;
	data: IData;
};

export type IReactImports = Record<string, Array<string>>;

export type IResponseCallback = (response: any) => void;

export type IButtonCallback =
	| ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
	| (() => void);

export type IData = { [key: string]: any };

export type ISVGIconEvent = (
	event: React.MouseEvent<SVGSVGElement, MouseEvent>
) => void;

export type IEmptyFn = () => void;
