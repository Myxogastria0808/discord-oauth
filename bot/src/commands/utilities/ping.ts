import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';
import { checkIsString } from '../../types/';

dotenv.config();

const authUrl = checkIsString(process.env.AUTHURL);
const guildId = checkIsString(process.env.GUILDID);

const ping = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Sample slash command.'),
    async execute(interaction: CommandInteraction) {
        if (guildId === interaction.guild?.id) {
            await interaction.reply(`[OAuth URL](${authUrl})`);
        } else {
            await interaction.reply('You are not guild member');
        }
    },
};

export { ping };
