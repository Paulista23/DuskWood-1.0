module.exports.run = async(client, message, args) => {
  const msg = await message.channel.send(` \`:ping_pong: Pong!\` `);
  msg.edit(`
\`🖥️ Ping do servidor:\` \`${msg.createdTimestamp -
      message.createdTimestamp}ms\`
\`🕗 Ping da API:\` \`${Math.round(
      client.ws.ping
    )}ms\``);
}