<template>
  <div class="user-hero">
    <div class="card">
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
          <button v-if="isEditable" @click="edit">
            <img src="~/assets/icons/edit.svg" alt="edit user details">
          </button>
        </div>
        <div>
          <h6>Bio and Details:</h6>
          <p class="card-text">
            {{ user.description }}
          </p>
        </div>
        <div class="details">
          <p class="card-text">
            Pronouns: {{ user.pronoun }}
          </p>
          <p class="card-text">
            Age: {{ user.age }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mounted () {
    window.console.log(this.user.name)
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'loggedInUser'
    ]),
    isEditable () {
      return this.$store.getters.isAuthenticated && this.user === this.$store.getters.loggedInUser
    }
  },
  methods: {
    edit () {
      this.$emit('edit')
    }
  }
})
</script>

<style lang="scss">
.user-hero{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0.75rem;
}
.user{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card{
  width: 600px;
}
.details{
  display: flex;
  flex-direction: row;
  p{
    margin-right: 1rem;
  }
}
@media (max-width: 500px) {
  .card{
    width: 25rem;
  }
}
</style>
