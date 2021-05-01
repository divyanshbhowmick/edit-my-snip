import React from "react";
import LanguageSelectComponent from "../components/LanguageSelector/LanguageSelector";
import { unmountComponentAtNode } from "react-dom";
import { removeContainer } from "./../helpers/contentScriptHelper";
import { domContainerID } from "./../helpers/constants";

interface ContentViewProps {
	sendResponse: Function;
	selectedText: string;
}
const ContentView: React.FC<ContentViewProps> = ({
	sendResponse,
	selectedText
}) => {
	const setLanguage = (language: string) => {
		console.log("Sending Response");
		sendResponse({
			data: { code: selectedText, language }
		});
		unmountComponentAtNode(document.getElementById(domContainerID));
		removeContainer(document.body);
	};
	return <LanguageSelectComponent setLanguage={setLanguage} />;
};

export default ContentView;
