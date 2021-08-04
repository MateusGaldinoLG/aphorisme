<template>
  <div>
    <Nav />
    <SearchResults :search-string="searchString" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
    searchString: string = this.$route.params.name
}
</script>

<style lang="scss" scoped>

</style>
