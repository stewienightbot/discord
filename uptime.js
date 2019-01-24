const Discord = require("discord.js");

exports.run = async (Client, message, args, ops) => {
  
  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
  
  const uptime = Client.uptime / 60000;
  const uptimehour = Client.uptime / 3600000;
  
  if(Client.uptime / 3600000 > 1) {
    const embedhour = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)
        .setTitle("Uptime:")
        .setDescription(uptimehour.toFixed(0) + "hour")
    
    message.channel.send(embedhour);
  }else if(Client.uptime / 60000 > 1) {
    const embedmin = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)
        .setTitle("Uptime:")
        .setDescription(uptime.toFixed(0) + "min")
    
    message.channel.send(embedmin);
  }else{
    const embedms = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)
        .setTitle("Uptime:")
        .setDescription(Client.uptime + "ms")
    
    message.channel.send(embedms);
  }
}