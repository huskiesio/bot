/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotCryptoKeyPair} from "../types";

export class HCBotCryptoKeyPair implements IHCBotCryptoKeyPair {

	public private(): Buffer { return Buffer.alloc(0, 0); }
	public public(): Buffer { return Buffer.alloc(0, 0); }

}