<template>
  <div>
    <div class="search-bar">
      <input
        v-model="searchInput"
        type="text"
        class="search-bar__input"
        placeholder="Enter your search"
        aria-label="search"
        @keyup.enter="search"
      >
      <button class="search-bar__submit">
        <img src="~/assets/icons/search.svg" alt="submit search">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchBar extends Vue {
  searchInput: string = '';

  public search () {
    window.console.log(this.searchInput)
    this.$router.push(`/search/${this.searchInput}`)
  }
}
</script>

<style lang="scss" scoped>
// style based on Kevin Powell's search bar youtube tutorial
.search-bar{
    --size: 60px;
    border: 2px solid $dark-purple-500;
    display: flex;
    border-radius: 50px;
    height: 60px;
    width: 60px;
    padding: 3px;
    position: relative;
    transition: width 150ms cubic-bezier(0.18, 0.89, 0.32, 1.10);
    overflow: hidden;

    &__input{
        flex-grow: 1;
        font-size: 1.25rem;
        padding: 0 0.5rem;
        border: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        line-height: calc(60px - 3px);
        opacity: 0;
        cursor: pointer;

        &:focus{
            outline: 0; // removes outline
        }
    }

    &__submit{
        font-size: 1.5rem;
        cursor: pointer;
        background: transparent;
        border-radius: 50%;
        width: calc(60px - 10px);
        height: calc(60px - 10px);
        margin-left: auto;
        transition: background 150ms ease-in-out;
        background: white;
    }

    // parent style change when child is in focus
    &:focus-within{
        width: 70vh;

        .search-bar__input{
            opacity: 1;
            cursor: initial;
            width: calc(100% - 60px);
        }

        .search-bar__submit{
            background:$red-900;
            color: white;

            &:focus{
                outline: 0;
                box-shadow: 0 0 10px rgba(0,0,0,0.25);
            }
        }

    }
}
</style>
