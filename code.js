const Discord = require("discord.js");

exports.run = async (Client, message, args) => {
   if (message.author.id !== '285366650637647872') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);
        message.delete();

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval Code')
        .setColor(0x4286f4)
        .addField(':inbox_tray: Output', `\`\`\`js\n${codein}\`\`\``)
        //.addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}