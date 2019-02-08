import Vue from "vue"
import Vuex from "vuex"
import socket from "../socket"

Vue.use(Vuex)

const channel = socket.channel("chat:main", {})

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    }
  },
  actions: {
    initialize({ commit }) {
      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) })

      channel.on("update", payload => {
        commit("addMessage", payload.message)
      })
    },
    submitMessage({}, message) {
      channel.push("shout", { message: message })
    }
  }
})
