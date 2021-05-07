import { IEditorConfig } from "../../@types/config";
import { Languages } from "../../config/languageConfig";
import { JS_KEYWORDS, REACT_IMPORTS } from "./constants";

export const isCodeSnippet = (code: string) => {
	// Check for basic keywords and syntax
	let count = 0;
	JS_KEYWORDS.map((keyword: string) => {
		if (code.includes(keyword)) {
			count++;
		}
	});
	return count >= 4;
};

export const sanitizeCode = (editorConfig: IEditorConfig): IEditorConfig => {
	const sanitizedCode: IEditorConfig = { ...editorConfig };
	if (editorConfig?.language == Languages.ReactJS) {
		if (editorConfig?.content) {
			Object.values(REACT_IMPORTS).forEach((importValue) => {
				let count = 0;
				importValue.forEach((value) => {
					if (editorConfig?.content.includes(value)) count++;
				});
				if (count === 0) {
					sanitizedCode.content = `${importValue[0]}\n${sanitizedCode.content}`;
				}
			});
		}
	}
	return sanitizedCode;
};
