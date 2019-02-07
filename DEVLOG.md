# Development Log

* Install Elixir 1.8.1

* Install Phoenix 1.4.0

```
$ mix archive.install hex phx_new 1.4.0
```

* Create app skeleton

```
$ mix phx.new simple_chat --no-ecto
$ cd simple_chat
```

* Install bootstrap, vue, and vuex

```
$ cd assets
$ npm i bootstrap vue vuex
```

* Install vue-loader and vue-template-compiler

```
$ npm i vue-loader vue-template-compiler -D
```

* [dcb5778](https://github.com/kuroda/simple_chat/commit/5779c7129871677d2fb7b04a0e39c174c208afba) Set up webpack.config.js for Vue.js
