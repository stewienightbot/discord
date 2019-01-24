const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async (client, message, args, ops) => {
  
    randomPuppy('memes').then(url => {
      const embedmeme = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)
        .setImage(url)
        .setTitle("Meme")
        
      message.channel.send(embedmeme)
    });
};