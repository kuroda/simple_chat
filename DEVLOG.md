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

* Install vue, and vuex

```
$ cd assets
$ npm i vue vuex
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

* Edit these files to join "chat:main" channel
  - `assets/js/socket.js`
  - `lib/simple_chat_web/channels/chat_channel.ex`
  - `lib/simple_chat_web/channels/user_socket.ex`

* Edit `assets/js/chat/main.vue` to place a text input and a submit button
* Edit the same file to handle click event on the submit button

* Edit these files to push "ping" to ChatChannel
  - `assets/js/socket.js`
  - `lib/simple_chat_web/channels/chat_channel.ex`
  - `assets/js/chat/main.vue`
  - `assets/js/chat/store.js`

* Edit `assets/js/chat/store.js` to push "shout" message and "receive" message
* Edit `assets/js/chat/main.vue` to list messages
