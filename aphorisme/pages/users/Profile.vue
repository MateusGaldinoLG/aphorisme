<template>
  <div>
    <Nav />
    <UserHero class="hero" :user="returnUser" @edit="setEditable" />
    <EditUserModal v-if="editable" :user="returnUser" :editable="editable" @edit="setEditable" />
    <Aphorisme-UserAphorisms :is-profile="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data () {
    return {
      editable: false
    }
  },
  computed: {
    getIfToken () {
      return this.$store.getters.isAuthenticated + ' - ' + JSON.stringify(this.$store.getters.loggedInUser) + '- ' + JSON.stringify(this.$auth.user)
    },
    returnUser () {
      return this.$store.getters.loggedInUser
    }
  },
  methods: {
    setEditable () {
      window.console.log('emitted')
      if (this.editable === false) { this.editable = true }
      else { this.editable = false }
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
