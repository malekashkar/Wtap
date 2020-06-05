const Discord = require("discord.js");

module.exports = async(client, member) => {
    let welcome = member.guild.channels.cache.get(client.config.welcome);
    let general = member.guild.channels.cache.get(client.config.general);
    let roles = member.guild.channels.cache.get(client.config.roles);

    let embed = new Discord.MessageEmbed()
    .setColor(client.config.color)
    .setTitle(`<:wtap:711010275096264705> ${member}\nWelcmoe to **WTap.us** Official Discord! Make sure to chat with out community in ${general}!\n\n**SERVER INFORMATION**\n\nServer IP: WTap.us\n\nBe sure to react in ${roles} to receive notifications for Network Updates!`)
    .setFooter(`Members: ${member.guild.memberCount}`)
    .setTimestamp()
    welcome.send(embed);
}