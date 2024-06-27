const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Count = require('../../schemas/count');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('scoreboard')
    .setDescription('See the scoreboard'),

    async execute(interaction) {
        const guildId = interaction.guild.id;
        const topUsers = await Count.find({guildId: guildId}).sort({ amount: -1 }).limit(10);

        const embed = new EmbedBuilder()
            .setTitle("Counts")
            .setDescription("Show the top 10 users")
            .setColor('Blue')
        
            const fields = [];

            topUsers.forEach((user, index) => {
                const member = interaction.guild.members.cache.get(user.userId);
                if (member) {
                    fields.push({
                        name: `${index + 1}. ${member.user.tag}`,
                        value: `Count: ${user.amount}`,
                        inline: false
                    })
                }
            });

            embed.addFields(fields);

            await interaction.reply({
                content: 'Leaderboard',
                embeds: [embed]
            })
    }
}
