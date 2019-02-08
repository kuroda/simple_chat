<template>
  <div class="wrapper">
    <div>
      <input type="text" v-model="message">
      <button type="button" class="btn btn-primery"
        @click="submitMessage()">Submit</button>
    </div>
    <div v-for="message in messages">
      {{ message }}
    </div>
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
      this.$store.dispatch("submitMessage", this.message)
      this.message = ""
    }
  },
  mounted: function() {
    this.$store.dispatch("initialize")
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
