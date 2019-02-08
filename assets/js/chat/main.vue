<template>
  <div class="wrapper">
    <input type="text" v-model="message">
    <button type="button" class="btn btn-primery"
      @click="submitMessage()">Submit</button>
  </div>
</template>

<script>
import Vue from "vue"
import { mapState } from "vuex"

export default {
  data: function() {
    return {
      message: ""
    }
  },
  computed: {
    ...mapState([
      "messages"
    ])
  },
  methods: {
    submitMessage() {
      console.log(this.message)
    }
  }
}
</script>

<style scoped>
.wrapper {
  border: solid 1px black;
  margin: 1rem;
  padding: 1rem;
}
</style>
