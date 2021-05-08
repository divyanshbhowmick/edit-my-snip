import { IAction, IData } from "../@types/config";

export const generateMessageData = (action: string, data: IData): IAction => ({
	action,
	data
});
