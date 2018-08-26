const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed({
      title : ":robot: Voici les commandes disponnibles :",
      color : "16697943",
      description : `\`Pas de commandes disponibles pour le moment.\`
      
      Pour plus de commandes, contactez le créateur de ce bot ***Skullyfox#2814***.`,
      
    }).setFooter('©️Skullyfox#2814 - Développeur JavaScript & Python'));
  }
}