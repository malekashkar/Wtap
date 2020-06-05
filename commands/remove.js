const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    if(!message.channel.parent || message.channel.parent.id !== client.config.ticketParent) return;

    function embed(text) {
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setDescription(text)
        return embed;
    }

    let user = message.mentions.members.first();
    if(!user) return message.channel.send(embed('Please mention a member of the discord.'));

    message.channel.send(embed(`User ${user} has been removed from the ticket.`));
    message.channel.createOverwrite(user, { SEND_MESSAGES: false, VIEW_CHANNEL: false });
}