import React from "react";
import { render } from "react-dom";
import App from "./../App";
import { domContainerID, FETCH_SELECTION_TEXT } from "../helpers/constants";
import {
	createContainerToRender,
	getParentElement
} from "./../helpers/contentScriptHelper";

const messageListener = (req, sender, sendResp) => {
	if (req?.action == FETCH_SELECTION_TEXT) {
		const selectedText = window.getSelection().toString();
		createContainerToRender(getParentElement());
		render(
			<App sendResponse={sendResp} selectedText={selectedText} />,
			document.getElementById(domContainerID)
		);
		return true;
	}
};
chrome.runtime.onMessage.addListener(messageListener);
