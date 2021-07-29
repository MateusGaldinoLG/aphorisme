<template>
  <div>
    <p>Hello</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Aphorism extends Vue {
  aphorismId = this.$route.params.aphorism
  aphorism = ''

  created () {
    // this.$axios.get('')
  }
}
</script>
