/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotChat, IHCBotChatHistory, IHCBotChatOnMessageHandler, IHCBotThread} from "../types";
import {IHCThread} from "@huskiesio/types";

export class HCBotChat implements IHCBotChat {

	private readonly _history: IHCBotChatHistory;
	private _onReceived: IHCBotChatOnMessageHandler | undefined;
	private _onSent: IHCBotChatOnMessageHandler | undefined;

	public constructor() {

		this._history = {} as IHCBotChatHistory;

	}

	public history(): IHCBotChatHistory { return this._history; }
	public onReceived(handler: IHCBotChatOnMessageHandler): void { this._onReceived = handler; }
	public onSent(handler: IHCBotChatOnMessageHandler): void { this._onSent = handler; }
	public async threads(): Promise<IHCBotThread[]> { return []; }
	public async send(thread: (string | IHCBotThread), payload: string): Promise<string> { return ""; }

}