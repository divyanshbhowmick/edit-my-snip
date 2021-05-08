import {
	CONTEXT_MENU_ID,
	CONTEXT_MENU_TITLE,
	CONTEXT_MENU_CONTEXTS,
	FETCH_SELECTION_TEXT
} from "../utils/helpers/constants";
import {
	handleContentScriptResponse,
	notifyContentScript
} from "../utils/helpers/backgroundHelper";
import { generateMessageData } from "./../actions/actions";
import { IAction } from "../@types/config";
const contextMenuItems = {
	id: CONTEXT_MENU_ID,
	title: CONTEXT_MENU_TITLE,
	contexts: CONTEXT_MENU_CONTEXTS
};

const handleContextMenuClick = (clickData: chrome.contextMenus.OnClickData) => {
	let { menuItemId, selectionText } = clickData;
	if (menuItemId === CONTEXT_MENU_ID && selectionText) {
		const messageData = generateMessageData(FETCH_SELECTION_TEXT, {
			message: ""
		});
		notifyContentScript(messageData, handleContentScriptResponse);
	} else if (menuItemId === CONTEXT_MENU_ID)
		alert("Please select a code snippet!");
};

const intializeApp = () => {
	chrome.contextMenus.create(contextMenuItems);
	chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
};

intializeApp();
