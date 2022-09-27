import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { User } from "@/models/User";
import JwtService from "@/utils/jwt";
import router from "@/config/router";
import VueRouter from "vue-router";

const { isNavigationFailure, NavigationFailureType } = VueRouter;

const app = initializeApp(firebaseConfig);

export default {
  namespaced: true,

  state: {
    user: new User({})
  },

  mutations: {
    setUser(state, { uid, email, accessToken }) {
      state.user = new User({ uid, email, accessToken });
    },
  },

  actions: {
    login({ commit }, { credentials, redirect }) {
      const auth = getAuth(app);

      signInWithEmailAndPassword(auth, credentials.email, credentials.password )
        .then((userCredential) => {
          commit('setUser', userCredential.user);
          JwtService.setToken(userCredential.user.accessToken);

          router.push(redirect).catch((e) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              Promise.reject(e);
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    },
    logout({ commit }) {
      const auth = getAuth(app);

      signOut(auth).then(() => {
        commit("setUser", {});
        JwtService.deleteToken();
      }).catch((error) => {
        console.log(error);
      });
    },
    create({ commit }, { email, password }) {
      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit("setUser", { password, ...userCredential.user })
          JwtService.setToken(userCredential.user.accessToken);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    },
    validateAccess({ commit }, { next, to }) {
      const auth = getAuth(app);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setUser', user);
          JwtService.setToken(user.accessToken);
          next();
        } else {
          commit('setUser', {});
          JwtService.deleteToken();
          next({ name: "login", query: { redirect: to.fullPath } });
        }
      });
    }
  }
}
