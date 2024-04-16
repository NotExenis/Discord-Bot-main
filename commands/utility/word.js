const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('no')
        .setDescription('Who knows!'),
    async execute(interaction){
        await interaction.reply('https://cdn.discordapp.com/attachments/1132962729158774867/1228662620127494164/avatars-000047053506-kcapva-t500x500.jpg?ex=662cdc3c&is=661a673c&hm=83b4426e27c0b48f796689b12fd3493cee56d262896cbc917b3ab435308d5180&');
    }
};
