<template>
  <div class="aphorism">
    <Aphorisme-WriteAphorism v-if="isProfile" />
    <Aphorisme-Aphorism v-for="aphorism in aphorisms" :key="aphorism.id" :aphorism="aphorism" :user="user" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class UserAphorisms extends Vue {
  @Prop({ type: Boolean, required: true }) readonly isProfile!: boolean;

      aphorisms: any[] = []
      user: any

      async created () {
        let userName: string
        if (this.isProfile) {
          userName = this.$store.getters.getUserName
          userName.replace(' ', '-')
          this.user = this.$store.getters.loggedInUser
        } else {
          userName = this.$route.params.user
          await this.$axios.get('/user/' + userName)
            .then((res: any) => {
              this.user = res.data
              window.console.log(res.data.id)
            })
            .catch(window.console.log)
        }

        try {
          const aphorism = await this.$axios.get(`/aphorisms/${userName}`)
          this.aphorisms = aphorism.data as any
        } catch (err: any) {
          window.console.log(err)
        }
      }
}

</script>

<style lang="scss" scoped>
.aphorism{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
