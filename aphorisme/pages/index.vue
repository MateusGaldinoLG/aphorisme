<template>
  <div>
    <Nav />
    <p>{{ getIfToken }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  computed: {
    getIfToken () {
      return this.$store.getters.isAuthenticated + ' - ' + JSON.stringify(this.$store.getters.loggedInUser) + '- ' + JSON.stringify(this.$auth.user)
    }
  }
})
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: #bbb;
}
</style>
