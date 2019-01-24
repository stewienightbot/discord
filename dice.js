const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
exports.run = async (client, message, args) => {


    await message.channel.send("A kocka el van vetve...")
        .then(message => message.edit(`A dobás eredménye: ${rand()}`));



}

module.exports.help = {
    name: "dice"
}