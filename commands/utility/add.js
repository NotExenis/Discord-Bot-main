const Count = require("../../schemas/count");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Adds a count to a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Who do you want to add a N-Word count to?")
        .setRequired(true)
    ),

  async execute(interaction) {
    const userId = interaction.options.getUser("user").id;

    try {
      let count = await Count.findOne({ userId });

      if (!count) {
        count = new Count({ userId, amount: 1 });
      } else {
        count.amount += 1;
      }

      await count.save();

      const topUsers = await Count.find().sort({ amount: -1 }).limit(10);

      const embed = new EmbedBuilder()
        .setTitle("N-word Counts")
        .setDescription("Users with the most N-Word counts")
        .setColor("Blue");

      const fields = [];

      topUsers.forEach((user, index) => {
        const member = interaction.guild.members.cache.get(user.userId);
        if (member) {
          fields.push({
            name: `${index + 1}. ${member.user.tag}`,
            value: `Count: ${user.amount}`,
            inline: false,
          });
        }
      });

      embed.addFields(fields);

      await interaction.reply({
        content: `Added count for ${interaction.options.getUser("user").tag}`,
        embeds: [embed],
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "An error occurred while processing your command.",
        ephemeral: true,
      });
    }
  },
};
