
const Discord = require('discord.js')
const db = require('quick.db')
 
module.exports.run = async (bot,message,args) => {
 

 
var user = message.mentions.users.first() || message.author;     
        let wallet = await db.fetch(`userWallet_${user.id}`)
       
        if (wallet === null) wallet = 50;

	let BankAccount = await db.fetch(`userBankAccount_${user.id}`)
	        if (BankAccount === null) BankAccount = 50;
       
        let Balance = new Discord.RichEmbed()
        .setTitle('Here is your balance, ' + user.username)
	.addField("**Your wallet**: " + wallet + " coins", "**Bank account**: " + BankAccount + " coins")
        .setColor('#ffffff')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send({embed: Balance})
 
}
 
module.exports.help = {
name: "BAL"
}