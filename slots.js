const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    //if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("Nyertél!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Eredmény:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("0x4286f4");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('Vesztettél!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Eredmény:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("0x4286f4");
        message.channel.send(embed);
    }

}


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slots',
    description: 'Slot Machine',
    usage: 'slots'
}