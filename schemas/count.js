const { GuildMember } = require('discord.js');
const { Schema, model } = require('mongoose');
const countSchema = new Schema({
    guildId: String,
    userId: String,
    amount: { type: Number, default: 0 },
    guildID: String,
});

module.exports= CountModel = model("Count", countSchema, "counts");