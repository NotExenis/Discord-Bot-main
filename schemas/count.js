const { GuildMember } = require('discord.js');
const { Schema, model } = require('mongoose');
const countSchema = new Schema({
    guildId: String,
    guildName: String,
    guildMember: String,
    guildMemberCount: String,
    guildMember: String,
    guildMemberURL: String,
});

module.exports = model("Count", countSchema, "counts");