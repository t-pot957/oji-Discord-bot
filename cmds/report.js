module.exports.run = async (bot,message,args) => {

let cookie = "352442311340457984"
let author = message.author
console.log(author)

message.delete()

if (args.length === 0) {
	return message.reply("I can’t report no one!")
}
if (args.length === 2) {
	let theMessage = args.join(" ")
	
	message.author.send("Thank you for your report. The moderation team has received your report.")
	cookie.send(author + "reported the player " + theMessage)

}
}

module.exports.help = {
name: "REPORT"
}