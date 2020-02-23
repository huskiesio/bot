/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HCBotInfoMeAvatar} from "./HCBotInfoMeAvatar";
import {Socket} from "../HuskyChatBot";
import { IHCAPIUser } from "@huskiesio/types";

export class HCBotInfoMe {

	private _firstName: string | undefined;
	private _lastName: string | undefined;
	private _userId: string | undefined;
	private _username: string | undefined;
	private _publicKey: Buffer | undefined;
	private _updatedAt: number | undefined;
	private _createdAt: number | undefined;
	private readonly _avatar: HCBotInfoMeAvatar;
	private readonly socket: Socket;

	public constructor(socket: Socket) {

		this.socket = socket;
		this._avatar = new HCBotInfoMeAvatar(socket);

	}

	private async fetchSelf(): Promise<void> {

		const me: IHCAPIUser = await this.socket.invoke("user me", true);

		this._firstName = me.firstName;
		this._lastName = me.lastName;
		this._publicKey = me.publicKey;
		this._username = me.username;
		this._userId = me.id;
		this._updatedAt = me.updatedAt;
		this._createdAt = me.createdAt;


	}


	public async firstName(): Promise<string> {

		if (this._firstName === undefined) await this.fetchSelf();
		if (this._firstName === undefined) throw new Error("Unable to fetch information");

		return this._firstName;

	}

	public async lastName(): Promise<string> {

		if (this._lastName === undefined) await this.fetchSelf();
		if (this._lastName === undefined) throw new Error("Unable to fetch information");

		return this._lastName;

	}

	public async userId(): Promise<string> {

		if (this._userId === undefined) await this.fetchSelf();
		if (this._userId === undefined) throw new Error("Unable to fetch information");

		return this._userId;

	}

	public async username(): Promise<string> {

		if (this._username === undefined) await this.fetchSelf();
		if (this._username === undefined) throw new Error("Unable to fetch information");

		return this._username;

	}

	public async publicKey(): Promise<Buffer> {

		if (this._publicKey === undefined) await this.fetchSelf();
		if (this._publicKey === undefined) throw new Error("Unable to fetch information");

		return this._publicKey;

	}

	public avatar(): HCBotInfoMeAvatar { return this._avatar; }

}