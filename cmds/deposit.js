
const Discord = require('discord.js')
const db = require('quick.db')
 
module.exports.run = async (bot,message,args) => {

var user = message.mentions.users.first() || message.author;
let Wallet = await db.fetch(`userWallet_${user.id}`)
let BankAccount = await db.fetch(`userBankAccount_${user.id}`)
	if (Wallet < 0) Wallet = 0;
	        if (Wallet === null) Wallet = 50;

if (args.length === 1) {
	
	let aaaaa = args.join("")
	
	if (aaaaa > Wallet) {

	message.channel.send("You do not have that much money in your wallet")
	return;
}
if (aaaaa < Wallet) {

	message.channel.send("Successfully transferred")
	db.subtract(`userWallet_${user.id}`, aaaaa)
	db.add(`userBankAccount_${user.id}`, aaaaa)

}

if (aaaaa == Wallet) {

	message.channel.send("Successfully transferred")
	db.subtract(`userWallet_${user.id}`, aaaaa)
	db.add(`userBankAccount_${user.id}`, aaaaa)

}
	
	} else if(!args[1]) {
const filter = m => m.author.id === message.author.id;
message.channel.send("How much are you depositing?").then(r => r.delete(10000));
message.channel.awaitMessages(filter, {
	max:1,
	time: 10000
}).then(collected => {
	
	let money = collected.first().content

	

if (collected.first().content > Wallet) {

	message.channel.send("You do not have that much money in your wallet")
	return;
}
if (collected.first().content < Wallet) {

	message.channel.send("Successfully transferred")
	db.subtract(`userWallet_${user.id}`, collected.first().content)
	db.add(`userBankAccount_${user.id}`, collected.first().content)

}

if (collected.first().content == Wallet) {

	message.channel.send("Successfully transferred")
	db.subtract(`userWallet_${user.id}`, collected.first().content)
	db.add(`userBankAccount_${user.id}`, collected.first().content)

}


})

       
} 


 
}
 
module.exports.help = {
name: "DEPOSIT"
}