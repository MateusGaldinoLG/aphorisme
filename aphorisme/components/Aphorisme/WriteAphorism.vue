<template>
  <div class="writeAphorism" >
    <form method="POST" @submit.prevent="writeAphorism">
      <h4>Write an aphorism</h4>
      <textarea v-model="aphorism" name="aphorism" placeholder="Enter your aphorism here" />
      <div id="buttons">
        <button class="cancel" @click="cancel">
          cancel
        </button>
        <button @click="writeAphorism">
          send
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
      aphorism: ''
    }
  },
  methods: {
    async writeAphorism () {
      await this.$axios.post('/aphorisms',
        {
          text: this.aphorism,
          likes: 0
        })
        .then(window.console.log)
        .catch(window.console.log)
    },
    cancel () {
      this.aphorism = ''
    }
  }
})
</script>

<style lang="scss" scoped>
.writeAphorism{
    background-color: white;
    width: 500px;
    margin-bottom: 0.15rem;
    padding: 1rem;
}
#buttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
button{
    background-color: $button-blue;
    color: white;
    padding: 0.5rem 1rem;
    margin: 9px;
    border: none;
    cursor: pointer;
    border-radius: 12px;
  &:hover{
    opacity: 0.9;
  }
  &.cancel{
    border: 1px solid $cancel-red;
    background-color: white;
    color: $red-500;
  }
  &.login-button{
    width: 100%;
    border-radius: 16px;
  }
  &.accept{
    width: 100%;
    border-radius: 16px;
  }
}
textarea{
    resize: none;
    width: 100%;
    height: 3rem;
    padding: .25rem;
    border-radius: 0.75rem;
}

@media (max-width: 500px) {
  .writeAphorism{
    width: 25rem;
  }
}
</style>
