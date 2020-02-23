import {IHCBotGetterSetter} from "../types";

/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
 
export class HCBotInfoMeAvatar implements IHCBotGetterSetter<Buffer> {

	public async get(): Promise<Buffer> {

		return Buffer.alloc(0, 0);

	}

	public async set(value: Buffer): Promise<void> {



	}

}