<template>
  <div class="card">
    <h3 class="card-title">
      {{ author.name }}
    </h3>
    <p class="card-text">
      {{ author.bio }}
    </p>
    <div class="dates">
      <p>{{ dateOfBirth }}</p>
      <p>-</p>
      <p>{{ dateOfDeath }} </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface Author{
    id: string;
    name: string;
    bio: string;
    born_at: string;
    died_at?: string;
}

@Component
export default class AuthorPage extends Vue {
    @Prop({ type: Object, required: true }) readonly author!: Author;

    get dateOfBirth () {
      const dateOfBirth = new Date(this.author.born_at)
      const dob = dateOfBirth.toString().split(' ').slice(1, 4).join(' ')
      return dob
    }

    get dateOfDeath () {
      if (!this.author.died_at) {
        return ''
      }

      const dateOfDeath = new Date(this.author.died_at)
      const dod = dateOfDeath.toString().split(' ').slice(1, 4).join(' ')
      return dod
    }
}

</script>

<style lang="scss" scoped>
.dates{
  display: flex;
  justify-content: flex-end;

  p{
    margin-right: 0.5rem;
  }
}
.card{
  width: 600px;
}
@media (max-width: 500px) {
  .card{
    width: 25rem;
  }
}
</style>
