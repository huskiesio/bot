/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */


export interface SiObject {
	id: string;
	updatedAt: number;
	createdAt: number;
}

export interface HCBotUser extends SiObject{
	firstName: string;
	lastName: string;
	username: string;
	avatar: () => Promise<Buffer>;
	publicKey: Buffer;
}

export interface HCBotThread extends SiObject{
	name: string;
	description: string;
}

export interface HCBotGetterSetter<T> {
	get: () => T;
	set: (value: T) => Promise<void>;
}

export interface HCBotInfoMeName {
	first: HCBotGetterSetter<string>;
	last: HCBotGetterSetter<string>;
}

export interface HCBotInfoMe {
	username: string;
	userId: string;
	name: HCBotInfoMeName;
	avatar: HCBotGetterSetter<Buffer>;
}

export interface HCBotInfoServer {
	domain: string;
	ip: string;
	ping: () => Promise<number>;
}

export interface HCBotInfo {
	me: HCBotInfoMe;
	server: HCBotInfoServer;
}

export interface HCBotMessage {
	timestamp: number;
	sender: HCBotUser;
	thread: HCBotThread;
	payload: string;
}

export type HCBotChatOnMessageHandler = (message: HCBotMessage) => Promise<void>;

export interface HCBotChatOnMessage {
	received: HCBotChatOnMessageHandler;
	sent: HCBotChatOnMessageHandler;
}

export type HCBotChatHistoryReturnType = Promise<HCBotMessage[]>;

export interface HCBotChatHistory {
	last: (count: number) => HCBotChatHistoryReturnType;
	range: (fromTimestamp: number, toTimestamp: number) => HCBotChatHistoryReturnType;
	me: () => HCBotChatHistoryReturnType;
	in: (threadId: string) => HCBotChatHistoryReturnType;
}

export interface HCBotChat {
	onMessage: HCBotChatOnMessage;
	send: (thread: string | HCBotThread, payload: string) => Promise<string>;
	history: HCBotChatHistory;
}

export interface HCBotDirectoryUser {
	firstName: string;
	lastName: string;
	username: string;
}

export type HCBotDirectoryReturnType = Promise<HCBotDirectoryUser[]>;

export interface HCBotDirectory {
	query: (query: string) => HCBotDirectoryReturnType;
	friends: () => Promise<HCBotUser[]>;
	getUser: (username: string) => Promise<HCBotUser | HCBotDirectoryUser | undefined>;
}



export interface HCBotCryptoKeyPair {
	public: () => string;
	private: () => string;
}

export interface HCBotCrypto {
	keys: {
		user: HCBotCryptoKeyPair;
		device: HCBotCryptoKeyPair;
	};
	encrypt: (data: Buffer, user: HCBotUser) => Promise<Buffer>;
	decrypt: (data: Buffer) => Promise<Buffer>;
}

/**
 * For types on a HuskyChatBot
 * Is subject to change lol....
 */
export interface HCBot {
	info: HCBotInfo;
	chat: HCBotChat;
	directory: HCBotDirectory;
	crypto: HCBotCrypto;
}

/**
 * The static items on a husky chat bot (just so you have them).
 */
export interface HuskyChatBotStatic {
	signIn: (username: string, password: string) => Promise<HCBot>;
	signUp: {
		start: (email: string, password: string) => Promise<void>;
		finalize: (email: string, code: number) => Promise<void>;
	};
}