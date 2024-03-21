import { CacheType, Interaction, GatewayIntentBits, Client, Events } from 'discord.js';
import dotenv from 'dotenv';
import { ping } from './commands/utilities/ping';

dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log('Bot starting ...');
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === ping.data.name) {
            try {
                await ping.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else {
            return;
        }
    } else {
        console.error('interaction is not match CommandInteraction or AutocompleteInteraction.');
    }
});

client.login(process.env.TOKEN);
