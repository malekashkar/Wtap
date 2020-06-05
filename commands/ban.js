const Discord = require("discord.js");
const moment = require("moment");

exports.run = async(client, message, args) => {
    function embed(text) {
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setDescription(text)
        return embed;
    }

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(embed(`Please mention a member of the discord.`));
    if(!member.banable) return message.channel.send(embed(`I do not have the permission to do that.`));
    
    await member.ban();
    message.channel.send(embed(`${member.user} has been banned by ${message.author}.`));

    let banLogs = message.guild.channels.cache.get(client.config.banLogs);
    if(!banLogs) return;

    let banned = new Discord.MessageEmbed()
    .setColor(client.config.color)
    .setTitle(`User Banned`)
    .addField(`Banned By`, `${message.author}`, true)
    .addField(`User Banned`, `${user}`, true)
    .addField(`Time`, moment(Date.now()).format(`lll`))
    banLogs.send(banned);
}