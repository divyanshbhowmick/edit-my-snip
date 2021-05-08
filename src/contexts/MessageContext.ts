import { createContext } from "react";
import { IMessageContextType } from "../@types/context";

export const MessageContext: React.Context<IMessageContextType> = createContext(
	null
);
