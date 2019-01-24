const Discord = require('discord.js')
exports.run = async (Client, message, args, tools) =>{
  
  message.delete()
  let embed = new Discord.RichEmbed()
  
  .setColor(0x6441a5)
  .setImage("https://www.twitch.tv/PollexGaming")	
  .setThumbnail("https://www.twitch.tv/p/assets/uploads/twitch_474x356.png")
	.setURL("https://www.twitch.tv/PollexGaming")


  message.channel.send(embed);
  
  
  
  
}