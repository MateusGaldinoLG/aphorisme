<template>
  <div>
    <div>
      <div v-if="!haveError">
        <h2>You have searched for {{ name }}</h2>
      </div>
      <div v-else>
        <UserNotFound :username="name" />
      </div>
    </div>
    <div class="results">
      <div class="users">
        <h3>Users</h3>
        <div class="users_with_username">
          <h4 class="section_title">
            Users with username
          </h4>
          <p v-if="usersWithUsername.length == 0" class="not-found">
            User with username {{ name }} not found
          </p>
          <div v-for="user in usersWithUsername" v-else :key="user.id">
            <UserHero :user="user" />
          </div>
        </div>
        <div class="users_with_name">
          <h4 class="section_title">
            Users with name
          </h4>
          <p v-if="usersWithName.length == 0" class="not-found">
            User with name {{ name }} not found
          </p>
          <div v-for="user in usersWithName" v-else :key="user.id">
            <UserHero :user="user" />
          </div>
        </div>
      </div>
      <div class="authors">
        <h3>Authors</h3>
        <p v-if="authors.length == 0" class="not-found">
          Author with name {{ name }} not found
        </p>
        <div v-for="author in authors" v-else :key="author.id">
          <AuthorHero :author="author" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchResults extends Vue {
    @Prop({ type: String, required: true }) readonly searchString!: string

    results: any;
    haveError = false;

    authors = [];
    users = [];
    usersWithUsername = [];
    usersWithName = [];

    mounted () {
      window.console.log(this.searchString)
      this.getResults()
    }

    getResults () {
      const searchInput = this.searchString.replace(' ', '-')
      window.console.log(searchInput)
      this.$axios.get(`/details/${searchInput}`)
        .then((res: any) => {
          this.results = res.data
          window.console.log(this.results)
          this.authors = res.data.authors
          this.users = res.data.users
          this.usersWithUsername = res.data.users[0]
          this.usersWithName = res.data.users[1]

          window.console.log(this.authors)
          window.console.log(this.users)
          window.console.log(this.usersWithUsername[0])
        })
        .catch((err: any) => {
          window.console.log(err)
          this.haveError = true
        })
    }

    get name () {
      return this.searchString
    }
}
</script>

<style lang="scss" scoped>
h2, h3, .section_title, .not-found{
  color: white;
}
</style>
