exports.run = async (Client, message, args, ops) => {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return;
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Nem találom a felhasználót!");
    if(!member.bannable) 
      return message.reply("Nem tudom kitiltani ezt a felhasználót! Magasabb rangja van nálad?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Ki lettél tiltva a szerverről egy adminisztrátor által.";
    
    await member.ban(reason)
      .catch(error => message.reply(`${message.author} Nem tudom kitiltani : ${error}`));
    member.guild.channels.get('527519552142180362').send(`${member.user.tag} ki lett tiltva a szerverről ${message.author.tag} által. Indok: ${reason}`); 
    console.log(`${member}`,  "has banned by " + `${message.author.tag}`);
  }