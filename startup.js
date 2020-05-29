const DISCORD = require("discord.js");
const DBL = require("dblapi.js");
require("dotenv").config();

const BOT = require("./bot.js");
const CON = require("./constants.js");

const CLIENT = new DISCORD.Client();
const DBL_API = new DBL(process.env.DBL_TOKEN);

const checks = {};

CLIENT.on("message", (m) => {
	const content = m.content;
	
	// Check if we should even be looking at the bot
	if (!content.startsWith(CON.PREFIX)) {
		return;
	}

	const channel = m.channel;
	const user = m.author;

	BOT.handleMessage(checks, content, channel, user);
});

CLIENT.on("ready", () => {
	// Give some diagnostic info when we log in
	console.log(`Logged in as ${CLIENT.user.tag}!`);

	// Every hour, update top.gg bot server count and log server count
	setInterval(() => {
		console.log(`Server count = ${CLIENT.guilds.size}`);
		DBL_API.postStats(CLIENT.guilds.size);
	}, 60000);
});

// Hook up to discord
CLIENT.login(process.env.BOT_TOKEN);