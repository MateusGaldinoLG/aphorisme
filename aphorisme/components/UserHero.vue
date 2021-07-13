<template>
  <div class="UserHero">
    <h2>{{ user.username }}</h2>
    <p class="user-name">{{ user.name }}</p>
    <div class="description">
      <h3>Bio and Details:</h3>
      <p>{{ user.description }}</p>
    </div>
    <div class="pronouns">
      <h4>Pronouns:</h4>
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
    background-color: rgba(150, 150, 230, 0.90);
    margin: 10px;
    box-shadow: 1px 0 0 gray;
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
