const { Guild } = require("discord.js");
const Count = require("../schemas/count");

const triggerWords = [
  "exampleWords",
];

module.exports = registerInteraction = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const messageLowerCase = message.content.toLowerCase();
    const containsTriggerWord = triggerWords.some((word) =>
      messageLowerCase.includes(word)
    );
    const userId = message.author.id;
    const guildId = message.guild.id;

    console.log(containsTriggerWord);
    try {
      let count = await Count.findOne({ userId, guildId });

      if (!containsTriggerWord) return;

      if (!count) {
        count = new Count({ userId, guildId, amount: 1 });
      } else {
        count.amount += 1;
      }

      count.save();
      message.reply("+1");
    } catch (error) {
      console.log(error);
    }
  });
};
