const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client("07dc087b-64d9-4154-82f4-36fd043fe846");

exports.run = async (client, message, args) => {
    let username = args[0];
    let platform = args[1];

    if(!username) return message.channel.send("Kérlek adj meg egy felhasználónevet! (Fortnite)")
    if(!platform) return message.channel.send('Megadtad a platformot? Helyes használat: **!fortnite <username> <platform>**') 

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let embed = new Discord.RichEmbed()
        .setTitle("Lifetime Stats")
        .setAuthor(data.username)
        .setColor("0x4286f4")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win%", winper, true)
        .addField("K/D", kd, true)
        .setFooter("Requested By: " + message.author.tag, message.author.avatarURL)

        message.channel.send(embed);
    }).catch((err) => {
      message.channel.send('User not found!');
      console.error(err);
    });
}

module.exports.help = {
    name:"fortnite"
} 