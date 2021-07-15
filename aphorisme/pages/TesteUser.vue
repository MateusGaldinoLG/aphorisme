<template>
  <UserHero :user="user" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      user: {
        name: 'John Doe',
        username: 'JDoe',
        description: 'Lorem ipsum dolor sit amsdoa msodam osdmasodmas domasda isdasod aisodoaihsd asdhiaosd',
        pronoun: 'They/them'
      }
    }
  }
})
</script>

<style lang="scss">

</style>
