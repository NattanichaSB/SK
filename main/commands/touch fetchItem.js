const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fetch-item')
    .setDescription('Fetch an item.'),
  async execute(interaction) {
    await interaction.reply('Fetch item command received.');
  },
};
