const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.')
        .addUserOption((option) =>
        option
        .setName('user')
        .setDescription('Select a user')
        .setRequired(true)
    ),
    async execute(interaction) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};