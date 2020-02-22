/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCAPICurried, IHCAPIUser} from "@huskiesio/types";

export class HCBotUser implements IHCAPICurried<IHCAPIUser> {

	private _firstName: string;
	private _lastName: string;
	private _username: string;
	private _userId: string;
	private _publicKey: Buffer;

	public constructor() {

		this._firstName = "";
		this._lastName = "";
		this._username = "";
		this._userId = "";
		this._publicKey = Buffer.alloc(0, 0);

	}

	public firstName(): string { return this._firstName; }
	public lastName(): string { return this._lastName; }
	public username(): string { return this._username; }
	public userId(): string { return this._userId; }
	public publicKey(): Buffer { return this._publicKey; }

}