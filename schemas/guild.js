const { Schema, model } = require('mongoose');
const guildSchema = new Schema({ 
    guildId: String,
    guildName: String,
});

module.exports = model("Guild", guildSchema, "guilds");