exports.run = (Client, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Pillanatnyilag nincs zene aminek állíthatnád a hangerejét!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('A parancs használatához velem egy szobába kell lenned!');
  
  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Kérlek adj meg egy számot 0-200 között!');
  
  fetched.dispatcher.setVolume(args[0]/100);
  
  message.channel.send(`A hangerőt sikeresen átállítottad ${args[0]}-ra!`)
  
  
  
  







}