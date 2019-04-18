module.exports.run = async (bot,message,args) => {



message.delete()
if (message.author.id === "352442311340457984") {


if (args.length === 0) 
	return message.reply("I can’t say nothing!")
	let theMessage = args.join(" ")
	message.channel.send("**FMS <@&539873603278340096>:**")
	message.channel.send("- " + theMessage)
	message.channel.send("Announce by " + `${message.author}`).then(sentEmbed => {
    	sentEmbed.react("👍")
    	sentEmbed.react("👎")
})
	} else {

	message.channel.send("You cant use this command")

}
}

module.exports.help = {
name: "EU-ANNOUNCE"
}
