
const talkedRecently = new Set();
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    



    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

        let msgping1 = new Date();

    let botping = new Date() - msg.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('msg Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${msg.author.tag}`);

        
    return msg.channel.send(pingembed);



        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
        

};

module.exports.help = {
    name: "PING"
};