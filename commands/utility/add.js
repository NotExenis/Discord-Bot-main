const Guild = require('../../schemas/count');
const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('Add')
       .setDescription('Adds a count to a user')
       .addUserOption((option) =>
       option.setName('user')
       .setDescription('Who do you want to add a count to?')
       .setRequired(true)
        ),

        async execute(interaction){
        let guildMember = await Guild.findOne({ memberid: interaction.memberid }).catch(e => console.log(e));
        if(!guildMember) {
            guildMember = await new Count({
                guildId: interaction.guild.id,
                guildName: interaction.guild.name,
                guildMember: interaction.guildMember.id,
                guildMemberCount: 1,
                guildMemberURL: interaction.user.avatarURL(),
            });

            await guildMember.save().catch(e => console.log(e));

        }


    }
}