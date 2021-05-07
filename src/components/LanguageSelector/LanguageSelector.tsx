import React, { useEffect } from "react";
import "./LanguageSelector.css";
import { languagesSupported } from "./../../config/languageConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeContainer } from "../../utils/helpers/contentScriptHelper";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface LanguageSelectorProps {
	setLanguage: Function;
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
	const handleLanguageSelect = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLanguage(+event.target.value);
	};

	const handleClose = () => {
		removeContainer(document.body);
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			handleClose();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	});

	return (
		<div className="card__container">
			<FontAwesomeIcon
				className="card__close__icon"
				icon={faTimes}
				onClick={handleClose}
			/>
			<div className="card__header">
				<div className="card__header__title">Edit(✏) My Snip(👩‍💻)</div>
			</div>
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
		</div>
	);
};
export default LanguageSelector;
