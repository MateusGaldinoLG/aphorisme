<template>
  <div>
    <Nav />
    <UserHero class="hero" :user="user" @edit="setEditable" />
    <EditUserModal v-if="editable" :user="user" :editable="editable" @edit="setEditable" />
    <Aphorisme-UserAphorisms />
  </div>
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
      },
      editable: false
    }
  },
  methods: {
    setEditable () {
      // window.console.log('emitted')
      if (this.editable === false) {
        this.editable = true
      } else { this.editable = false }
    }
  }
})
</script>

<style lang="scss">

</style>
