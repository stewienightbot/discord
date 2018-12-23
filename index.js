const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', async ()=>{
	console.log(`${Client.user.username} is online.`);
	Client.user.setActivity("Nightclubs Radio", {type: "LISTENING"});
})

Client.on('message', (message)=>{
	if(!message.content.startsWith(prefix)) return;
	
	if(message.content.startsWith(prefix + "help")){
		message.channel.bulkDelete(1);
		let botThumb = Client.user.displayAvatarURL;
		let helpembedlevel = new Discord.RichEmbed()
			.setTitle("Level Plugin Commands", " ")
			.setColor("0x4286f4")
			.addField("!levels", "Szerezd meg a ranglistát!")
			.addField("!rank (optional member)", "Szerezd meg bárki rangját a szerveren!")
			.setThumbnail(botThumb)
			
			message.channel.send(helpembedlevel);
			
		let banHammer = "https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png"
		let helpembedadmin = new Discord.RichEmbed()
			.setTitle("Moderator Plugin Commands", " ")
			.setColor("0x4286f4")
			.addField("!kick [member] (optional reason)", "Kirúg egy tagot a szerverről")
			.addField("!ban [member] (optional reason)", "Kitilt egy tagot a szerverről")
			.setThumbnail(banHammer)
			
			message.channel.send(helpembedadmin);
			return;
	
	}
	
	if(message.content.startsWith(prefix + "botika")){
		message.channel.send("Botika spik english!");
	}
	if(message.content.startsWith(prefix + "clear")){
		let args = message.content.split(" ").slice(1);
		let author = message.member;
		let role = message.guild.roles.find(role => role.name === "Moderator");
		if(author.roles.has(role.id)){
			if(!args[0]){
				message.delete();
				message.author.send("Kérlek adj meg egy összeget!");
				return;
			}
			if(!args[0] > 100){
				message.delete();
				message.author.send("Maximum 100 üzenetet törölhetsz!");
				return;
			}
			
			message.delete();
			message.channel.bulkDelete(args[0]);
			message.author.send({embed:{
				color: 0x4286f4,
				description: "Kész! Kitöröltem " + args[0] + " üzenetet."
			}})
			return;
		}
	}
	
	if(message.content.startsWith(prefix + "clear")){
		let args = message.content.split(" ").slice(1);
		let author = message.member;
		let role = message.guild.roles.find(role => role.name === "Administrator");
		if(author.roles.has(role.id)){
			if(!args[0]){
				message.delete();
				message.author.send("Kérlek adj meg egy összeget!");
				return;
			}
			if(!args[0] > 100){
				message.delete();
				message.author.send("Maximum 100 üzenetet törölhetsz!");
				return;
			}
			
			message.delete();
			message.channel.bulkDelete(args[0]);
			message.author.send({embed:{
				color: 0x4286f4,
				description: "Kész! Kitöröltem " + args[0] + " üzenetet."
			}})
			return;
		}
	}
})

Client.login("process.env.BOT_TOKEN");
