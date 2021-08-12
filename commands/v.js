const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Você deve entrar em um canal de voz antes de usar este comando!"
    );

  let queue = message.client.queue.get(message.guild.id);

  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Volume",
          "https://img.icons8.com/color/2x/high-volume--v2.gif"
        )
        .setColor("BLUE")
        .setDescription("**O volume atual é " + queue.volume + " **")
    );

  if (args[0] > 100)
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Erro no volume",
          "https://img.icons8.com/color/2x/high-volume--v2.gif"
        )
        .setColor("RED")
        .setDescription("**O volume não pode exceder 100 para não prejudicar sua audição :x: **")
    );

  queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  queue.volume = args[0];
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Volume",
        "https://img.icons8.com/color/2x/high-volume--v2.gif"
      )
      .setColor("BLUE")
      .setDescription("**Volume setado para " + args[0] + " **")
  );
};