// import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

// @Module({ stateFactory: true })
// export class Token extends VuexModule {
//     token: string | null = window.localStorage.getItem('token');

//     @Mutation
//     setToken (token: string) {
//       this.token = token
//       if (process.browser) {
//         window.localStorage.set('authToken', token)
//       }
//     }

//     get tokenString () {
//       return this.token
//     }
// }

interface INewUserDetails{
  name: string;
  description: string;
  pronoun: string;
}

export const mutations = {
  editUser (state: any, details: INewUserDetails) {
    window.console.log(details)
    state.auth.user.name = details.name
    state.auth.user.descriptipn = details.description
    state.auth.user.pronoun = details.pronoun
  }
}

export const getters = {
  isAuthenticated (state: any) {
    return state.auth.loggedIn
  },
  loggedInUser (state: any) {
    return state.auth.user
  }
}
