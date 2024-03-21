import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const ping = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Sample slash command.'),
    async execute(interaction: CommandInteraction) {
        interaction.reply('Pong!');
    },
};

export { ping };
