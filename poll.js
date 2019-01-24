const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Nincs jogod a használatához.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Szavazás létrehozásához adj meg kérdést is!');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)
        .setDescription('Reagálj, ha szavazni szeretnél.')
        .setTitle(args.join(' '));
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};