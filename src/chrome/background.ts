import { postData } from "./../helpers/apiHelper.js";
import {
	CONTEXT_MENU_ID,
	CONTEXT_MENU_TITLE,
	CONTEXT_MENU_CONTEXTS,
	SERVER_URL,
	GENERATE_LINK_ENDPOINT,
	FETCH_SELECTION_TEXT
} from "./../helpers/constants.js";

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

function sendMessagePromise(tabId: number, item: object) {
	return new Promise((resolve, reject) => {
		chrome.tabs.sendMessage(tabId, item, (response) => {
			console.log("Response", response);
			if (response) {
				resolve(response);
			} else {
				reject("Something wrong");
			}
		});
	});
}

const notifyContentScript = () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		console.log("Tabs", tabs);
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ action: FETCH_SELECTION_TEXT, data: "" },
			function (response) {
				const data = response.data ?? "";
				console.log("Response", data);
				postData(`${SERVER_URL}${GENERATE_LINK_ENDPOINT}`, {
					data
				}).then(async (res) => {
					console.log(res);
					if (res.status === 400) alert("Failed");
					else if (res.status === 200) {
						try {
							const responseData = await res.json();
							const url = responseData.data.url;
							window.open(url, "_blank");
						} catch (e) {
							console.log(e);
							alert("Failed");
						}
					}
				});
			}
		);
	});
};

const intializeApp = () => {
	chrome.contextMenus.create(contextMenuItems);
	chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
};

intializeApp();
