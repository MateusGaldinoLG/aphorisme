<template>
  <div class="aphorism">
    <Aphorisme-WriteAphorism />
    <Aphorisme-Aphorism v-for="aphorism in aphorisms" :key="aphorism.id" :aphorism="aphorism" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { aphorisms } from '~/assets/aphorisms'

export default Vue.extend({
  name: 'UserAphorisms',
  data () {
    return {
      aphorisms
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
