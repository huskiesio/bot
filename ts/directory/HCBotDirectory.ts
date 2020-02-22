/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {IHCBotDirectory} from "../types";

export class HCBotDirectory implements IHCBotDirectory {
	friends: () => Promise<IIHCBotUser[]>;
	getUser: (username: string) => Promise<IIHCBotUser | IHCBotDirectoryUser | undefined>;
	query: (query: string) => IHCBotDirectoryReturnType;

}