import React from "react";
import ContentView from "./views/ContentView";

interface AppProps {
	sendResponse: Function;
	selectedText: string;
}
const App: React.FC<AppProps> = ({ sendResponse, selectedText }) => {
	return (
		<ContentView sendResponse={sendResponse} selectedText={selectedText} />
	);
};
export default App;
