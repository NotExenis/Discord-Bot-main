const { Schema, model } = require('mongoos');
const countSchema = new Schema({
    guildId: String,
    guildName: String,
    guildMember: String,
    guildMemberCount: String,
});

module.exports = model("Count", countSchema, "counts");