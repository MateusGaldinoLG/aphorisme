<template>
  <div class="LoginCard">
    <form method="POST" @submit.prevent="authenticateUser">
      <div class="auth-container">
        <h2>Login</h2>
        <div v-if="isWrong">
          <p class="error-message">
            Incorrect Email/Password
          </p>
        </div>
        <div class="auth-item">
          <label>Email</label>
          <input
            v-model="email"
            type="text"
            placeholder="Enter your email here"
            name="email"
            required
            @input="checkLoginData"
          >
          <p v-if="falseEmail" class="error-message">
            email must be correct
          </p>
        </div>
        <div class="auth-item">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password here"
            name="password"
            required
            @input="checkLoginData"
          >
          <p v-if="falsePassword" class="error-message">
            Password must be filled
          </p>
          <p>Forgot your password?</p>
          <!-- <p>{{ getIfToken }}</p> -->
        </div>
      </div> <!--Auth container-->
      <div class="button-container">
        <button>
          Login
        </button>
        <button @click="logout">
          Logout
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      email: '',
      password: '',
      isWrong: false,
      falseEmail: false,
      falsePassword: false
    }
  },
  computed: {
    getIfToken () {
      return this.$store.getters.isAuthenticated + ' - ' + this.$store.getters.loggedInUser + '- ' + this.$auth.user
    }
  },
  methods: {
    async authenticateUser () {
      try {
        const auth = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        window.console.log(auth)
      } catch (err: any) {
        if (JSON.stringify(err) !== '{}') {
          if (err.response.status !== 404) {
            window.console.log('erro')
            this.isWrong = true
          }
        }
      }

      if (!this.isWrong) {
        this.$router.push('/')
      }
    },
    async logout () {
      await this.$auth.logout()
    },
    checkLoginData () {
      if (!this.email.includes('@')) {
        this.falseEmail = true
      } else {
        this.falseEmail = false
      }

      if (!(this.password.length > 0)) {
        this.falsePassword = true
      } else {
        this.falsePassword = false
      }
    }
  }

})
</script>

<style src="~/assets/SignUpCard.scss" lang="scss">

</style>
