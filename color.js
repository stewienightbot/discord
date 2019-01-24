const Discord = require("discord.js");

exports.run = async (Client, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Nincsenek színes rangok a szerveren.");
    
    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());
    
    if(!str) return message.channel.send("Nem adtál meg színt.");
    if(!role) return message.channel.send("Nem létezik ilyen szín.");
    
  try {
    await message.member.removeRoles(colors);
    await message.member.addRole(role);
    message.channel.send(`A rangod színe beállítva. ${role}`);
  } catch(e) {
    message.channel.send(`Nem sikerült teljesíteni a kérést. ${e.message}`);
  }
    
}