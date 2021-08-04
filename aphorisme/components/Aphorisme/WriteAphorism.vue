<template>
  <div class="writeAphorism">
    <form method="POST" @submit.prevent="writeAphorism">
      <h4>Write an aphorism</h4>
      <textarea v-model="aphorism" name="aphorism" placeholder="Enter your aphorism here" />
      <div>
        <label>Do you want to assign an author?</label>
        <input v-model="hasAuthor" type="checkbox">
        <input v-if="hasAuthor" v-model="authorName" type="text" placeholder="author name here">
      </div>
      <div id="buttons">
        <button class="cancel" @click="cancel">
          cancel
        </button>
        <button>
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
      aphorism: '',
      hasAuthor: false,
      authorName: null
    }
  },
  methods: {
    async writeAphorism () {
      await this.$axios.post('/aphorisms',
        {
          text: this.aphorism,
          likes: 0,
          author_name: this.authorName
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
    padding: $p-4;
}
#buttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
button{
    background-color: $button-blue;
    color: white;
    padding: $p-2 $p-4;
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
    padding: $p-1;
    border-radius: 0.75rem;
}

@media (max-width: 500px) {
  .writeAphorism{
    width: 25rem;
  }
}
</style>
