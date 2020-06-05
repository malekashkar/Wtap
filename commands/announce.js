const Discord = require("discord.js");

exports.run = async(client, message, args) => {
        function embed(text) {
            let embed = new Discord.MessageEmbed()
            .setColor(client.config.color)
            .setDescription(text)
            return embed;
        }

    let announce = message.guild.channels.cache.get(client.config.announcements);
    let topic = args.join(" ").split("^")[0];
    let msg = args.join(" ").split("^")[1];

    if(!topic || !msg) return message.channel.send(embed(`**Usage:** ${client.config.prefix}announce <topic> ^ <message>`));

    let embed = new Discord.MessageEmbed()
    .setColor(client.config.color)
    .setTitle(topic)
    .setDescription(msg)
    announce.send(embed);
}