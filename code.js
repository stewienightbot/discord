const Discord = require("discord.js");

exports.run = async (Client, message, args) => {
    let str = args.join(" ");
    
  try {
    message.channel.send("```" +  + "```");
  } catch(e) {
    message.channel.send(`Nem sikerült teljesíteni a kérést. ${e.message}`);
  }
    
}