const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('countdown')
    .setDescription('Start a countdown.'),
  async execute(interaction) {
    await interaction.reply('Countdown command received.');
  },
};
