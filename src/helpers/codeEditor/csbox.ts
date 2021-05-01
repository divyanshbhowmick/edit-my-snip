import { getParameters } from "codesandbox/lib/api/define";
import { IEditorConfig } from "../../@types/config";
import { Languages } from "../../config/languageConfig";

const generateConfig = (editorConfig: IEditorConfig) => {
	const { language, content } = editorConfig;
	const baseConfig = getBaseConfig();
	switch (language) {
		case Languages.VanillaJS:
			return {
				...baseConfig,
				files: {
					...baseConfig.files,
					"index.js": { ...baseConfig.files["index.js"], content }
				}
			};
		default:
			return baseConfig;
	}
};

const parameters = (editorConfig: IEditorConfig) =>
	getParameters(generateConfig(editorConfig));

export const generateCSBOXLink = (editorConfig: IEditorConfig) => {
	return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters(
		editorConfig
	)}`;
};

const getBaseConfig = () => {
	return {
		files: {
			"index.js": {
				content: "",
				isBinary: false
			},
			"package.json": {
				content: JSON.stringify({ dependencies: {} }),
				isBinary: false
			}
		}
	};
};
