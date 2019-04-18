
const Discord = require('discord.js')
const db = require('quick.db')
 
module.exports.run = async (bot,message,args) => {
 
	let help2 = new Discord.RichEmbed()
	.setTitle("Player help")
        .setColor("#004bff")
        .addField("!8ball", "Ask the magic 8ball about your future!")
	.addField("!balance", "Check your wallet & BankAccount")
        .addField("!daily", "Get your daily amount of coins")
	.addField("!deposit", "Deposit money into the bank")
	.addField("!withdraw", "Withdraws money from the bank")
	.addField("!flip", "Flip a coin, and if you call it you win!")
	.addField("!gamble", "Take your chances at gambling.")
	.addField("!ping", "Gets you ping")
	.setFooter("FNM-Scrims")
        .setTimestamp(new Date());

	message.channel.send({embed: help2})	 
 
}
 
module.exports.help = {
name: "HELP"
}