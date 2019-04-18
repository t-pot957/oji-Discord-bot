
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot,message,args) => {

var user = message.mentions.users.first() || message.author;
 
if (args.length < 1) return message.reply("You can not gamble nothing")
    let theMessage = args.join(" ")
 
let coins = theMessage
let newCoins = coins * 2
 
 
let getRandomNumber = function(start, range) {
	let getRandom = Math.floor((Math.random() * range) + start);
	return getRandom;

}

 		let random = getRandomNumber(1, 2)
	console.log(random)

	if (random === 1) {
	    let gambleWon = new Discord.RichEmbed()
	        .setDescription("You won " + newCoins + " coins")
	       
	        message.channel.send({embed: gambleWon})

	db.add(`userWallet_${user.id}`, newCoins)

	} else if (random === 2) { 
	    let gambleLost = new Discord.RichEmbed()
	        .setDescription("You lost " + newCoins + " coins")
	 
	      message.channel.send({embed: gambleLost})

	db.subtract(`userWallet_${user.id}`, newCoins)

	 }
    
}
 
module.exports.help = {
name: "GAMBLE"
}