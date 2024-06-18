export const state = () => ({
  accountInfo: new Array(10000).fill(0),
})
export const getters = {
  accountInfo: (state) => state.accountInfo
}
export const mutations = {
  initAccountInfo (state, arr){
    state.accountInfo = arr
  },
  clearState(state){
    state.accountInfo = []
  }
}
export const actions = {
  initAccountInfo({commit},payload) {
    commit('initAccountInfo',payload)
  },
  
  clearState({commit}) {
    commit('clearState')
  }
}