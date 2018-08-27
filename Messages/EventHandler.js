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
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME),
          defaultRole = member.guild.roles.find('name', process.env.DEFAULT_ROLE);

    channel.send(`${member}`,new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setTitle("💠 Bienvenue sur notre serveur ! 💠")
            .setColor(7385958)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp()
            .addField(`Le Message de bienvenue n'est pas encore défini, mon créateur à eu la flemme de l'écrire.`)
    );
    member.addRole(defaultRole).catch(console.error)
  },

  leaveMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME);
    channel.send(`💠 Notre ami ${member} nous a quitté 💠`)
  }

}