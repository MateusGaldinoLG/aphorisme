<template>
  <div>
    <article class="aphorism">
      <div class="aphorism_heading">
        <div class="user">
          <a href="#">
            <span class="aphorism_heading-name">{{ user.name }}</span>
          </a>
          <span class="aphorism_heading-username">{{ user.username }}</span>
        </div>
        <Aphorisme-Dropdown :aphorism-id="aphorism.id" :user-id="user.id" />
      </div> <!-- post heading -->
      <div class="aphorism_body">
        <p>{{ aphorism.text }}</p>
        <p style="text-align: right;">
          {{ authorName }}
        </p>
      </div> <!-- post body -->
      <div class="aphorism_details">
        <div class="aphorism_details-body">
          <div class="likes">
            <button @click="likeAphorism">
              <img src="~/assets/icons/heart.svg" alt="like">
            </button>
            <p>{{ aphorism.like }}</p>
          </div>
          <time :pubtime="aphorism.created_at">
            {{ Time }}
          </time>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface IAphorism{
    id: string;
    text: string;
    like: number;
    userId: string;
    authorId?: string;
    authorName?: string;
    // eslint-disable-next-line camelcase
    created_at: string;
}

interface User{
    id: string;
    username: string;
    name?: string;
    email: string;
    password?: string;
    age?: number;
    dateOfBirth?: Date;
}

@Component
export default class Aphorism extends Vue {
  @Prop({ type: Object, required: true }) readonly aphorism!: IAphorism;
  @Prop({ type: Object, required: true }) readonly user!: User;

  thisAphorism: IAphorism = this.aphorism;

  get authorName (): string {
    const aphorism = this.aphorism
    const user = this.user
    if (aphorism.authorName === null || typeof aphorism.authorName === 'undefined') {
      window.console.log(user.username)
      return user.username
    }
    return aphorism.authorName
  }

  get Time () {
    const date = new Date(this.aphorism.created_at)
    const hours = date.getHours()
    const dateString = date.toString()
    if (hours > 23) {
      return dateString
    } else {
      return `${hours}hrs`
    }
  }

  public likeAphorism (): void {
    window.console.log(this.aphorism.id)
    this.$axios.put(`/aphorisms/like/${this.aphorism.id}`)
      .then((res: any) => {
        window.console.log(res)
        this.thisAphorism.like = res.data.like
      })
      .catch(window.console.log)
  }
}
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

    &_heading-name{
      margin-right: 0.25rem;
    }

    &_heading-username{
    color: gray;
    }

    &_body p{
    margin: 0;
    }

    &_details-body{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
}

.aphorism_heading{
  display: flex;
  justify-content: space-between;
}

button{
  background-color: #fff;
  border: none;
}

@media (max-width: 500px) {
  .aphorisme{
    width: 25rem;
  }
}

</style>
