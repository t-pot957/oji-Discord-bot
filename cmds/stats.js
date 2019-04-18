const discord = require("discord.js")
const Client = require('fortnite-master');
const fortnite = new Client('2cb3bbb0-a4ab-4e7b-8237-6dfa0c54e024');

module.exports.run = async (bot,message,args) => {

	let username = args[0];
	let platform = args[1] || "pc";

	if(!username) return message.reply("please provide a username.")
	
	let data = fortnite.user(username, platform).then(data => {
		console.log(data)
		
		let stats = data.stats
		let lifetime = stats.lifetime
		let lifekills = lifetime.kills
		let score = lifetime.score
		let lifewins = lifetime.wins
		let lifeKD = lifetime.kd
		let lifeWinP1 = lifetime.wins / lifetime.matches * 100
		let lifeWinP = lifeWinP1.toFixed(2)
		let lifematches = lifetime.matches
		let avgkill1 = lifekills / lifematches
		let avgkill = avgkill1.toFixed(2) 
		console.log(score)
		console.log(lifekills)
		
	

		let jhgdf = new discord.RichEmbed()
		.setTitle(data.username)
		.setDescription("Lifetime Stats")
	        .setColor("#ffffff")
		.addField("Wins", lifewins, true)
	        .addField("Kills", lifekills, true)
		.addField("K/D", lifeKD, true)
		.addField("Win %", lifeWinP, true)
		.addField("Matches", lifematches, true)
		.addField("Avg. Kills", avgkill, true)
		message.channel.send(jhgdf)
		
	}).catch((err) => {
	      message.channel.send('Sorry that user was not found!');
	      console.error(err);
    });

}


module.exports.help = {
	name: "STATS"
}