"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const discord_js_1 = require("discord.js");
const ping = {
    data: new discord_js_1.SlashCommandBuilder().setName('ping').setDescription('Sample slash command.'),
    async execute(interaction) {
        interaction.reply('[oauth](https://discord.com/oauth2/authorize?client_id=1220290904133337110&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000&scope=identify)');
    },
};
exports.ping = ping;
