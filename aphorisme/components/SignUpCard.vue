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
          <label>Date of Birth</label>
          <div class="auth-date-item">
            <div class="date-item">
              <label>Day</label>
              <input v-model="day" type="text" placeholder="dd">
            </div>
            <div class="date-item">
              <label>Month</label>
              <select id="month" v-model="month" name="month">
                <option disabled value>
                  ...
                </option>
                <option v-for="mes in meses" :key="mes" :value="mes">
                  {{ mes }}
                </option>
              </select>
            </div>
            <div class="date-item">
              <label>Year</label>
              <select id="year" v-model="year" name="year">
                <option v-for="i in (2006 + 1 - 1940)" :key="i" :value="2007 - i">
                  {{ 2007 - i }}
                </option>
              </select>
            </div>
          </div>
        </div> <!--auth item-->
      </div> <!--Auth container-->
      <div class="button-container">
        <button>
          Sign-up
        </button>
        <button class="cancel" @click="cancelSignUp">
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
import { calculateAge, createDate } from '../assets/util/dateFunctions'

export default Vue.extend({
  data () {
    return {
      meses: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dezember'],
      username: null,
      email: null,
      password: null,
      day: '',
      month: '',
      year: '',
      isWrong: false,
      errorMessage: ''
    }
  },
  methods: {
    async createUser () {
      await this.$axios.$post('/users',
        {
          username: this.username,
          email: this.email,
          password: this.password,
          age: calculateAge(createDate(this.day, this.month, this.year, this.meses)),
          dateOfBirth: createDate(this.day, this.month, this.year, this.meses)
        })
        .then((res: object) => {
          window.console.log(res)
        })
        .catch((error: any) => {
          window.console.log(error.response)
          this.isWrong = true
          this.errorMessage = error.response.data.error // change this later
        })
      // window.console.log({
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      //   age: calculateAge(createDate(this.day, this.month, this.year, this.meses)),
      //   date: createDate(this.day, this.month, this.year, this.meses)
      // })
    },
    cancelSignUp () {
      this.$router.push('/')
    }
  }
})
</script>

<style src="~/assets/SignUpCard.scss" lang="scss" scoped>

</style>
