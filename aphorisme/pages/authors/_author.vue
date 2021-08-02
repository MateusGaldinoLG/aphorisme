<template>
  <div>
    <Nav />
    <div v-if="author">
      <AuthorHero :author="author" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AuthorPage extends Vue {
    authorName = this.$route.params.author
    author = null

    created () {
      this.$axios.get(`/author/${this.authorName}`)
        .then((res: any) => {
          this.author = res.data
          console.log(this.author)
        })
        .catch(console.log)
    }
}

</script>

<style scoped>

</style>
