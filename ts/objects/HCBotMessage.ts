/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCAPICurried, IHCAPIMessage} from "@huskiesio/types";

export class HCBotMessage implements IHCAPICurried<IHCAPIMessage> {
	
	private _payload: Buffer;
	private _senderId: string;
	private _threadId: string;

	public constructor() {

		this._payload = Buffer.alloc(1, 1);
		this._senderId = "";
		this._threadId = "";

	}

	public payload(): Buffer { return this._payload; }
	public senderId(): string { return this._senderId; }
	public threadId(): string { return this._threadId; }

}