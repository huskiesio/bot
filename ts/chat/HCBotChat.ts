/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotChat} from "../types";

export class HCBotChat implements IHCBotChat {
	history: IHCBotChatHistory;
	onMessage: IHCBotChatOnMessage;
	send: (thread: (string | IIHCBotThread), payload: string) => Promise<string>;

}