exports.run = async (Client, message, args, ops) => {
	if (!message.member.voiceChannel) return message.channel.send('Először lépj be egy szobába!');
	
	if (!message.guild.me.voiceChannel) return message.channel.send('A botot senki nem használja!');

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('A parancs használatához velem egy szobába kell lenned!');
  message.guild.me.voiceChannel.leave();
  message.channel.send('Leaving Channel...');
}