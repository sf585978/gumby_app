const Discord = require("discord.js");
//const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
  	const args = commandBody.split(' ');
  	const command = args.shift().toLowerCase();

	if (command === "egg") {
    		message.channel.send(`Have an egg!`, {files: ["https://pbs.twimg.com/profile_images/482980960258908160/XawV_qBz.jpeg"]});
  	};
	
	if (command === "balmek") {
    		message.channel.send(`Oops! Toasted!`, {files: ["https://www.belloflostsouls.net/wp-content/uploads/2018/03/7a.jpg"]});
  	};
	
	if (command === "shitpost") {
		
		message.channel.send(`Looks like someone's been shitposting! Cut it out!`, {files: ["https://i.kym-cdn.com/photos/images/facebook/000/866/490/6c4.png"]});
		// if (Math.random() < 0.15) {
		//	message.channel.send(`Looks like someone's been shitposting! Cut it out!`, {files: ["https://i.kym-cdn.com/photos/images/facebook/000/866/490/6c4.png"]});
		// } else {
		//	message.channel.send(`I looked into this post and determined it is not a shitpost!`, {files: ["https://media.makeameme.org/created/one-does-not-5b5c3e.jpg"]});
		//};
	};
});

client.login(process.env.BOT_TOKEN);
