const Discord = require("discord.js");
const fs = require("fs");
const express = require("express");
require("dotenv").config();

//ping
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const client = new Discord.Client();
const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
};
client.config = config;
client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.on('ready', () => {
    let activities = [
            `Use dw!help para saber meus comandos`,
            `Sou um bot feito para tocar músicas!`,

        ],
        i = 0;
    setInterval(
        () =>
            client.user.setActivity(`${activities[i++ % activities.length]}`, {
                type: "STREAMING", url: "https://twitch.tv/ReadyMusic/"
            }),
         1000 * 60
    );
    client.user.setStatus('dnd').catch(console.error);
    console.log('Olá meu caro dono, estou online :D');
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[Command Manager]: Loading Command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(client.config.token);