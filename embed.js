const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
      const sayMessage = args.join(" ");
      if(!args[0]) return message.channel.send("Nem adtál meg üzenetet.");
      message.delete().catch();
      
      const embed = new Discord.RichEmbed()
      .setColor("0x4286f4")
      .setTitle(`${sayMessage}`)

      message.channel.send(embed)
}

module.exports.help = {
  name: "say"
}