/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {KrRSA, KrRSAKeyPair} from "@element-ts/krypton";
import {HCBotFileManager} from "./HCBotFileManager";
 
export class HCBotKeyManager {

	private readonly name: string;
	private readonly _publicKey: Buffer;
	private readonly _privateKey: Buffer;

	private readonly PUBLIC_KEY_NAME: string = "PublicKey";
	private readonly PRIVATE_KEY_NAME: string = "PrivateKey";

	public constructor(name: string) {

		this.name = name;

		let publicKey: Buffer | undefined = HCBotFileManager.get(name + this.PUBLIC_KEY_NAME);
		let privateKey: Buffer | undefined = HCBotFileManager.get(name + this.PRIVATE_KEY_NAME);

		if (publicKey === undefined || privateKey === undefined) {

			const keys: KrRSAKeyPair = KrRSA.generateKeys(4096);
			publicKey = keys.publicKey;
			privateKey = keys.privateKey;

			HCBotFileManager.save(name + this.PUBLIC_KEY_NAME, publicKey);
			HCBotFileManager.save(name + this.PRIVATE_KEY_NAME, privateKey);

		}

		this._publicKey = publicKey;
		this._privateKey = privateKey;

	}

	public public(): Buffer { return this._publicKey; }
	public private(): Buffer { return this._privateKey; }

}