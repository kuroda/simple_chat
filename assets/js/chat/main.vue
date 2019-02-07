<template>
  <div class="wrapper">
    Hello, world!
  </div>
</template>

<script>
import Vue from "vue"
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState([
      "messages"
    ])
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
