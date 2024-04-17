const Count = require("../schemas/count");

const triggerWords = [
  "nigger",
  "niggers",
  "nigga",
  "nig",
  "nigg",
  "nga",
  "nigge",
  "nig",
  "niglet",
  "niggerboy",
  "niggerboi",
  "n1gga",
  "nibb",
  "nibber",
  "nibbaloo",
  "nibler",
  "nibja",
  "nibba",
  "harry",
  "nicget",
  "nickher",
  "niccher",
  "nicker",
  "nigier",
];

module.exports = registerInteraction = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const messageLowerCase = message.content.toLowerCase();
    const containsTriggerWord = triggerWords.some((word) =>
      messageLowerCase.includes(word)
    );
    const userId = message.author.id;

    console.log(containsTriggerWord);
    try {
      let count = await Count.findOne({ userId });

      if (!containsTriggerWord) return;

      if (!count) {
        count = new Count({ userId, amount: 1 });
        guildId = message.guild.id;
      } else {
        count.amount += 1;
        guildId = message.guild.id;
      }

      guildId.save();
      count.save();
      message.reply("+1");
    } catch (error) {
      console.log(error);
    }
  });
};
