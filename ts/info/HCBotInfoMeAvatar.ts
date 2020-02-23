/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCBotGetterSetter} from "../types";
import {Socket} from "../HuskyChatBot";

 
export class HCBotInfoMeAvatar implements IHCBotGetterSetter<Buffer> {

	public constructor(socket: Socket) {

	}

	public async get(): Promise<Buffer> {

		return Buffer.alloc(0, 0);

	}

	public async set(value: Buffer): Promise<void> {



	}

}