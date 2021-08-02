<template>
  <div>
    <Nav />
    <div class="aphorism_body">
      <Aphorisme-Aphorism v-if="aphorism" :aphorism="aphorism" :user="user" />
      <div v-else>
        loading...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Aphorism extends Vue {
  aphorismId = this.$route.params.aphorism
  aphorism: any | null = null
  user: any | null = null

  created () {
    this.$axios.get(`/aphorism/${this.aphorismId}/details`)
      .then((res: any) => {
        console.log(res.data.aphorism)
        this.aphorism = res.data.aphorism
        this.user = res.data.user
      })
      .catch(console.log)
  }
}
</script>

<style lang="scss" scoped>
.aphorism_body{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
