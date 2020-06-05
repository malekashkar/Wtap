const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    function embed(text) {
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setDescription(text)
        return embed;
    }

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(embed(`Please mention a member of the discord.`));
    if(!member.kickable) return message.channel.send(embed(`I do not have the permission to do that.`));

    await member.kick();
    message.channel.send(embed(`${member.user} has been kicked by ${message.author}.`));
}