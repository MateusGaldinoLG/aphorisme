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

export const getters = {
  isAuthenticated (state: any) {
    return state.auth.loggedIn
  },
  loggedInUser (state: any) {
    return state.auth.user
  }
}
