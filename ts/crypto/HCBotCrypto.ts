/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCBotCrypto, IHCBotCryptoKeyPair, IHCBotUser} from "../types";
import {HCBotUser, Socket} from "..";

export interface IHCBotCryptoKeys {
	user: () => IHCBotCryptoKeyPair;
	device: () => IHCBotCryptoKeyPair;
}

export class HCBotCrypto implements IHCBotCrypto {

	public constructor(socket: Socket) {

	}

	public async decrypt(data: Buffer): Promise<Buffer> { return Buffer.alloc(0, 0);}
	public async encrypt(data: Buffer, user: IHCBotUser): Promise<Buffer> { return Buffer.alloc(0, 0); }
	public keys(): IHCBotCryptoKeys { return {} as IHCBotCryptoKeys; }
}