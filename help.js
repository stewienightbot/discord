const Discord = require("discord.js");

exports.run = (Client, message, args) => {
    let botThumb = Client.user.displayAvatarURL;
		let helpembedlevel = new Discord.RichEmbed()
			.setTitle("General Plugin Commands", " ")
			.setColor("0x4286f4")
			.addField("!levels", "Kérdezd le a ranglistát.")
			.addField("!rank (optional member)", "Kérdezd le egy adott felhasználó rangját a szerveren.")
      .addField("!poll [question]", "Szavazás létrehozása.")
      .addField("!slots", "Nyerőgép pörgetése.")
      .addField("!dice", "Kocka pörgetése.")
      .addField("!meme", "Just memes.")
      .addField("!fortnite [username] [platform]", "Fortnite statisztika.")
      .addField("!google [question]", "Google keresés.")
      .addField("!steam [game]", "Steam játék keresés.")
      .addField("!ping", "Pong.")
			.setThumbnail(botThumb)
			
			message.channel.send(helpembedlevel);
    
    let musicIcon = "http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Music-icon.png"
		let helpembedmusic = new Discord.RichEmbed()
			.setTitle("Music Plugin Commands", " ")
			.setColor("0x4286f4")
			.addField("!play (link)", "Játssz le egy zenét!")
      .addField("!queue", "Mutasd a lejátszási listát!")
			.addField("!skip", "Ugorj át egy zenét!")
      .addField("!pause", "Állítsd meg a zenét!")
      .addField("!resume", "Folytasd a lejátszást!")
      .addField("!volume (0-200)", "Állítsd a hangerőt!")
      .addField("!leave", "Lépj ki a szobából!")
			.setThumbnail(musicIcon)
			
			message.channel.send(helpembedmusic);
			
    const uptime = Client.uptime / 60000;
		let banHammer = "https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png"
		let helpembedadmin = new Discord.RichEmbed()
			.setTitle("Moderator Plugin Commands", " ")
			.setColor("0x4286f4")
			.addField("!kick [member] (optional reason)", "Kirúg egy tagot a szerverről.")
			.addField("!ban [member] (optional reason)", "Kitilt egy tagot a szerverről.")
      .addField("!clear [number]", "Meghatározott üzenet mennyiséget töröl.")
      .addField("!say [message]", "Elküldi az üzenetet a NightBot.")
      .addField("!embed [message]", "Elküldi az embed üzenetet a NightBot.")
      .addField("!role [member]", "Elküldi az adott ember rangjait egy embed üzenetben.")
      .addField("!roles", "Ranglista.")
      .addField("!uptime", + uptime.toFixed(0) + "min")
			.setThumbnail(banHammer)
			
			message.channel.send(helpembedadmin);
  if(!message.channel.nsfw === true)
    return;
  let NSFW = "https://i.imgur.com/KJJsUej.png"
  let helpembednsfw = new Discord.RichEmbed()
     .setTitle("NSFW Plugin Commands", " ")
     .setColor("0x4286f4")
     .addField("!ass", "Send ass image.")
     .addField("!pussy", "Send pussy image.")
     .addField("!hentai", "Send hentai image.")
     .addField("!holo", "Send holo image.")
     .addField("!thigh", "Send thigh image.")
     .addField("!gif", "Send porn GIF.")
     .addField("!4k", "Send 4k porn image.")
     .addField("!anal", "Send anal image.")
     .setThumbnail(NSFW)
  
     message.channel.send(helpembednsfw);
			return;
}