<template>
  <div class="SignupCard">
    <form method="POST" @submit.prevent="createUser">
      <div class="auth-container">
        <h2>Sign-up</h2>
        <div class="auth-item">
          <label>Username</label>
          <input v-model="username" type="text" placeholder="Enter your username here" name="username" required>
        </div>
        <div class="auth-item">
          <label>Email</label>
          <input v-model="email" type="text" placeholder="Enter your email here" name="email" required>
        </div>
        <div class="auth-item">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Enter your password here" name="password" required>
          <p>Passwords must have at least 8 characters, with numbers and letters</p>
        </div>
        <div class="auth-item">
          <label>Age</label>
          <input
            v-model="age"
            type="text"
            placeholder="Enter your age here"
            name="age"
            min="15"
            required
          >
        </div> <!--auth item-->
      </div> <!--Auth container-->
      <div class="button-container">
        <button>
          Sign-up
        </button>
        <button class="cancel">
          Cancel
        </button>
      </div>
      <div v-if="isWrong">
        <p> {{ errorMessage }} </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Vue from 'vue'

// interface ILoginInformations{
//     username: string;
//     email: string;
//     password: string;
//     age: number;
// }

export default Vue.extend({
  data () {
    return {
      username: null,
      email: null,
      password: null,
      age: '',
      isWrong: false,
      errorMessage: ''
    }
  },
  methods: {
    async createUser () {
      const ip = await this.$axios.$post('http://localhost:3030/users',
        {
          username: this.username,
          email: this.email,
          password: this.password,
          age: parseInt(this.age)
        })
        .then((res: object) => {
          window.console.log(res)
        })
        .catch((error: any) => {
          window.console.log(error.response)
          this.isWrong = true
          this.errorMessage = error.response.data.error // change this later
        })
      window.console.log(ip)
    }
  }
})
</script>

<style src="~/assets/SignUpCard.scss" lang="scss" scoped>

</style>
