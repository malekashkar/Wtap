const Discord = require("discord.js");

module.exports = async(client, reaction, user) => {
    if(user.bot) return;
    if(reaction.message.partial) reaction.message.fetch();

    let message = reaction.message;
    let member = message.guild.members.cache.get(user.id);

    let role1 = message.guild.roles.cache.get(client.config.wtapRole);
    let role2 = message.guild.roles.cache.get(client.config.upVoteRole);

    if(message.channel.id === client.config.rolesChannel) {
        reaction.users.remove(user);

        if(reaction.emoji.name === "wtap") member.roles.add(role1);
        else if(reaction.emoji.name === "upvote") member.roles.add(role2);
    }

    if(message.channel.id !== client.config.ticket) return;
    if(reaction.emoji.name !== "🎫") return;

    reaction.users.remove(user);

    let chan = await message.guild.channels.create(`${user.username}-ticket`, { type: `text` });
    chan.createOverwrite(message.guild.id, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
    chan.createOverwrite(user, { VIEW_CHANNEL: true, SEND_MESSAGES: true });

    let embed = new Discord.MessageEmbed()
    .setColor(client.config.color)
    .setTitle(`Ticket Created`)
    .setDescription(`Thank you for creating a ticket! Be patient and staff will be right with you.`)
    .setThumbnail(user.displayAvatarURL())
    .setFooter(`WTap Tickets`)
    .setTimestamp()
    chan.send(embed);
}