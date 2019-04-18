const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
const antispam = require("discord-anti-spam")
let user = "542571286023634957"
let jasper = "428986435903684620"

const http = require('http');
const port = process.env.PORT || 3000
http.createServer().listen(port);


const settings = require("./settings.json");
bot.commands = new Discord.Collection();



const prefix = settings.prefix;
const token = process.env.TOKEN;
const owner = settings.owner;


fs.readdir("./cmds", (err,files) => {
	if (err) {
		console.log(err);
	}

	let cmdFiles = files.filter(f => f.split(".").pop() == "js");

	if (cmdFiles.length == 0){
	console.log("no files found");
	return;
	}
	cmdFiles.forEach((f,i) => {
	let props = require(`./cmds/${f}`);
	console.log(`${i+1}: ${f} loaded`);
	bot.commands.set(props.help.name, props);
	})
})


let raw = fs.readFileSync("./roles.json")
let allowedRoles = JSON.parse(raw);

let validation = function(serverRoles, userRoles){
	let val = false;
	serverRoles.forEach((role) => {
		userRoles.forEach((user) => {
			if (role == user){
				val = true;
			}
		});
	});
	return val;

}

bot.on("ready", async () => {
	console.log("oji bot is now ready");
	bot.user.setActivity("v2.0.0")
});



bot.on("message",msg => {
	
	if(msg.channel.type == "dm") return;
	if (msg.author.bot) return;


	let msg_array = msg.content.split(" ");
	let command1 = msg_array[0];
	let command = command1.toUpperCase();
	let args = msg_array.slice(1);

	if (!command.startsWith(prefix)) return;
	let cmd = bot.commands.get(command.slice(prefix.length));
		if (cmd){

				if (msg.channel.id == "549862419313197078" || msg.channel.id == "507644998943113246" || msg.channel.id === "546328107703992332") {

			cmd.run(bot,msg,args);
			console.log(`${msg.author.username} used the command `)
			} else {
	
msg.channel.send("Please use #Bot-Spam")
		return;

}
		
	
}
		

	


});

bot.login(token);
