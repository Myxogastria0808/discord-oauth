# discord.js v14 × discord の OAuth2

## bot

-   言語: TypeScript
-   主に、 discord.js v14 を使用

### bot に置く`.env`ファイルの中身

> [!WARNING]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!CAUTION] > `.env`ファイルに書く内容は、外部に漏れてはいけない内容なので、必ず`.gitignore`ファイルに`.env`を書いてください。

> [!CAUTION]
> 現在のプログラムの中に、`console.log()`するべきでない内容を表示しています。実際にこのプログラムを使用する際は、`console.log()`を全て消してください。

```.env
TOKEN = ""
APPLICATIONID = ""
GUILDID = ""
AUTHURL = ""

```

## backend (Web API)

-   言語: TypeScript
-   主に、Hono を使用

### bot に置く`.env`ファイルの中身

> [!WARNING]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!CAUTION] > `.env`ファイルに書く内容は、外部に漏れてはいけない内容なので、必ず`.gitignore`ファイルに`.env`を書いてください。

```.env
CLIENTID = ""
CLIENTSECRET = ""

```

## 参考にさせていただいたサイト

https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98

https://discordjs.guide/oauth2/#a-quick-example

https://qiita.com/sukeo-sukeo/items/6e86906d88e1110bbb36
