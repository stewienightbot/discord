exports.run = async (Client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if (!fetched) return message.channel.send('Pillanatnyilag nincs zene amit átugorhatnál!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('A parancs használatához velem egy szobába kell lenned!');
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = 0;
  
  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  // if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Tu as déja voté. ${fetched.queue[0].voteSkips.length}/${required} requis pour skip`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required) {
    message.channel.send('Skipped!');
    return fetched.dispatcher.emit('end');
  }
  
 // message.channel.send(`Sikeresen szavaztál! ${fetched.queue[0].voteSkips.length}/${required} requis pour skip `)
  
  










}