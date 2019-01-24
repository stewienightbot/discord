const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!args[0])
      return message.channel.send("Nem adtál meg felhasználót!");
    if(!member)
      return message.channel.send("Nem találom a felhasználót!");
  
  let serverembed = new Discord.RichEmbed()
    .setColor('0x4286f4')
    .setTitle(`**${member.displayName}**`)
    .addField(`Rangok: ${member.roles.size}`,`${member.roles.array()}`,true)
    .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)

    message.channel.send(serverembed);
  
}