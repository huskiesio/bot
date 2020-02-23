/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {Socket} from "./HuskyChatBot";


export interface ISiObject {
	id: string;
	updatedAt: number;
	createdAt: number;
}

export interface IHCBotUser extends ISiObject{
	firstName: () => string;
	lastName: () => string;
	username: () => string;
	avatar: () => Promise<Buffer>;
	publicKey: () => Buffer;
}

export interface IHCBotThread extends ISiObject{
	name: () => string;
	description: () => string;
}

export interface IHCBotGetterSetter<T> {
	get: () => Promise<T>;
	set: (value: T) => Promise<void>;
}

export interface IHCBotInfoMe {
	username: () => string;
	userId: () => string;
	firstName: () => string;
	lastName: () => string;
	avatar: () => IHCBotGetterSetter<Buffer>;
}

export interface IHCBotInfoServer {
	domain: () => string;
	ip: () => string;
	ping: () => Promise<number>;
}

export interface IHCBotInfo {
	me: () => IHCBotInfoMe;
	server: () => IHCBotInfoServer;
}

export interface IHCBotMessage {
	timestamp: () => number;
	sender: () => IHCBotUser;
	thread: () => IHCBotThread;
	payload: () => string;
}

export type IHCBotChatOnMessageHandler = (message: IHCBotMessage) => Promise<void>;


export type IHCBotChatHistoryReturnType = Promise<IHCBotMessage[]>;

export interface IHCBotChatHistory {
	last: (count: number) => IHCBotChatHistoryReturnType;
	range: (fromTimestamp: number, toTimestamp: number) => IHCBotChatHistoryReturnType;
	me: () => IHCBotChatHistoryReturnType;
	in: (threadId: string) => IHCBotChatHistoryReturnType;
}

export interface IHCBotChat {
	onReceived: (handler: IHCBotChatOnMessageHandler) => void;
	onSent: (handler: IHCBotChatOnMessageHandler) => void;
	send: (thread: string | IHCBotThread, payload: string) => Promise<string>;
	history: () => IHCBotChatHistory;
	threads: () => Promise<IHCBotThread[]>;
}

export interface IHCBotDirectoryUser {
	firstName: () => string;
	lastName: () => string;
	username: () => string;
}

export type IHCBotDirectoryReturnType = Promise<IHCBotDirectoryUser[]>;

export interface IHCBotDirectory {
	query: (query: string) => IHCBotDirectoryReturnType;
	friends: () => Promise<IHCBotUser[]>;
	getUser: (username: string) => Promise<IHCBotUser | IHCBotDirectoryUser | undefined>;
}

export interface IHCBotCryptoKeyPair {
	public: () => Buffer;
	private: () => Buffer;
}

export interface IHCBotCrypto {
	keys: () => {
		user: () => IHCBotCryptoKeyPair;
		device: () => IHCBotCryptoKeyPair;
	};
	encrypt: (data: Buffer, user: IHCBotUser) => Promise<Buffer>;
	decrypt: (data: Buffer) => Promise<Buffer>;
}

/**
 * For types on a HuskyChatBot
 * Is subject to change lol....
 */
export interface IHCBot {
	info: () => IHCBotInfo;
	chat: () => IHCBotChat;
	directory: () => IHCBotDirectory;
	crypto: () => IHCBotCrypto;
}

/**
 * The static items on a husky chat bot (just so you have them).
 */
export interface IHCBotStatic {
	signIn: (username: string, password: string) => Promise<IHCBot>;
	signUp: {
		start: (email: string, password: string) => Promise<void>;
		finalize: (email: string, code: number) => Promise<void>;
	};
}