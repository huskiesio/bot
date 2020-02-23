/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCBotChatHistory, IHCBotThread} from "../types";
import {Socket} from "../HuskyChatBot";
import {HCBotKeyManager} from "..";
import {KrRSA} from "@element-ts/krypton";
import { IHCAPIThread } from "@huskiesio/types";

export type HCBotChatOnReceivedParam = {threadId: string, senderId: string, payload: string, timestamp: number};
export type HCBotChatOnSentParam = { threadId: string; payload: string; timestamp: number; };
export type HCBotChatOnReceivedHandler = (message: HCBotChatOnReceivedParam) => Promise<boolean>;
export type HCBotChatOnSentHandler = (message: HCBotChatOnSentParam) => Promise<boolean>;

export class HCBotChat {

	private readonly _history: IHCBotChatHistory;
	private _onReceived: HCBotChatOnReceivedHandler | undefined;
	private _onSent: HCBotChatOnSentHandler | undefined;
	private _onThreadUpdated: ((threadId: string) => Promise<void>) | undefined;
	private socket: Socket;
	private userKeyManager: HCBotKeyManager;

	public constructor(socket: Socket, userKeyManager: HCBotKeyManager) {

		this._history = {} as IHCBotChatHistory;
		this.socket = socket;
		this.userKeyManager = userKeyManager;

	}

	public history(): IHCBotChatHistory { return this._history; }
	public onReceived(handler: HCBotChatOnReceivedHandler): void { this._onReceived = handler; }
	public onSent(handler: HCBotChatOnSentHandler): void { this._onSent = handler; }
	public onThreadUpdated(handler: (threadId: string) => Promise<void>): void { this._onThreadUpdated = handler; }
	public async threads(): Promise<IHCBotThread[]> { return []; }

	public async send(threadId: string, payload: string): Promise<void> {

		const payloadData: Buffer = Buffer.from(payload, "utf8");
		const keys: {[userId: string]: string} = await this.socket.invoke("chat thread keys", threadId);
		const encryptedPayload: {[userId: string]: string} = {};

		for (const userId of Object.keys(keys)) {
			const userPublicKeyString: string = keys[userId];
			const userPublicKeyData: Buffer = Buffer.from(userPublicKeyString, "hex");
			const encryptedPayloadForUser: Buffer = KrRSA.encrypt(payloadData, userPublicKeyData);
			encryptedPayload[userId] = encryptedPayloadForUser.toString("hex");
		}

		await this.socket.invoke("chat send", {threadId, payload: encryptedPayload});

	}

	public async createThread(name: string, description: string, members: string[]): Promise<string> {

		return await this.socket.invoke("chat thread create", {name, description, members});

	}

	public async handleChatMessageReceived(message: HCBotChatOnReceivedParam): Promise<void> {
		if (this._onReceived) this._onReceived(message);
	}

	public async handleChatMessageSent(message: HCBotChatOnSentParam): Promise<void> {
		if (this._onSent) this._onSent(message);
	}

	public async handleThreadUpdated(threadId: string): Promise<boolean> {
		if (this._onThreadUpdated) this._onThreadUpdated(threadId);
		return true;
	}

	public async getThreadForId(threadId: string): Promise<IHCAPIThread | undefined> {

		return await this.socket.invoke("chat thread", threadId);

	}

}