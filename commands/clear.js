exports.run = async(client, message, args) => {
    let count = parseInt(args[0]);
    if(!count || count < 2 || count > 100) return message.channel.send(`**Usage:** ${client.config.prefix}clear <2-100>`);

    let msgs = await message.channel.messages.fetch({ limit: count });
    message.channel.bulkDelete(msgs);
}