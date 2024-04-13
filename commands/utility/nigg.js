
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nigg')
        .setDescription('nog!'),
    async execute(interaction){
        await interaction.reply('nog!');
    }
};
