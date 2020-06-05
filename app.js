const Discord = require("discord.js");
const client = new Discord.Client({partials: ["MESSAGE", "REACTION"]});
const config = require("./config.json");
const mongoose = require("mongoose");
const Enamp = require("enmap");
const fs = require("fs");

mongoose.connect(`mongodb://main:vortixin@66.70.189.129/main`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

client.commands = new Enamp();
client.config = config;
client.login(config.token);

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
  
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    });
  });