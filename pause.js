exports.run = (Client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Pillanatnyilag nincs zene amit megállíthatnál!');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('A parancs használatához velem egy szobába kell lenned!');
  
  if (fetched.dispatcher.paused) return message.channel.send('A zene már megvan állítva.');
  
  fetched.dispatcher.pause();
  
  message.channel.send('Pause!');




}