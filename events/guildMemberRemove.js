module.exports = async(client, member) => {
    member.guild.channels.cache.get(`718878374776406119`).setName(`Discord Count: ${member.guild.memberCount}`);
}