import React, { useContext } from "react";
import "./LanguageSelector.css";
import { languagesSupported } from "./../../config/languageConfig";
import Card from "./../Card/Card";
import { removeContainer } from "./../../utils/helpers/contentScriptHelper";
import { IContentScriptResponse } from "../../@types/config";
import { IMessageContextType } from "../../@types/context";
import { MessageContext } from "./../../contexts/MessageContext";

interface LanguageSelectorProps {}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({}) => {
	const messageContext: IMessageContextType = useContext(MessageContext);

	const handleLanguageSelect = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const response: IContentScriptResponse = {
			data: {
				code: messageContext.selectedText,
				language: +event.target.value
			}
		};
		messageContext.sendResponse(response);
		removeContainer(document.body);
	};

	return (
		<Card>
			<select className="selectbox" onChange={handleLanguageSelect}>
				<option value="vanillaJS" className="selectbox__option">
					Choose the language
				</option>
				{languagesSupported.map((language) => (
					<option
						key={language?.id}
						value={language?.id}
						className="selectbox__option"
					>
						{language.name}
					</option>
				))}
			</select>
		</Card>
	);
};
export default LanguageSelector;
