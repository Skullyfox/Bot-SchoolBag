const Discord = require('discord.js'),
      client = new Discord.Client(),
      help   =  require('./Task/Help'),
      token = process.env.TOKEN;

client.login(token);

module.exports = {

  onMessage : (msg) => {
    (msg.content.includes('help') && msg.content.startsWith('+'))
    ? help.Help(msg)
    : null
  },

  newMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME);
    const defaultRole = member.guild.roles.find('name', process.env.DEFAULT_ROLE);
    channel.send(`💠 Bienvenue sur notre serveur ${member} ! 💠`)
    member.addRole(defaultRole).catch(console.error)
  },

  leaveMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME);
    channel.send(`💠 Notre ami ${member} nous a quitté 💠`)
  }

}