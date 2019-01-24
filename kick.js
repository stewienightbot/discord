const server = "Stewie's Nightclub";
const Discord = require("discord.js");

exports.run = async (Client, message, args, ops) => {
 
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Nem találom a felhasználót!");
    if(!member.kickable) 
      return message.reply("Nem tudom kirúgni ezt a felhasználót! Magasabb rangja van nálad?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Ki lettél rúgva a szerverről egy adminisztrátor által.";
    
    await member.kick(reason)
      .catch(error => message.reply(`${message.author} Nem tudom kirúgni : ${error}`));
    
    const kickembed = new Discord.RichEmbed()
      .setColor("0x4286f4")
      .setTitle("**Kick**")
      .setDescription(`**${member.user.tag}** ki lett rúgva a szerverről **${message.author.tag}** által.\n Indok: ${reason}`)
    
    member.guild.channels.get('527519552142180362').send(kickembed)
    console.log(`${member}${member.displayName}`,  "has kicked by " + `${message.author.tag}`);

}