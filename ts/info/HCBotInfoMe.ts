/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotInfoMe} from "../types";
import {HCBotInfoMeAvatar} from "./HCBotInfoMeAvatar";

export class HCBotInfoMe implements IHCBotInfoMe {

	private readonly _firstName: string;
	private readonly _lastName: string;
	private readonly _userId: string;
	private readonly _username: string;
	public readonly _avatar: HCBotInfoMeAvatar;

	public constructor() {

		this._firstName = "";
		this._lastName = "";
		this._userId = "";
		this._username = "";
		this._avatar = new HCBotInfoMeAvatar();

	}

	public firstName(): string { return this._firstName; }
	public lastName(): string { return this._lastName; }
	public userId(): string { return this._userId; }
	public avatar(): HCBotInfoMeAvatar { return this._avatar; }
	public username(): string { return this._username; }

}