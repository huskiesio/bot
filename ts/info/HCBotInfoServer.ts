/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotInfoServer} from "../types";

export class HCBotInfoServer implements IHCBotInfoServer {

	private readonly _domain: string;
	private readonly _ip: string;


	public constructor() {

		this._domain = "";
		this._ip = "";

	}


	public domain(): string { return this._domain; }
	public ip(): string { return this._ip; }
	public async ping(): Promise<number> { return 1; }

}