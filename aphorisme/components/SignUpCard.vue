<template>
  <div class="LoginCard">
    <form method="POST" @submit.prevent="createUser">
      <div class="auth-container">
        <h2>Login</h2>
        <label>Username: </label>
        <input v-model="username" type="text" placeholder="Enter your username here" name="username" required>
        <label>Email: </label>
        <input v-model="email" type="text" placeholder="Enter your email here" name="email" required>
        <label>Password: </label>
        <input v-model="password" type="password" placeholder="Enter your password here" name="password" required>
        <label>Age: </label>
        <input
          v-model="age"
          type="text"
          placeholder="Enter your age here"
          name="age"
          min="15"
          required
        >
      </div>
      <div class="button-container">
        <button>
          Login
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
      username: '',
      email: '',
      password: '',
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
        //   username: 'a',
        //   email: 'a',
        //   password: 'mateus@teste.com',
        //   age: 18
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

<style scoped>
.LoginCard{
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.25);
    border: 2px solid gray;
}
h2{
    margin: 10px;
}
label{
    font-size: 1.25rem;
    font-weight: 500;
}
.button-container, .auth-container{
    padding: 16px;
}
button{
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
button:hover{
    opacity: 0.8;
}
.cancel{
    background-color: #f44336;
}
</style>
