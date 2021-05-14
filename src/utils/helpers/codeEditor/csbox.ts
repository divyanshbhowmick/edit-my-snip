import { getParameters } from "codesandbox/lib/api/define";
import { IEditorConfig } from "../../../@types/config";
import { Languages } from "../../../config/languageConfig";
import {
	REACT_INDEX_JS_CONTENT,
	REACT_TEST_COMPONENT_CONTENT
} from "../constants";

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
		case Languages.ReactJS:
			return {
				...baseConfig,
				files: {
					...baseConfig.files,
					"src/App.js": {
						...baseConfig.files["index.js"],
						content
					},
					"src/TestComponent.js": {
						...baseConfig.files["index.js"],
						content: REACT_TEST_COMPONENT_CONTENT
					},
					"index.js": {
						...baseConfig.files["index.js"],
						content: REACT_INDEX_JS_CONTENT
					},
					"package.json": {
						...baseConfig.files["index.js"],
						content: JSON.stringify({
							dependencies: {
								react: "^17.0.2",
								"react-dom": "^17.0.2"
							}
						})
					}
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
