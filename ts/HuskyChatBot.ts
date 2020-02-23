/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HCBotInfo} from "./info/HCBotInfo";
import {HCBotDirectory} from "./directory/HCBotDirectory";
import {HCBotChat} from "./chat/HCBotChat";
import {CommandSocket} from "@command-socket/node-client";
import {HCCSBotCommands, HCCSServerCommands} from "@huskiesio/types";
import {CommandRegistry} from "@command-socket/core";
import {KrRSA} from "@element-ts/krypton";
import {HCBotKeyManager} from "./managers/HCBotKeyManager";

interface SocketProps {}

export type Socket = CommandSocket<HCCSBotCommands, HCCSServerCommands, SocketProps>;

export class HuskyChatBot {

	private readonly _chat: HCBotChat;
	private readonly _directory: HCBotDirectory;
	private readonly _info: HCBotInfo;
	private readonly socket: Socket;
	private readonly deviceKeyManager: HCBotKeyManager;
	private readonly userKeyManager: HCBotKeyManager;
	private static readonly SOCKET_ADDRESS: string = "ws://localhost:3000";

	private constructor(socket: Socket) {

		this.deviceKeyManager = new HCBotKeyManager("device");
		this.userKeyManager = new HCBotKeyManager("user");

		this.socket = socket;
		this._chat = new HCBotChat(socket);
		this._directory = new HCBotDirectory(socket);
		this._info = new HCBotInfo(socket);

	}

	public chat(): HCBotChat { return this._chat; }
	public directory(): HCBotDirectory { return this._directory; }
	public info(): HCBotInfo { return this._info; }
	public kill(): Promise<void> { return this.socket.close(); }

	private static async init(): Promise<HuskyChatBot> {

		const commandRegistry: CommandRegistry = new CommandRegistry<HCCSBotCommands>();
		const socket: Socket = await CommandSocket.create(this.SOCKET_ADDRESS, commandRegistry);
		const bot: HuskyChatBot = new HuskyChatBot(socket);

		commandRegistry.addCommand("chat message received", bot._chat.handleChatMessageReceived);
		commandRegistry.addCommand("chat message sent", bot._chat.handleChatMessageSent);
		commandRegistry.addCommand("thread updated", bot._chat.handleThreadUpdated);

		return bot;

	}

	public static async signUpStart(obj: {email: string, password: string, firstName: string, lastName: string, deviceName: string}): Promise<string> {

		const socket: Socket = await CommandSocket.create<HCCSBotCommands, HCCSServerCommands, SocketProps>(this.SOCKET_ADDRESS);

		const deviceKeyManager: HCBotKeyManager = new HCBotKeyManager("device");
		const userKeyManager: HCBotKeyManager = new HCBotKeyManager("user");

		return await socket.invoke("signUp start", {
			email: obj.email,
			password: obj.password,
			userPublicKey: userKeyManager.public().toString("hex"),
			devicePublicKey: deviceKeyManager.public().toString("hex"),
			firstName: obj.firstName,
			lastName: obj.lastName,
			deviceName: obj.deviceName
		});

	}

	public static async signUpFinish(code: string, token: string): Promise<string> {

		const socket: Socket = await CommandSocket.create<HCCSBotCommands, HCCSServerCommands, SocketProps>(this.SOCKET_ADDRESS);
		return await socket.invoke("signUp finish", {code, token});

	}


	public static async signIn(username: string, password: string, deviceId: string): Promise<HuskyChatBot> {

		const bot: HuskyChatBot = await HuskyChatBot.init();

		const dataToSignString: string = await bot.socket.invoke("signIn start", {username, password, deviceId});
		const dataToSign: Buffer = Buffer.from(dataToSignString, "hex");
		const signedData: Buffer = KrRSA.sign(dataToSign, bot.deviceKeyManager.private());
		const signedDataString: string = signedData.toString("hex");
		await bot.socket.invoke("signIn finish", {signature: signedDataString});

		return bot;

	}

}
