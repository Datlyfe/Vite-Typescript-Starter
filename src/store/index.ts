import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  state() {
    return {}
  },
  mutations: {},
  actions: {},
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}

export default store
