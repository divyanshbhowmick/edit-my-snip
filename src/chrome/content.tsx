import React from "react";
import { render } from "react-dom";
import App from "./../App";
import {
	DOM_CONTAINER_ID,
	FETCH_SELECTION_TEXT
} from "../utils/helpers/constants";
import {
	createContainerToRender,
	getParentElement
} from "../utils/helpers/contentScriptHelper";

const messageListener = (req, sender, sendResp) => {
	if (req?.action == FETCH_SELECTION_TEXT) {
		const selectedText = window.getSelection().toString();
		createContainerToRender(getParentElement());
		render(
			<App sendResponse={sendResp} selectedText={selectedText} />,
			document.getElementById(DOM_CONTAINER_ID)
		);
		return true;
	}
};
chrome.runtime.onMessage.addListener(messageListener);
