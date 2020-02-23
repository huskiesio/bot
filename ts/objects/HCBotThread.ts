/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCAPICurried, IHCAPIThread} from "@huskiesio/types";
import {HCBotUser} from "./HCBotUser";

export class HCBotThread implements IHCAPICurried<IHCAPIThread> {

	private _name: string;
	private _description: string;
	private _memberIds: string[];

	public constructor() {

		this._name = "";
		this._description = "";
		this._memberIds = [];

	}

	public name(): string { return this._name; }
	public description(): string { return this._description; }
	public memberIds(): string[] { return this._memberIds; }
	public members(): HCBotUser[] { return []; }
	public id(): string { return ""; }
	public updatedAt(): number { return 0; }
	public createdAt(): number { return 0; }

}