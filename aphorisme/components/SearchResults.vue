<template>
  <div>
    <div v-if="!haveError">
      <h2>You have searched for {{ name }}</h2>

      {{ name }}
    </div>
    <div v-else>
      <UserNotFound :username="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchResults extends Vue {
    @Prop({ type: String, required: true }) readonly searchString!: string

    results: any;
    haveError = false;

    mounted () {
      window.console.log(this.searchString)
      this.getResults()
    }

    getResults () {
      const searchInput = this.searchString.replace(' ', '-')
      window.console.log(searchInput)
      this.$axios.get(`/details/${searchInput}`)
        .then((res: any) => {
          this.results = res.data
        })
        .catch((err: any) => {
          window.console.log(err)
          this.haveError = true
        })
    }

    get name () {
      return this.searchString
    }
}
</script>

<style lang="scss" scoped>

</style>
