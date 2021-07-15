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
      <NuxtLink v-if="isLoggedIn" to="users/Profile" class="nav-link">
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
  background-color: rgb(64, 17, 112);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Merriweather', Arial, Helvetica, sans-serif;;
}
.nav-link{
    display: inline-block;
    padding: 4px;
    margin: 0 2vw;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1.25rem;
  &:hover{
    color: #c5c2c2;
  }
}
.header{
  display: inline-block;
  padding: 4px;
  margin: 0 2vw;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-size: 3rem;
  margin-right: auto;
}
@media (max-width: 500px){
  nav{
    flex-direction: column;
  }
  .nav-link, .header{
    margin: 0;
    padding: 3px;
    display: block;
  }
}
</style>
