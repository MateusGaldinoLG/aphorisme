<template>
  <div class="UserHero">
    <h2>{{ user.name }}</h2>
    <img src="~/assets/icons/edit.svg" alt="edit user details">
    <p class="user-name">
      {{ user.username }}
    </p>
    <div class="description">
      <h3>Bio and Details:</h3>
      <img src="~/assets/icons/edit.svg" alt="edit user details">
      <p>{{ user.description }}</p>
    </div>
    <div class="pronouns">
      <h4>Pronouns:</h4>
      <img src="~/assets/icons/edit.svg" alt="edit user details">
      <p>{{ user.pronoun }}</p>
    </div>
    <!-- <p>Age: {{ user.age }}</p> -->
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
  }
})
</script>

<style lang="scss">
.UserHero{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eee;
    margin: 10px;
    box-shadow: 1px 1px 0 gray;
}
h2{
    font-size: 1.35rem;
    padding: 2px;
    font-weight: 600;
}
.user-name{
    color: #646060;
}

</style>
