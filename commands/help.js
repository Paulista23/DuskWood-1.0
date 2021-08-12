const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `join - entro no canal de voz em que você está
   leave - saio do canal de voz em que estou
   play <Nome da musica ou url> - toco uma  músicas do youtube
   pause - Pauso a música
   resume - volto a tocar novamente
   queue - lista das musicas
   skip - pulo para proxíma música
   stop - limpo a fila de músicas e sair da call
   volume <volume desejado ou nenhum> - ajusto o volume
   np - veja agora tocando música
   lyrics - mostro a letra da musica
   shuffle - embaralhar e randomizar a fila
   invite - link para me add no seu server
   loop - toco a musica em looping
   help - veja meus commandos`;
  const revised = commands
    .split("\n")
    .map((x) => "• " + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "MusicBot Commands Help",
        "https://img.icons8.com/color/2x/services--v2.gif"
      )
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(revised)
  );
};