const ytdl = require('ytdl-core');
exports.run = async (Client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('Először lépj be egy szobába!');


    if (!args[0]) return message.channel.send('Kérlek adj meg egy linket!');
    let validate = await ytdl.validateURL(args[0]);
  
    

    if (!validate) {
      let commandFile = require('./search.js');
      return commandFile.run(Client, message, args, ops);
    
    }


    let info = await  ytdl.getInfo(args[0]);

   let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    if (!data.dispatcher) play(Client, ops, data);
    else {
        message.channel.send(`Added to queue: ${info.title} | requested by: ${data.queue[0].requester}`)
    }
    ops.active.set(message.guild.id, data);


}
async function play(Client, ops, data) {
    Client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by: ${data.queue[0].requester}`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(Client, ops, this);

    });

}
function end(Client, ops, dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(Client, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = Client.guilds.get(dispatcher.guildID).me.voiceChannel;  
        if (vc) vc.leave();

    }

}