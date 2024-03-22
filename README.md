# discord.js v14 × discord の OAuth2

## bot

-   言語: TypeScript
-   主に、 discord.js v14 を使用

## backend

-   言語: TypeScript
-   Web API: Hono
-   ORM: Prisma
-   RDBMS: MySQL

> [!CAUTION]
> プログラムの中に、`console.log()`するべきでない内容を`console.log()`しています。実際にこのプログラムを使用する際は、`console.log()`を全て消してください。

### `.env`ファイルの生成

#### batch

```batch
make-env.cmd
```

#### shell

> [!CAUTION]
> Linux 環境で実行した際の動作の確認をしていないため正しく動作しない可能性があります。

```shell
bash make-env.sh
```

### bot に置く`.env`ファイルの中身

> [!NOTE]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!CAUTION]
> 　 `.env`ファイルに書く内容は、外部に漏れてはいけない内容なので、必ず`.gitignore`ファイルに`.env`を書いてください。

```.env
TOKEN = ""
APPLICATIONID = ""
GUILDID = ""
REGISTERURL = ""
DELETEURL = ""

```

### backend に置く`.env`ファイルの中身

> [!NOTE]
> 空の文字列(または数字)に適切な情報を入力してください。

> [!NOTE]
> IPADDRESS と PORT は、適宜変えてください。

> [!CAUTION]
> 　`.env`ファイルに書く内容は、外部に漏れてはいけない内容を含むので、必ず`.gitignore`ファイルに`.env`を書いてください。

```.env
IPADDRESS = "127.0.0.1"
PORT = "3000"
CLIENTID = ""
CLIENTSECRET = ""

#以下はPrismaによって自動生成されるの省略
# This was inserted by ~


```

## 参考にさせていただいたサイト

https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98

https://discordjs.guide/oauth2/#a-quick-example

https://qiita.com/sukeo-sukeo/items/6e86906d88e1110bbb36

https://hono.dev/top
