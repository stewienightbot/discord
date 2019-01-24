const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;

    let serverembed = new Discord.RichEmbed()
    .setColor('0x4286f4')
    .addField(`Rangok: ${message.guild.roles.size}`,`${message.guild.roles.array()}`,true)
    .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"roles"
}