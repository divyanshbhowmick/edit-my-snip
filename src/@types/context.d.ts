import { IAction, IResponseCallback } from "./config";

export type IMessageContextType = {
	selectedText: string;
	req: IAction;
	sendResponse: IResponseCallback;
};
