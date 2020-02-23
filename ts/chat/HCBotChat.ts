/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCBotChat, IHCBotChatHistory, IHCBotChatOnMessageHandler, IHCBotThread} from "../types";
import {HuskyChatBot, Socket} from "../HuskyChatBot";

export type HCBotChatOnReceivedParam = {threadId: string, senderId: string, payload: Buffer, timestamp: number};
export type HCBotChatOnSentParam = {threadId: string, senderId: string, payload: Buffer, timestamp: number};
export type HCBotChatOnReceivedHandler = (message: HCBotChatOnReceivedParam) => Promise<void>;
export type HCBotChatOnSentHandler = (message: HCBotChatOnSentParam) => Promise<void>;

export class HCBotChat {

	private readonly _history: IHCBotChatHistory;
	private _onReceived: HCBotChatOnReceivedHandler | undefined;
	private _onSent: HCBotChatOnSentHandler | undefined;
	private _onThreadUpdated: ((threadId: string) => Promise<void>) | undefined;

	public constructor(socket: Socket) {

		this._history = {} as IHCBotChatHistory;

	}

	public history(): IHCBotChatHistory { return this._history; }
	public onReceived(handler: HCBotChatOnReceivedHandler): void { this._onReceived = handler; }
	public onSent(handler: HCBotChatOnSentHandler): void { this._onSent = handler; }
	public onThreadUpdated(handler: (threadId: string) => Promise<void>): void { this._onThreadUpdated = handler; }
	public async threads(): Promise<IHCBotThread[]> { return []; }
	public async send(thread: (string | IHCBotThread), payload: string): Promise<string> { return ""; }

	public async handleChatMessageReceived(message: HCBotChatOnReceivedParam): Promise<void> {
		if (this._onReceived) this._onReceived(message);
	}

	public async handleChatMessageSent(message: HCBotChatOnSentParam): Promise<void> {
		if (this._onSent) this._onSent(message);
	}

	public async handleThreadUpdated(threadId: string): Promise<void> {
		if (this._onThreadUpdated) this._onThreadUpdated(threadId);
	}

	public async getThreadForId(threadId: string): Promise<IHCBotThread> { return {} as IHCBotThread; }

}