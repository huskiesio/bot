/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HuskyChatBot} from "./index";
import {IHCBotMessage} from "./types";

(async (): Promise<void> => {

	const bot: HuskyChatBot = await HuskyChatBot.signIn("", "");

	await bot.chat().onReceived(async(message: IHCBotMessage): Promise<void> => {



	});

	await bot.chat().onSent(async(message: IHCBotMessage): Promise<void> => {



	});

	await bot.chat().threads();

	await bot.chat().send("", "");


})();