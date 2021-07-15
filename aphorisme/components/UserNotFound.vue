<template>
  <div>
    <h1>User {{ username }} was not Found</h1>
    <p>Try again with another name</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    username: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
