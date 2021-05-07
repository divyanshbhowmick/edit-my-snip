import React from "react";
import LanguageSelectComponent from "../components/LanguageSelector/LanguageSelector";
import { removeContainer } from "../utils/helpers/contentScriptHelper";
import { Languages } from "../config/languageConfig";
import { IAction, IContentScriptResponse } from "../@types/config";

interface ContentViewProps {
	sendResponse: Function;
	selectedText: string;
}
const ContentView: React.FC<ContentViewProps> = ({
	sendResponse,
	selectedText
}) => {
	const setLanguage = (language: Languages) => {
		const response: IContentScriptResponse = {
			data: { code: selectedText, language }
		};
		sendResponse(response);
		removeContainer(document.body);
	};
	return <LanguageSelectComponent setLanguage={setLanguage} />;
};

export default ContentView;
