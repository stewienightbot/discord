const Discord = require("discord.js")

exports.run = async (Client, message, args) => { 
if (message.author.id === "285366650637647872") {
  message.channel.send(":gear: Újraindítás folyamatban...")
      .then(message => message.edit(":gear: Újraindítás sikeres."));
  Client.destroy()
  //Client.login(process.env.TOKEN)
} else {
	
return;
  
  }
};