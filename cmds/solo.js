





//Automated last3 detection
//Add Yunite 1 (don't forget the 1 !) as friend in Fortnite. Yunite will detect your last3 automatically, and you don't have to enter them.
//Hosted by Cookie#0373




const ytdl = require(`ytdl-core`);
const Discord = require('discord.js');
 
module.exports.run = async (bot,message,args) => {
 
	let start = new Discord.RichEmbed()
	.setTitle("SOLO SNIPE")
	.setDescription("A new snipe is starting in **1 minute.** Get ready!")
	.addField("**Voice channel to join**", "**testing**")
	.addField("Game Mode", "SOLO")
	.addField("Instructions", "- Preload your content by pressing Play in-game and cancel when it reaches 100%.- Join the voice channel; we will play a five second countdown.- Ready up on zero,") 
	.setFooter(`Hosted by ${message.author.tag}`);
	message.channel.send(start)
}



 

 
module.exports.help = {
name: "SOLO"
}