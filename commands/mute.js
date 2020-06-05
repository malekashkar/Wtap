const Discord = require("discord.js");
const ms = require("ms");

exports.run = async(client, message, args) => {
    function embed(text) {
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setDescription(text)
        return embed;
    }

    let length = args[1];
    let user = message.mentions.members.first();
    if(!user || !length) return message.channel.send(embed(`**Usage:** ${client.config.prefix}mute <@user> <time>`));

    let role = message.guild.roles.cache.find(r => r.name === "Muted");

    if(!role) {
        try {
            role = await message.guild.roles.create({ name: "Muted"});

            message.guild.channels.cache.forEach(async chan => await chan.createOverwrite(role, { SEND_MESSAGES: false }));
        } catch(e) {
            console.log(e.stack);
        }
    }

    user.roles.add(role);

    setTimeout(() => {
        user.roles.remove(role);
    }, ms(length));
}