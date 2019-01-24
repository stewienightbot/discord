const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}