const db = require(`quick.db`),
	ms = require(`parse-ms`);

module.exports.run = async (bot,message,args) => {
	var user = message.mentions.users.first() || message.author;   
  
	let cooldown = 8.64e+7,
		amount = 250;
		
	let lastDaily = await db.fetch(`lastDailyDaily_${message.author.id}`);
	
	if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
		let timeObj = ms(cooldown - (Date.now() - lastDaily));
		
		
		message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**`)
		
		
		
		} else {
			message.channel.send(`Successfully collected $${amount}`);
			
			db.set(`lastDailyDaily_${message.author.id}`, Date.now());
			db.add(`userWallet_${user.id}`, 250)
			
			
			
			
			}

}		


module.exports.help = {
	name: "DAILY"
}
