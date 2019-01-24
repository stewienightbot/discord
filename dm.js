const Discord = require("discord.js");

exports.run = async (Client, message, args, ops) => {
 
    if (!message.author.id === "285366650637647872")
      return;
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Nem találom a felhasználót!");
    
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Mit irjak neki?");
    message.delete().catch();

    const replyembed = new Discord.RichEmbed()
      .setColor("0x4286f4")
      .setTitle(reason)
    
    member.send(replyembed);
}