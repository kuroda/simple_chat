import Vue from "vue"
import Vuex from "vuex"
import socket from "../socket"

Vue.use(Vuex)

const channel = socket.channel("chat:main", {})

export default new Vuex.Store({
  state: {
    messages: []
  },
  actions: {
    initialize({}) {
      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) })
    },
    submitMessage({}, message) {
      channel.push("ping", { message: message })
    }
  }
})
