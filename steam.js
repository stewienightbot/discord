const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Adj meg egy játék nevet.`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "hungary", "hu").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
    .setColor("0x4286f4")
    .setTitle(result[0].name)
    .addField(`A Játék Azonosítója`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Műfajok', results.genres)
    .addField('Ár', `Normál ár **${results.priceData.initialPrice}** €
Kedvezményes ár **${results.priceData.finalPrice}** €`, true)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Kritikai pontokszáma', results.otherData.metacriticScore, true)
    .addField('Címkék', results.otherData.features, true)
    .addField('Fejlesztő', results.otherData.developer, true)
    .addField('Kiadó', results.otherData.publisher)
    .setColor("0x4286f4")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hiba történt a `' + game + '`, vagy nem található a játék.')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamstore',
  description: 'steamstore',
  usage: 'steamstore'
};