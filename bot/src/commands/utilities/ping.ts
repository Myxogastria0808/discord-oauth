import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';
import { checkIsString } from '../../types/';

dotenv.config();

const authUrl = checkIsString(process.env.TOKEN);

const ping = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Sample slash command.'),
    async execute(interaction: CommandInteraction) {
        interaction.reply(`[OAuth URL](${authUrl})`);
    },
};

export { ping };
