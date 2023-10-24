const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll-dice')
    .setDescription('Roll the dice.'),
  async execute(interaction) {
    await interaction.reply('Roll the dice command received.');
  },
};
