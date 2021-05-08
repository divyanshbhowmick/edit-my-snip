import React, { useEffect } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeContainer } from "./../../utils/helpers/contentScriptHelper";
import { IEmptyFn, ISVGIconEvent } from "../../@types/config";

interface CardProps {
	handleClose?: IEmptyFn & ISVGIconEvent;
}
const Card: React.FC<CardProps> = (props) => {
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			if (props?.handleClose) props.handleClose();
			else handleNativeClose();
		}
	};
	const handleNativeClose = () => {
		removeContainer(document.body);
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
				onClick={
					props.handleClose ? props.handleClose : handleNativeClose
				}
			/>
			<div className="card__header">
				<div className="card__header__title">Edit(✏) My Snip(👩‍💻)</div>
			</div>
			<div className="card__body">{props.children}</div>
		</div>
	);
};
export default Card;
