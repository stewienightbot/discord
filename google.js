const Discord = require("discord.js");
const google = require("google");

module.exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.channel.send('Azt is add meg, hogy mire keressek rá!');
  
  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Google keresési találat erre: ${args}`.split(',').join(' '))
        .setColor("0x4286f4")
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Weboldal', link.title)
        .addField('Leírás', link.description)
        .addField('URL', link.href);

        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) return;
    }

  });

}

module.exports.help = {
  name: "google"
}