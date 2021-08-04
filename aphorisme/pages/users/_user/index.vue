<template>
  <div>
    <Nav />
    <UserHero v-if="wasFound" :user="user" />
    <UserNotFound v-else :username="username" />
    <Aphorisme-UserAphorisms :is-profile="false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      user: {},
      username: this.$route.params.user,
      wasFound: true
    }
  },
  async created () {
    const param = this.$route.params.user
    await this.$axios.$get(`/user/${param}`)
      .then((res: object) => {
        this.user = res
      })
      .catch((err: any) => {
        if (err.response.status) {
          this.wasFound = false
        }
      })
  }
})
</script>

<style lang="scss" scoped>

</style>
