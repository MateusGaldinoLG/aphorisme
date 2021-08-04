interface INewUserDetails{
  name: string;
  description: string;
  pronoun: string;
}

export const mutations = {
  editUser (state: any, details: INewUserDetails) {
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
  },
  getUserName (state: any) {
    if (state.auth.user === null) {
      return null
    } else {
      return state.auth.user.username
    }
  }
}
