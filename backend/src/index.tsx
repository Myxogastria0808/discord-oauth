import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { html } from 'hono/html';
import { Style } from 'hono/css';
import { checkIsString, checkIsStringAndParseInt } from './types/env';
import dotenv from 'dotenv';
import { titleClass, nameClass } from './types/css';
import { meta } from './types/meta';
import { tokenDataType, discordDataType } from './types/discord';

dotenv.config();

const app = new Hono();

const port: number = checkIsStringAndParseInt(process.env.PORT);
const ipaddress: string = checkIsString(process.env.IPADDRESS);

const clientId: string = checkIsString(process.env.CLIENTID);
const clientSecret: string = checkIsString(process.env.CLIENTSECRET);
const redirectUrl: string = `http://${ipaddress}:${port}`;

app.get('/', async (c) => {
    //* ***************************************//
    //codeを取得する
    const code: string | undefined = c.req.query('code');
    //* ***************************************//
    if (typeof code == 'undefined') {
        //codeが取得できなかった場合
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
                        <meta property="og:image:width" content={String(meta.ogWidth ?? '')} />
                        <meta property="og:image:height" content={String(meta.ogHeight ?? '')} />
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
        //codeが取得できた場合
        console.log(`code: ${code}`);
        try {
            //* ***************************************//
            const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}&redirect_uri=${redirectUrl}`;
            console.log(`${body}`);
            //トークンを取得する
            const tokenData = await fetch('https://discordapp.com/api/oauth2/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            });
            const IncludesToken: tokenDataType = await tokenData.json();
            const token: string = IncludesToken.access_token;
            console.log(`token: ${token}`);
            //* ***************************************//
            //ユーザー名を取得する
            const discordData = await fetch('https://discordapp.com/api/users/@me', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            const discord: discordDataType = await discordData.json();
            console.log(`discord UserID: ${discord.id}`);
            //* ***************************************//
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
                            <meta property="og:image:width" content={String(meta.ogWidth ?? '')} />
                            <meta property="og:image:height" content={String(meta.ogHeight ?? '')} />
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
        } catch (_e) {
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
                            <meta property="og:image:width" content={String(meta.ogWidth ?? '')} />
                            <meta property="og:image:height" content={String(meta.ogHeight ?? '')} />
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
        }
    }
});

console.log(`Server is running on port http://${ipaddress}:${port}`);

serve({
    fetch: app.fetch,
    port,
});
