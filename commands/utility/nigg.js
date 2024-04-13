const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nigg')
        .setDescription('Who knows!'),
    async execute(interaction){
        await interaction.reply('Nog!');
    }
};
