/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */


export interface ISiObject {
	id: string;
	updatedAt: number;
	createdAt: number;
}

export interface IIHCBotUser extends ISiObject{
	firstName: () => string;
	lastName: () => string;
	username: () => string;
	avatar: () => Promise<Buffer>;
	publicKey: () => Buffer;
}

export interface IIHCBotThread extends ISiObject{
	name: () => string;
	description: () => string;
}

export interface IIHCBotGetterSetter<T> {
	get: () => Promise<T>;
	set: (value: T) => Promise<void>;
}

export interface IHCBotInfoMe {
	username: () => string;
	userId: () => string;
	firstName: () => string;
	lastName: () => string;
	avatar: () => IIHCBotGetterSetter<Buffer>;
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
	sender: () => IIHCBotUser;
	thread: () => IIHCBotThread;
	payload: () => string;
}

export type IHCBotChatOnMessageHandler = (message: IHCBotMessage) => Promise<void>;

export interface IHCBotChatOnMessage {
	received: IHCBotChatOnMessageHandler;
	sent: IHCBotChatOnMessageHandler;
}

export type IHCBotChatHistoryReturnType = Promise<IHCBotMessage[]>;

export interface IHCBotChatHistory {
	last: (count: number) => IHCBotChatHistoryReturnType;
	range: (fromTimestamp: number, toTimestamp: number) => IHCBotChatHistoryReturnType;
	me: () => IHCBotChatHistoryReturnType;
	in: (threadId: string) => IHCBotChatHistoryReturnType;
}

export interface IHCBotChat {
	onMessage: IHCBotChatOnMessage;
	send: (thread: string | IIHCBotThread, payload: string) => Promise<string>;
	history: IHCBotChatHistory;
}

export interface IHCBotDirectoryUser {
	firstName: () => string;
	lastName: () => string;
	username: () => string;
}

export type IHCBotDirectoryReturnType = Promise<IHCBotDirectoryUser[]>;

export interface IHCBotDirectory {
	query: (query: string) => IHCBotDirectoryReturnType;
	friends: () => Promise<IIHCBotUser[]>;
	getUser: (username: string) => Promise<IIHCBotUser | IHCBotDirectoryUser | undefined>;
}

export interface IHCBotCryptoKeyPair {
	public: () => string;
	private: () => string;
}

export interface IHCBotCrypto {
	keys: {
		user: () => IHCBotCryptoKeyPair;
		device: () => IHCBotCryptoKeyPair;
	};
	encrypt: (data: Buffer, user: IIHCBotUser) => Promise<Buffer>;
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