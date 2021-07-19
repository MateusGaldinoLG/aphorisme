<template>
  <div class="writeAphorism">
    <form action="" method="POST">
      <h4>Write an aphorism</h4>
      <textarea v-model="aphorism" name="aphorism" placeholder="Enter your aphorism here" />
      <div id="buttons">
        <button class="btn btn-outline-danger">
          cancel
        </button>
        <button type="button" class="btn btn-primary">
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
  computed: {
    authorName () {
      const aphorism = this.aphorism
      if (aphorism.authorName === null || typeof aphorism.authorName === 'undefined') {
        return aphorism.user.user_username
      }
      return aphorism.authorName
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
