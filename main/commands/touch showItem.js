const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('show-item')
    .setDescription('Show an item.'),
  async execute(interaction) {
    await interaction.reply('Show item command received.');
  },
};
