const Discord = require("discord.js")
const Client = require('fortnite-master');
const db = require("quick.db")
let cooldown = new Set();
const ms = require(`parse-ms`);
 
  





module.exports.run = async (bot,message,args) => {
    
    
var user = message.mentions.users.first() || message.author;






   
  
	let cooldown = 5,
		amount = 250;
		
	let lastDaily = await db.fetch(`lastDailyDaily_${message.author.id}`);
	
	if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
		let timeObj = ms(cooldown - (Date.now() - lastDaily));
		
		
		message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**`)
		
		
		
		} else {

			
			let wallet = db.get(`userWallet_${user.id}`)

if (wallet === null) wallet = 0;
if (wallet < 50 || wallet === "50") {
	message.channel.send("You only have " + wallet + " you need 100 to play")
	return;
}

const filter = m => m.author.id === message.author.id;
message.channel.send("Call heads or tails").then(r => r.delete(10000));
message.channel.awaitMessages(filter, {
	max:1,
	time: 10000
}).then(collected => {

	let aaaaa = collected.first().content
	let aaaaaa = aaaaa.toUpperCase();

	if (collected.first().content === null) {
		message.channel.send("canceled!")
		return;
}

//canceled
	if (aaaaaa === "CANCEL") {
		message.channel.send("canceled!")
}

//heads
	if (aaaaaa === "HEADS") {
	    let Flip = new Discord.RichEmbed()
	    .setTitle("Flipping Coin...")
	    message.channel.send(Flip)

		setTimeout(function(){ 
			
	}, 2000);

	    let getRandomNumber = function(start, range) {
	    let getRandom = Math.floor((Math.random() * range) + start);
	    return getRandom;

	}
	    let random = getRandomNumber(1, 3)
		console.log(random)

	    if(random === 1) {
		let headwin = new Discord.RichEmbed()
		.setTitle("Heads")
		.setDescription("You won 100 coins")
		message.channel.send(headwin)
	        db.add(`userWallet_${user.id}`, 100)
		} else {
		let headloos = new Discord.RichEmbed()
		    .setTitle("Tails")
		    .setDescription("You lost 100 coins")
		message.channel.send(headloos)
		db.subtract(`userWallet_${user.id}`, 100)

		}

	}
	
//tails
	
		if (aaaaaa === "TAILS") {
		let Flip = new Discord.RichEmbed()
		.setTitle("Flipping Coin...")
		message.channel.send(Flip)

		setTimeout(function(){ 
			    
	    }, 2000);

		let getRandomNumber = function(start, range) {
		let getRandom = Math.floor((Math.random() * range) + start);
		return getRandom;

	    }
		let random = getRandomNumber(1, 3)

		if(random === 1) {
		    let tailswin = new Discord.RichEmbed()
		    .setTitle("Heads")
		    .setDescription("You won 100 coins")
		    message.channeel.send(tailswin)
			db.add(`userWallet_${user.id}`, 100)
		    } else {
		    let tailsloos = new Discord.RichEmbed()
			.setTitle("Tails")
			.setDescription("You lost 100 coins")
		    message.channel.send(tailsloos)
			db.subtract(`userWallet_${user.id}`, 100)



			
			db.set(`lastDailyDaily_${message.author.id}`, Date.now());
			db.add(`userWallet_${user.id}`, 250)
			
			
			
			
			}
			
    		    }

	    })
}

}








	

		


module.exports.help = {
	name: "FLIP"
}


















