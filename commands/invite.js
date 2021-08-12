const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Convide-me ",
        "https://discord.com/oauth2/authorize?client_id=869965908335013949&scope=bot&permissions=8"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "https://discord.com/oauth2/authorize?client_id=" +
          client.user.id +
          "&permissions=" +
          "37080128" +
          "&scope=" +
          "bot"
      )
  );
};