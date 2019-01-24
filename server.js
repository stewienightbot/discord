const Discord = require("discord.js");
const Client = new Discord.Client();
const ytdl = require('ytdl-core');
const prefix = "!";
const ownerID = "285366650637647872";
const active = new Map();
const kezdorang = "Member";
//const server = "Stewie's Nightclub";
const serverStats = {
    guildID: '480852638611800064',
    memberCountID: '531878464572358656'
}


Client.on('ready', async ()=>{
	console.log(`${Client.user.username} is online.`);
	Client.user.setGame("twitch.tv/stewievideo", 'https://www.twitch.tv/stewievideo')
  //Client.user.setActivity("Nightclubs Radio", {type: "LISTENING"});
})

Client.on('disconnect', async ()=>{
	console.log(`${Client.user.username} is offline.`);
})

Client.on('reconnecting', async ()=>{
	console.log(`${Client.user.username} is reconnecting...`);
})

Client.on('message', (message)=>{
  
  if(message.channel.type === "dm") return;
  
	let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

try { 
    delete require.cache[require.resolve(`./${cmd}.js`)]; 
    var ops = { 
      ownerID: ownerID,
      active: active 
    } 
    let commandFile = require(`./${cmd}.js`); 
    commandFile.run(Client, message, args, ops); 
} catch (e) { 
    console.log(e.stack); 
  }
});

Client.on('guildMemberAdd', member => {
    member.guild.channels.get('498891484544630784').send(`Hey ${member}, köszöntelek a  **${member.guild.name}** discord szerveren 🎉🤗 !`); 
    console.log(`${member}${member.displayName}`,  "has joined " + `${member.guild.name}`);
    
    member.addRole(member.guild.roles.find(role => role.name === (kezdorang)));
    console.log(`${member}${member.displayName}`,  "has added to role Member");
  
    const welcomemessage = new Discord.RichEmbed()
        .setColor("0x4286f4")
        .setFooter(member.guild.name, member.guild.iconURL)
        .setDescription('Ha fel vagy subolva Stewiera és a discord szerveren ⭐VIP rangot szeretnél kapni akkor csatlakoztatnod kell a Twitch fiókodat a Discord fiókodhoz!!! \nEgy kis segítség a fiókok összekapcsolásához: http://bit.ly/discordconnection')
        .setTitle("Köszöntelek " + member.displayName + " a " + member.guild.name + " discord szerveren!");
  
    member.send(welcomemessage);
  
    if (member.guild.id !== serverStats.guildID) return
    Client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.memberCount}`);
});

Client.on('guildMemberRemove', member => {
    member.guild.channels.get('498891484544630784').send("**" + member.user.username + "**" + " elhagyta a discord szervert.🙁"); 
    console.log(`${member}${member.displayName}`,  "has left " + `${member.guild.name}`);
  
    if (member.guild.id !== serverStats.guildID) return;
    Client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.memberCount}`);
});

Client.login(process.env.TOKEN);