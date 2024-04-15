const Count = require('../../schemas/count');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Adds a count to a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Who do you want to add a count to?')
                .setRequired(true)),

    async execute(interaction) {
        const userId = interaction.options.getUser('user')?.id;

        try {
            let count = await Count.findOne({ userId });
            
            if (!count) {
                count = new Count({ userId, amount: 1 });
            } else {
                count.amount += 1;
            }

            await count.save();

            await interaction.reply({ content: `Added N-Word count for ${interaction.options.getUser('user').tag}` });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'An error occurred while processing your command.', ephemeral: true });
        }
    },
};
