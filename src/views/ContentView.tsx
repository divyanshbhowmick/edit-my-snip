import React, { useContext } from "react";
import { IMessageContextType } from "../@types/context";
import LanguageSelectComponent from "../components/LanguageSelector/LanguageSelector";
import {
	FETCH_SELECTION_TEXT,
	SHOW_ALERT_MESSAGE
} from "../utils/helpers/constants";
import { MessageContext } from "./../contexts/MessageContext";
import AlertBox from "./../components/AlertBox/AlertBox";
import { IButtonCallback, IContentScriptResponse } from "../@types/config";
import { removeContainer } from "./../utils/helpers/contentScriptHelper";

interface ContentViewProps {}
const ContentView: React.FC<ContentViewProps> = ({}) => {
	const messageContext: IMessageContextType = useContext(MessageContext);

	const handleProceed: IButtonCallback = () => {
		const response: IContentScriptResponse = {
			data: {
				isAccepted: true
			}
		};
		messageContext.sendResponse(response);
		removeContainer(document.body);
	};

	const handleCancel: IButtonCallback = () => {
		const response: IContentScriptResponse = {
			data: {
				isAccepted: false
			}
		};
		messageContext.sendResponse(response);
		removeContainer(document.body);
	};

	switch (messageContext?.req?.action) {
		case FETCH_SELECTION_TEXT:
			return <LanguageSelectComponent />;
		case SHOW_ALERT_MESSAGE:
			return (
				<AlertBox
					message={messageContext?.req?.data?.message}
					handleProceed={handleProceed}
					handleCancel={handleCancel}
				/>
			);
		default:
			return;
	}
};

export default ContentView;
