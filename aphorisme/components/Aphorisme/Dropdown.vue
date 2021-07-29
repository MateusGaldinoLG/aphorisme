<template>
  <b-dropdown variant="outline-primary">
    <b-dropdown-item v-if="isDeletable">
      <img src="~/assets/icons/trash-2.svg" alt="">
      <span class="delete" @click="deleteAphorism">Delete</span>
    </b-dropdown-item>
    <b-dropdown-item v-else>
      <img src="~/assets/icons/flag.svg" alt="flag">
      <span class="report">Report</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Aphorism extends Vue {
  @Prop({ type: String, required: true }) readonly aphorismId!: string;
  @Prop({ type: String, required: true }) readonly userId!: string;

  loggedInUserId: any;

  created () {
    if (this.$store.getters.loggedInUser) {
      this.loggedInUserId = this.$store.getters.loggedInUser.id
    } else {
      this.loggedInUserId = null
    }
  }

  get isDeletable (): boolean {
    if (this.loggedInUserId !== null && this.loggedInUserId === this.userId) {
      return true
    } else {
      window.console.log('falsy')
      return false
    }
  }

  public deleteAphorism (): void {
    window.console.log(this.aphorismId)
    this.$axios.delete(`/aphorisms/${this.aphorismId}`)
      .then((res: any) => {
        window.console.log(res)
      })
      .catch(window.console.log)
  }
}
</script>

<style lang="scss" scoped>
.delete{
    color: $cancel-red;
}
</style>
