import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { checkIsString } from './types';
import dotenv from 'dotenv';
import { html } from 'hono/html';
import { css, keyframes, Style } from 'hono/css';

dotenv.config();

const app = new Hono();

const port = 3000;
const ipaddress = '127.0.0.1';

const clientId: string = checkIsString(process.env.CLIENTID);
const clientSecret: string = checkIsString(process.env.CLIENTSECRET);
const redirectUrl: string = `http://${ipaddress}:${port}`;

type tokenDataType = {
    token_type: 'Bearer';
    access_token: string;
    expires_in: 604800;
    refresh_token: string;
    scope: string;
};

type discordDataType = {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    premium_type: number;
    flags: number;
    banner: unknown;
    accent_color: number;
    global_name: string;
    avatar_decoration_data: unknown;
    banner_color: string;
    mfa_enabled: boolean;
    locale: string;
};

type Meta = {
    lang: string;
    title: string;
    metaDescription: string;
    metaKeyword: string;
    ogTitle: string;
    ogDescription: string;
    ogWidth: number;
    ogHeight: number;
    ogImage: string;
    ogType: string;
    ogUrl: string;
};

const titleClass = css`
    text-align: center;
    font-size: 30px;
`;

const nameClass = css`
    text-align: center;
    font-size: 25px;
`;

app.get('/', async (c) => {
    const code: string | undefined = c.req.query('code');
    const meta: Meta = {
        lang: 'ja',
        title: 'DebtBot Authentication',
        metaDescription: 'This is a DebtBot authentication page',
        metaKeyword: 'DebtBot',
        ogTitle: 'DebtBot Authentication',
        ogDescription: 'This is a DebtBot authentication page',
        ogWidth: 500,
        ogHeight: 500,
        ogImage: '',
        ogType: 'website',
        ogUrl: '',
    };

    if (typeof code == 'undefined') {
        return c.html(
            <>
                {html`<!DOCTYPE html>`}
                <html lang={meta.lang}>
                    <head>
                        <meta charset="UTF-8" />
                        <title>{meta.title}</title>
                        <meta name="description" content={meta.metaDescription} />
                        <meta name="keyword" content={meta.metaKeyword} />
                        <meta property="og:title" content={meta.ogTitle} />
                        <meta property="og:description" content={meta.ogDescription} />
                        <meta property="og:image:width" content={String(meta.ogWidth)} />
                        <meta property="og:image:height" content={String(meta.ogHeight)} />
                        <meta property="og:image" content={meta.ogImage} />
                        <meta property="og:type" content={meta.ogType} />
                        <meta property="og:url" content={meta.ogUrl} />
                        <Style />
                    </head>
                    <body>
                        <h1 class={titleClass}>OAuth authentication failed.</h1>
                    </body>
                </html>
            </>
        );
    } else {
        console.log(`code: ${code}`);
        const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}&redirect_uri=${redirectUrl}`;
        const tokenData = await fetch('https://discordapp.com/api/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        });
        const token: tokenDataType = await tokenData.json();
        console.log(`${body}`);
        console.log(`token: ${token.access_token}`);
        //////////////////////
        const discordData = await fetch('https://discordapp.com/api/users/@me', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token.access_token}` },
        });
        const discord: discordDataType = await discordData.json();
        //////////////////////
        return c.html(
            <>
                {html`<!DOCTYPE html>`}
                <html lang={meta.lang}>
                    <head>
                        <meta charset="UTF-8" />
                        <title>{meta.title}</title>
                        <meta name="description" content={meta.metaDescription} />
                        <meta name="keyword" content={meta.metaKeyword} />
                        <meta property="og:title" content={meta.ogTitle} />
                        <meta property="og:description" content={meta.ogDescription} />
                        <meta property="og:image:width" content={String(meta.ogWidth)} />
                        <meta property="og:image:height" content={String(meta.ogHeight)} />
                        <meta property="og:image" content={meta.ogImage} />
                        <meta property="og:type" content={meta.ogType} />
                        <meta property="og:url" content={meta.ogUrl} />
                        <Style />
                    </head>
                    <body>
                        <h1 class={titleClass}>OAuth authentication succeeded.</h1>
                        <h2 class={nameClass}>{discord.username}</h2>
                    </body>
                </html>
            </>
        );
    }
});

console.log(`Server is running on port http://${ipaddress}:${port}`);

serve({
    fetch: app.fetch,
    port,
});
