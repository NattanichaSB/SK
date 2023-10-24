const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('give-item')
    .setDescription('Give an item.'),
  async execute(interaction) {
    await interaction.reply('Give item command received.');
  },
};
