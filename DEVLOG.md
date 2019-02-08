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

* Set up webpack.config.js for Vue.js
* Create main.vue and store.js
* Prepare home page

* Generate a channel

```
$ mix phx.gen.channel Chat
```
