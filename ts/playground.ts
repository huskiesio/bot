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
	//
	// console.log(token);

	// const deviceId: string = await HuskyChatBot.signUpFinish("C21651", "5e52241381e2bf6262ee10c1");
	// console.log(deviceId);

	const deviceId: string = "5e52242981e2bf6262ee10c3";
	const bot: HuskyChatBot = await HuskyChatBot.signIn("ejcobb", "alpine", deviceId);

	console.log("YAY signed in!");

	console.log(bot.info().me().firstName());


})().then((): void => {}).catch((e: any): void => console.error(e));