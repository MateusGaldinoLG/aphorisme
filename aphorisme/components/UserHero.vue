<template>
  <!-- <img src="~/assets/icons/edit.svg" alt="edit user details"> -->
  <div class="user-hero">
    <div class="card" style="width: 30rem">
      <div class="card-body">
        <div class="user">
          <div>
            <h4 class="card-title">
              {{ user.name }}
            </h4>
            <h5 class="card-subtitle mb-2 text-muted">
              {{ user.username }}
            </h5>
          </div>
          <img v-if="isEditable" src="~/assets/icons/edit.svg" alt="edit user details">
        </div>
        <div>
          <h6>Bio and Details:</h6>
          <p class="card-text">
            {{ user.description }}
          </p>
        </div>
        <p class="card-text">
          Pronouns: {{ user.pronoun }}
        </p>
      </div>
    <!-- <p>Age: {{ user.age }}</p> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    isEditable () {
      return this.$store.getters.isAuthenticated && this.user === this.$store.getters.loggedInUser
    }
  }
})
</script>

<style lang="scss">
.user{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
