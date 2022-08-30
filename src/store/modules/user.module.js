import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { User } from "@/models/User";

export default {
  namespaced: true,

  state: {
    user: new User({})
  },

  mutations: {
    setLogin(state, { email, password }) {
      state.user = new User({ email, password });
      console.log(state);
    },
    setUser(state, { uid, email, accessToken }) {
      state.user = new User({ uid, email, accessToken });
    }
  },

  actions: {
    login({ commit }, payload) {
      commit('setLogin', payload);
    },
    create({ commit }, { email, password }) {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit("setUser", { password, ...userCredential.user })
          console.log(userCredential.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    }
  }
}
