import React from "react";
import "./LanguageSelector.css";
import { languagesSupported } from "./../../config/languageConfig";

interface LanguageSelectorProps {
	setLanguage: Function;
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
	const handleLanguageSelect = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLanguage(event.target.value);
	};
	return (
		<div className="card__container">
			<div className="card__heading">Edit My Snip!</div>
			<select className="selectbox" onChange={handleLanguageSelect}>
				<option value="vanillaJS" className="selectbox__option">
					Choose the language
				</option>
				{languagesSupported.map((language) => (
					<option value={language?.id} className="selectbox__option">
						{language.name}
					</option>
				))}
			</select>
		</div>
	);
};
export default LanguageSelector;
