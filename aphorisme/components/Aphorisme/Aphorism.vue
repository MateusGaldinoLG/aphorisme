<template>
  <div>
    <article class="aphorism">
      <div class="aphorism_heading">
        <a href="#">
          <span class="aphorism_heading-name">{{ aphorism.user.userName }}</span>
        </a>
        <span class="aphorism_heading-username">{{ aphorism.user.userUsername }}</span>
      </div> <!-- post heading -->
      <div class="aphorism_body">
        <p>{{ aphorism.text }}</p>
      </div> <!-- post body -->
      <div class="aphorism_details">
        <div class="aphorism_details-body">
          <p>{{ authorName }}</p>
          <time>2021-07-17</time>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    aphorism: {
      type: Object,
      required: true
    } as PropOptions<any>
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
a{
  text-decoration: none;
  color: black;

  &:hover{
    text-decoration: underline;
    color: black;
  }
}

.aphorism{
    padding: 0.25rem 1.0rem;
    width: 600px;
    background-color: white;
    margin: 0.15rem;
    &_heading-username{
    color: gray;
    }
    &_body p{
    margin: 0;
    }

    &_details{
    display: flex;
    justify-content: flex-end;
    &-body{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    }
}

@media (max-width: 500px) {
  .aphorisme{
    width: 25rem;
  }
}

</style>
