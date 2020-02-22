/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotInfo} from "../types";
import {HCBotInfoServer} from "./HCBotInfoServer";
import {HCBotInfoMe} from "./HCBotInfoMe";

export class HCBotInfo implements IHCBotInfo {

	private readonly _me: HCBotInfoMe;
	private readonly _server: HCBotInfoServer;

	public constructor() {

		this._me = new HCBotInfoMe();
		this._server = new HCBotInfoServer();

	}

	public me(): HCBotInfoMe { return this._me; }
	public server(): HCBotInfoServer { return this._server; }

}
