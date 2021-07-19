import { MutationTree } from 'vuex'
import { aphorisms } from '../assets/aphorisms'

export const state = () => ({
  aphorisms
})

export type AphorismeState = ReturnType<typeof state>

export const mutations: MutationTree<AphorismeState> = {
  setAllUserAphorisms: (state: any) => (state.aphorisms = aphorisms)
}

export const getters = {
  getAphorisms: (state: any) => state.aphorisms
}
