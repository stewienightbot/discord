const Discord = require("discord.js");

exports.run = async (Client, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Nincsenek színes rangok a szerveren.");  
  
    message.channel.send(colors.array().join(" "));
}