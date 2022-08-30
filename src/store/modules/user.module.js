import { User } from "@/models/User";

export default {
  namespaced: true,

  state: {
    user: new User({})
  },

  mutations: {
    setLogin(state, { username, password }) {
      state.user = new User({ username, password });
      console.log(state);
    }
  },

  actions: {
    login({ commit }, payload) {
      commit('setLogin', payload);
    }
  }
}
