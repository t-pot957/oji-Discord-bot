const Discord = require("discord.js")
const Client = require('fortnite-master');
const db = require("quick.db")
let cooldown = new Set();
let cdseconds = 5;

module.exports.run = async (bot,message,args) => {
  

if (cooldown.has(message.author.id)){
	message.channel.send("You have to wait 5 seconds")
	return;
}

if (!cooldown.has(message.author.id)){
	cooldown.add(message.author.id);
	



if(!args[2]) return message.reply("please ask for a full question!");
let replies = ["Yes.", "No.", "I don't know.", "Ask again later."];

let result = Math.floor((Math.random() * replies.length))
let question = args.join(" ")

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField("Question", question)
.addField("Answer", replies[result])

message.channel.send(ballembed)



setTimeout(() => {
	cooldown.delete(message.author.id)

}, cdseconds * 1000)

	

}		

}

module.exports.help = {
	name: "8BALL"
}
