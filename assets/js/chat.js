import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import Main from "./chat/main.vue"
import store from "./chat/store"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    store,
    template: "<Main/>",
    components: { Main }
  })
})
