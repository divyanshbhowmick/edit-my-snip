import React, { createContext } from "react";
import { render } from "react-dom";
import App from "./../App";
import { DOM_CONTAINER_ID } from "../utils/helpers/constants";
import {
	createContainerToRender,
	getParentElement
} from "../utils/helpers/contentScriptHelper";
import { IResponseCallback } from "../@types/config";
import { MessageContext } from "./../contexts/MessageContext";
import { IMessageContextType } from "../@types/context";

const messageListener = (
	req: any,
	sender: chrome.runtime.MessageSender,
	sendResponse: IResponseCallback
) => {
	const selectedText = window.getSelection().toString();
	console.log("Text..", selectedText);
	createContainerToRender(getParentElement());

	const contextInitialValue: IMessageContextType = {
		selectedText: selectedText,
		req,
		sendResponse
	};

	render(
		<MessageContext.Provider value={contextInitialValue}>
			<App />
		</MessageContext.Provider>,
		document.getElementById(DOM_CONTAINER_ID)
	);
	return true;
};
chrome.runtime.onMessage.addListener(messageListener);
