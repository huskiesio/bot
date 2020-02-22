/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotCrypto, IHCBotCryptoKeyPair} from "../types";

export interface IHCBotCryptoKeys {
	user: () => IHCBotCryptoKeyPair;
	device: () => IHCBotCryptoKeyPair;
}

export class HCBotCrypto implements IHCBotCrypto {

	public decrypt(data: Buffer): Promise<Buffer> {}
	public encrypt(data: Buffer, user: IIHCBotUser): Promise<Buffer> {}
	public keys(): IHCBotCryptoKeys {}
}