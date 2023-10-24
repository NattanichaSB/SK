const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDescription('Set a timer.'),
  async execute(interaction) {
    await interaction.reply('Timer command received.');
  },
};
