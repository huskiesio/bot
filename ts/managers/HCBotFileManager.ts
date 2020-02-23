/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as FS from "fs";
import * as OS from "os";
import * as Path from "path";

export class HCBotFileManager {

	private static readonly FILE_SYSTEM_FOLDER_NAME: string = ".huskies-io";
	private static readonly FILE_SEPARATOR: string = Path.sep;

	private static path(): string {

		const homeDir: string = OS.homedir();
		return  homeDir + this.FILE_SEPARATOR + this.FILE_SYSTEM_FOLDER_NAME + this.FILE_SEPARATOR;

	}

	private static checkDirectory(): void {

		if (!FS.existsSync(this.path())) FS.mkdirSync(this.path());

	}

	public static save(name: string, data: Buffer): void {

		this.checkDirectory();
		FS.writeFileSync(this.path() + name, data);

	}

	public static get(name: string): Buffer | undefined {

		if (!FS.existsSync(this.path() + name)) return undefined;
		return FS.readFileSync(this.path() + name);

	}

}