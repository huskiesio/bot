/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {IHCAPIDirectoryContact, IHCAPICurried} from "@huskiesio/types";

export class HCBotDirectoryContact implements IHCAPICurried<IHCAPIDirectoryContact> {

	private contact: IHCAPIDirectoryContact;

	public constructor() {

		this.contact = {} as IHCAPIDirectoryContact;

	}

	public firstName(): string { return this.contact.firstName; }
	public lastName(): string { return this.contact.lastName; }
	public username(): string { return this.contact.username; }

}