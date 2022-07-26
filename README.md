# simple-ftp-server

# sv2js

## Description

主にFTPサーバーのテスト時に使用。  
想定しているのは主にshellやbat処理、nodejsでの操作を確認するために立ち上げること。  
アイパスの入力は適当でも通る。

デフォルトの設定だとサーバー起動後アプリケーション（GUI）接続時は以下のようにアクセスができる。  
必要に応じてどのディレクトリへアクセスするかはオプションから設定すること。  

```
host: 127.0.0.1
user*: user
pass*: pass
```
*anything

## Requirement

* Node.js -> check cmd `node -v`

## Install

```sh
npm i -D https://github.com/ysknk/simple-ftp-server.git
```

## Usage

### add script in package.json

```json
{
  "scripts": {
    "simple-ftp-server": "simple-ftp-server"
  },
}
```

```sh
# check arguments help
npm run simple-ftp-server -- --help
```
