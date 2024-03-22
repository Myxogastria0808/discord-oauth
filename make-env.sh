#!/bin/bash

#参考サイト: https://www.server-memo.net/shellscript/file_check.html
#参考サイト: http://www.ajisaba.net/sh/get_dir.html
#参考サイト: https://tech.kurojica.com/archives/20987/
#参考サイト: https://qiita.com/richmikan@github/items/eefbaed716e5ed198973
#参考サイト: http://tech.clickyourstyle.com/articles/23

CURRENT=$(
    cd $(dirname $0)
    pwd
)

BOTPATH="${CURRENT}/bot/.envA"
BACKENDPATH="${CURRENT}/backend/.envA"

echo $BOTPATH
echo $BACKENDPATH

if [ ! -e $BOTPATH ]; then
    touch $BOTPATH
    cat <<EOT >$BOTPATH
TOKEN = ""
APPLICATIONID = ""
GUILDID = ""
REGISTERURL = ""
DELETEURL = ""
EOT
else
    echo bot/.env is already exits.
fi

if [ ! -e $BACKENDPATH ]; then
    touch $BACKENDPATH
    cat <<EOT >$BACKENDPATH
IPADDRESS = "127.0.0.1"
PORT = "3000"
CLIENTID = ""
CLIENTSECRET = ""
EOT
else
    echo backend/.env is already exits.
fi
