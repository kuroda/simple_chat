<template>
  <div class="wrapper">
    <input type="text" id="new-message">
    <button type="button" class="btn btn-primery">Submit</button>
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
