# SimpleChat

## 動作環境

* Erlang/OTP 20 以上
* Elixir 1.5 以上
* Node.js 10 以上

※ データベース管理システム（PostgreSQL、MySQL等）は不要

## セットアップ手順

```
$ git clone https://github.com/kuroda/simple_chat.git
$ cd simple_chat
$ mix deps.get
$ cd assets && npm ci
$ cd ..
```

## サーバー起動

```
$ mix phx.server
```

## 動作確認

ブラウザで [`localhost:4000`](http://localhost:4000) を開く。
