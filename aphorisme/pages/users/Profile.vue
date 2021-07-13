<template>
  <div>
    <Nav />
    <UserHero class="hero" :user="returnUser" />
    <!-- <p>{{ getIfToken }}</p> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  computed: {
    getIfToken () {
      return this.$store.getters.isAuthenticated + ' - ' + JSON.stringify(this.$store.getters.loggedInUser) + '- ' + JSON.stringify(this.$auth.user)
    },
    returnUser () {
      return this.$store.getters.loggedInUser
    }
  }
})
</script>

<style scoped>
/* .hero{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
} */
</style>
