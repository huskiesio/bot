/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCBot} from "./types";
import {HCBotInfo} from "./info/HCBotInfo";
import {HCBotDirectory} from "./directory/HCBotDirectory";
import {HCBotCrypto} from "./crypto/HCBotCrypto";
import {HCBotChat} from "./chat/HCBotChat";

export class HuskyChatBot implements IHCBot {

	private readonly _chat: HCBotChat;
	private readonly _crypto: HCBotCrypto;
	private readonly _directory: HCBotDirectory;
	private readonly _info: HCBotInfo;

	private constructor() {

		this._chat = new HCBotChat();
		this._crypto = new HCBotCrypto();
		this._directory = new HCBotDirectory();
		this._info = new HCBotInfo();

	}

	public chat(): HCBotChat { return this._chat; }
	public crypto(): HCBotCrypto { return this._crypto; }
	public directory(): HCBotDirectory { return this._directory; }
	public info(): HCBotInfo { return this._info; }

}
