/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotInfo} from "../types";
import {HCBotInfoServer} from "./HCBotInfoServer";
import {HCBotInfoMe} from "./HCBotInfoMe";
import {Socket} from "../HuskyChatBot";

export class HCBotInfo {

	private readonly _me: HCBotInfoMe;
	private readonly _server: HCBotInfoServer;

	public constructor(socket: Socket) {

		this._me = new HCBotInfoMe(socket);
		this._server = new HCBotInfoServer(socket);

	}

	public me(): HCBotInfoMe { return this._me; }
	public server(): HCBotInfoServer { return this._server; }

}
