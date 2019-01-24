const Discord = require("discord.js");

exports.run = (Client, message, args) => {
    let sorok = message.content.split(" ").slice(1);
		let author = message.member;
		if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return;
			if(!sorok[0]){
				message.delete();
				message.author.send("Kérlek adj meg egy összeget a törléshez.");
				return;
			}
			if(!sorok[0] > 100){
				message.delete();
				message.author.send("Maximum 100 üzenetet törölhetsz!");
				return;
			}
			
			//message.delete();
			message.channel.bulkDelete(sorok[0]);
			message.author.send({embed:{
				color: 0x4286f4,
				description: "Kész! Kitöröltem " + sorok[0] + " üzenetet."
			}})
  
      let clearembed = new Discord.RichEmbed()
				.setColor("0x4286f4")
				.setTitle(message.member.displayName + " kitörölt " + sorok[0] + " üzenetet a(z) " + message.channel.name + " szobába.")
        //.setFooter(message.member.guild.name, message.member.guild.iconURL)
  
      message.member.guild.channels.get('527519552142180362').send(clearembed);
			return;
}