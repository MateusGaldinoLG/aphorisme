<template>
  <nav>
    <NuxtLink to="/" class="header">
      Aphorisme
    </NuxtLink>
    <div class="navSupport">
      <NuxtLink v-if="!isLoggedIn" to="/SignUp" class="nav-link">
        Sign-up
      </NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/Login" class="nav-link">
        Login
      </NuxtLink>
      <NuxtLink v-if="isLoggedIn" to="/users/Profile" class="nav-link">
        Profile
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isLoggedIn: this.$store.getters.isAuthenticated
    }
  }
})
</script>

<style lang="scss" scoped>
nav{
  background-color: $dark-purple-250;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Merriweather', 'Helvetica neue', Arial, Helvetica, sans-serif;
  width: 100vw;
}
.nav-link{
    display: inline-block;
    padding: $p-1;
    margin: 0 2vw;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: $fs-large;
  &:hover{
    color: $dark-purple-hover;
  }
}
.header{
  display: inline-block;
  padding: $p-1;
  margin: 0 2vw;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: $fs-4xl;
  margin-right: auto;
}
@media (max-width: 500px){
  nav{
    flex-direction: column;
  }
  .nav-link, .header{
    margin: 0;
    padding: $p-1;
    display: block;
  }
}
</style>
