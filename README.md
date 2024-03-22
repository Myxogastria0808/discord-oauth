# discord.js v14 × discord の OAuth2

## bot

-   言語: TypeScript
-   主に、 discord.js v14 を使用

## backend (Web API)

-   言語: TypeScript
-   主に、Hono を使用

> [!CAUTION]
> 現在のプログラムの中に、`console.log()`するべきでない内容を`console.log()`しています。実際にこのプログラムを使用する際は、`console.log()`を全て消してください。

### bot に置く`.env`ファイルの中身

> [!WARNING]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!CAUTION]
> 　 `.env`ファイルに書く内容は、外部に漏れてはいけない内容なので、必ず`.gitignore`ファイルに`.env`を書いてください。

```.env
TOKEN = ""
APPLICATIONID = ""
GUILDID = ""
AUTHURL = ""

```

### backend に置く`.env`ファイルの中身

> [!WARNING]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!INFO]
> IPADDRESS と PORT は、適宜変えてください。

> [!CAUTION]
> 　`.env`ファイルに書く内容は、外部に漏れてはいけない内容を含むので、必ず`.gitignore`ファイルに`.env`を書いてください。

```.env
IPADDRESS = "127.0.0.1"
PORT = "3000"
CLIENTID = ""
CLIENTSECRET = ""


```

## 参考にさせていただいたサイト

https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98

https://discordjs.guide/oauth2/#a-quick-example

https://qiita.com/sukeo-sukeo/items/6e86906d88e1110bbb36
