const Guild = require('../../schemas/guild');
const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Returns the name of the server'),
    async execute(interaction) {
        let guildProfile = await Guild.findOne({ guildId: interaction.guild.id });
        if (!guildProfile) {
            guildProfile = await new Guild({
                guildId: interaction.guild.id,
                guildName: interaction.guild.name,
            });

            await guildProfile.save().catch(console.error);
            await interaction.reply({
                content: `Server Name: ${guildProfile.guildName}`
            });
            console.log(guildProfile);
        } else {
            await interaction.reply({
                content: `Server ID: ${guildProfile.guildId}`
            });
            console.log(guildProfile);
        }
    }
}