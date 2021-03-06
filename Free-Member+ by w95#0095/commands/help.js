const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "help",
  aliases: ["help"],
  description: "affiche la liste des commandes du bot.",
  execute: async(client, message) => {
     const embed = new Discord.MessageEmbed()
    .setColor(`#2f3136`)
    .setTitle("**š Help Joins+ Commands**")
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setDescription(`ā If you need help join our [server support](https://discord.gg/MYMAW3Ff53)\nā **Joins+** was created by **Alex.#7331** & **Alboom#2121**`)
    .addField("**__List of commands__** :", "\`+add`\ : Invite the bot to your server\n\`+stats`\ : See the statistics of Joins+\n\`+daily`\ : Get 1 coins every 2 hours\n\`+info`\ : If you want more informations about your advertising.\n\`+money`\ : To see all yours coins\n\`+buy`\ : To buy an advertisement and gain members\n\`+check`\ : Check if you can leave the server\n\`+farm`\ : Find servers to join to receive coins\n\`+pay`\ : To give your coins to your friends\n", false)
    .addField("š Links", "[Support](https://discord.gg/MYMAW3Ff53)ā [Github](https://github.com/ThisDudeBoy/Join4Join) ā [Add Joins+](https://discord.com/oauth2/authorize?client_id=793143330455420938&permissions=133553472&scope=bot)", false)
    .setFooter(config.EmbedFooter)
    const embeded = new Discord.MessageEmbed()
    .setDescription("ā ā Missing Permission (\`SEND_EMBED`\)")
    .setColor('#2f3136')
    .setFooter(config.EmbedFooter)
    message.channel.send(embed).catch(e => message.channel.send(embeded)) 
  }
}