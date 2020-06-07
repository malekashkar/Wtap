const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Self-Assigned Roles`)
    .setDescription(`React to the roles below:\n\n**Network** <:wtap:711010275096264705>\n**Event** <:upvote:719052858732970067>`)
    .setFooter(`WTap Role System`)
    .setColor("RED")
    .setTimestamp()
    let msg = await message.channel.send(embed); msg.react("711010275096264705"); msg.react("719052858732970067");
}