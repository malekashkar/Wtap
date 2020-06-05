exports.run = async(client, message, args) => {
    if(!message.channel.parent || message.channel.parent.id !== client.config.ticketParent) return;
    message.channel.delete();
}