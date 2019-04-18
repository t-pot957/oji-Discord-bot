const Discord = require('discord.js')
const ytdl = require(`ytdl-core`);
 
module.exports.run = async (bot,message,args) => {



if (message.author.id === "352442311340457984") {

	if (args.length === 0) {
		let error = new Discord.RichEmbed()
		.setColor("RED")
		.setTitle(":x: Missing args")
		.setDescription("play [Link or query]")
		message.channel.send(error)

} else {
	
	let Music = args.join("")
	
	message.channel.send(":youtube~2: Searching :mag_right: ` " + Music) 
 
	const streamOptions = {seek: 0, volume: 1};
	let voiceChannelID = "546333520419618877";

	console.log("starting voice command");

	if (voiceChannelID != null) {
		if (message.guild.channels.get(voiceChannelID)){
			let vc = message.guild.channels.get(voiceChannelID);
			console.log("Next stop, connection");

			vc.join().then(connection => {
				console.log("[VOICE CHANNEL] joined countdown channel.");
				const stream = ytdl(Music, {filter: `audioonly`});
				const dispatcher = connection.playStream(stream, streamOptions);

				dispatcher.on("end", end => {
					console.log("[VOICE CHANNEL] left countdown channel.")
				});
			}).catch(err => {
				console.log(err);
			})
	


		}

		}
	}
} else {

	message.channel.send("Only admins can use this command")
}

}



 

 
module.exports.help = {
name: "MUSIC"
}
