import {
	CONTEXT_MENU_ID,
	CONTEXT_MENU_TITLE,
	CONTEXT_MENU_CONTEXTS,
	SERVER_URL,
	GENERATE_LINK_ENDPOINT,
	FETCH_SELECTION_TEXT
} from "./../helpers/constants";
import { handleContentScriptResponse } from "./../helpers/backgroundHelper";
const contextMenuItems = {
	id: CONTEXT_MENU_ID,
	title: CONTEXT_MENU_TITLE,
	contexts: CONTEXT_MENU_CONTEXTS
};

const handleContextMenuClick = (clickData) => {
	let { menuItemId, selectionText } = clickData;
	if (menuItemId === CONTEXT_MENU_ID && selectionText) notifyContentScript();
	else if (menuItemId === CONTEXT_MENU_ID)
		alert("Please select a code snippet!");
};

const notifyContentScript = () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		console.log("Tabs", tabs);
		chrome.tabs.sendMessage(
			tabs[0].id,
			{
				action: FETCH_SELECTION_TEXT,
				data: ""
			},
			handleContentScriptResponse
		);
	});
};

const intializeApp = () => {
	chrome.contextMenus.create(contextMenuItems);
	chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
};

intializeApp();
