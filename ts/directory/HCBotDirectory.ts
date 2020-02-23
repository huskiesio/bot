/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotDirectory, IHCBotUser} from "../types";

export class HCBotDirectory implements IHCBotDirectory {

	public async friends(): Promise<IHCBotUser[]> { return []; }
	public async getUser(username: string): Promise<IHCBotUser> { return {} as IHCBotUser; }
	public async query(query: string): Promise<IHCBotUser[]> { return []; }

}