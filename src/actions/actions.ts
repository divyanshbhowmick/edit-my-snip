import { IAction } from "../@types/config";
import { FETCH_SELECTION_TEXT } from "../utils/helpers/constants";

export const notifyContentScriptData = (data): IAction => ({
	action: FETCH_SELECTION_TEXT,
	data
});
