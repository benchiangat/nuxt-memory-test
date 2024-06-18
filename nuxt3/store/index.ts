import { createStore } from "vuex";

export default createStore({
  state: () => ({
    accountInfo: new Array(10000).fill(0),
  }),
  getters: {
    accountInfo: (state) => state.accountInfo
  },
  mutations: {
    initAccountInfo (state, arr){
      state.accountInfo = arr
    },
    clearState(state){
      state.accountInfo = []
    }
  },
  actions: {
    initAccountInfo({commit}, payload) {
      commit('initAccountInfo',payload)
    },
    
    clearState({commit}) {
      commit('clearState')
    }
  }
})
