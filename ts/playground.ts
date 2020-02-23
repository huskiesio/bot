/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HuskyChatBot} from "./index";

(async (): Promise<void> => {

	// const token: string = await HuskyChatBot.signUpStart({
	// 	email: "ejcobb@mtu.edu",
	// 	password: "alpine",
	// 	firstName: "Elijah",
	// 	lastName: "Cobb",
	// 	deviceName: "XPS"
	// });
	// console.log(token);

	// const deviceId: string = await HuskyChatBot.signUpFinish("B2A85D", "5e5238f32f9f3078c5a9301a");
	// console.log(deviceId);

	const deviceId: string = "5e5239092f9f3078c5a9301c";
	const bot: HuskyChatBot = await HuskyChatBot.signIn("ejcobb", "alpine", deviceId);
	console.log(await bot.info().me().firstName());
	console.log(await bot.info().me().lastName());
	console.log(await bot.info().me().userId());
	console.log(await bot.info().me().username());
	console.log(await bot.info().me().publicKey());


})().then((): void => {}).catch((e: any): void => console.error(e));