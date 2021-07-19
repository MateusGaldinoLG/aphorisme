<template>
  <b-modal v-model="isEditable" centered>
    <template #modal-header>
      <b-button size="sm" variant="outline-danger" @click="cancel">
        X
      </b-button>
      <h5>Edit user</h5>
    </template>
    <form ref="form">
      <h4>
        User Name
      </h4>
      <input v-model="name" type="text">
      <div>
        <h6>Bio and Details:</h6>
        <textarea id="description" v-model="description" name="description" cols="30" rows="10" />
      </div>
      <div class="details">
        <p class="card-text">
          Pronouns:
          <input v-model="pronoun" type="text">
        </p>
      </div>
    </form>
    <template #modal-footer>
      <b-button size="sm" variant="primary" @click="edit">
        Edit
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      name: this.user.name,
      description: this.user.description,
      pronoun: this.user.pronoun,
      isEditable: this.editable
    }
  },
  methods: {
    async edit () {
      if (this.description === '' || this.description === '') {
        return
      }
      try {
        const newUser = await this.$axios.$put('/api/users/edit', {
          name: this.name,
          description: this.description,
          pronoun: this.pronoun
        })
        window.console.log(newUser)
        const userDetails = {
          name: newUser.name,
          description: newUser.description,
          pronoun: newUser.pronoun
        }
        this.$store.commit('editUser', userDetails)
        this.$emit('edit')
      } catch (err: any) {
        window.console.log(err)
      }
    },
    cancel () {
      this.$emit('edit')
    }
  }
})
</script>

<style lang="scss">
.user-hero{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0.75rem;
}
.commands{
      display: flex;
      justify-content: space-between;
      button{
        padding: 0.5rem;
        border-radius: 2px;
        box-shadow: none;
        color: white;
        margin: 0.5rem;
        background-color: $button-blue;
        &:hover{
          opacity: 0.9;
        }
      }

      .cancel{
        font-size: 1.25rem;
        padding: 0.25rem;
        border: none;
        background-color: white;
        color: $button-blue;
      }
}
.card{
  width: 600px;
}

input{
  margin: 0.25rem 0;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.details{
  display: flex;
  flex-direction: row;
  p{
    margin-right: 1rem;
  }
}
img{
    margin: 0;
}
textarea{
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  resize: none;
  border-radius: 0.5rem;
}
@media (max-width: 500px) {
  .card{
    width: 25rem;
  }
}
</style>
