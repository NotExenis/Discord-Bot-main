const { GuildMember } = require('discord.js');
const { Schema, model } = require('mongoose');
const countSchema = new Schema({
    guildId: String,
    userId: String,
    amount: { type: Number, default: 0 },
});

module.exports = model("Count", countSchema, "counts");