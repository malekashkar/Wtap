const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    let ticket = message.guild.channels.cache.get(client.config.ticket);

    let embed = new Discord.MessageEmbed()
    .setTitle(`Create a Support Ticket`)
    .setDescription(`React to this message to open a support ticket!`)
    .setFooter(`WTap Support System`)
    .setTimestamp()
    let msg = await ticket.send(embed); msg.react("🎫");
}