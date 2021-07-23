<template>
  <div class="aphorism">
    <Aphorisme-WriteAphorism v-if="isProfile" />
    <Aphorisme-Aphorism v-for="aphorism in aphorisms" :key="aphorism.id" :aphorism="aphorism" :user="user" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { aphorisms } from '~/assets/aphorisms'

export default Vue.extend({
  name: 'UserAphorisms',
  props: {
    isProfile: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      aphorisms: [],
      user: this.$store.getters.loggedInUser
    }
  },
  async mounted () {
    let userName: string
    if (this.isProfile) {
      userName = this.$store.getters.getUserName
      userName.replace(' ', '-')
      window.console.log(userName)
    } else {
      userName = this.$route.params.user
      window.console.log(userName)
    }

    try {
      window.console.log(userName)
      window.console.log(`/aphorisms/${userName}`)
      const aphorism = await this.$axios.get(`/aphorisms/${userName}`)
      this.aphorisms = aphorism.data as any
      window.console.log(aphorism)
      window.console.log(aphorism.data)
      window.console.log(this.user)
      window.console.log(this.user.name)
      window.console.log(this.user.username)
      window.console.log(this.aphorisms)
    } catch (err: any) {
      window.console.log(err)
    }
  }
})
</script>

<style lang="scss" scoped>
.aphorism{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
