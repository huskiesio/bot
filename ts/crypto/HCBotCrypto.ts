/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotCrypto} from "../types";

export class HCBotCrypto implements IHCBotCrypto {
	decrypt: (data: Buffer) => Promise<Buffer>;
	encrypt: (data: Buffer, user: IIHCBotUser) => Promise<Buffer>;
	keys: { user: IHCBotCryptoKeyPair; device: IHCBotCryptoKeyPair };
}