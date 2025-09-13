import { createStore } from "vuex"
import axios from "axios"
import router from "@/router" // yönlendirme için import

const store = createStore({
  state: {
    token: localStorage.getItem("token") || "",
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    isLoggedIn: !!localStorage.getItem("token"),
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      state.isLoggedIn = true
      localStorage.setItem("token", token)
    },
    setUserData(state, userData) {
      state.userData = userData
      localStorage.setItem("userData", JSON.stringify(userData))
    },
    clearAuth(state) {
      state.token = ""
      state.userData = null
      state.isLoggedIn = false
      localStorage.removeItem("token")
      localStorage.removeItem("userData")
    }
  },

  actions: {
    async login({ commit }, credentials) {
      try {
        // 1. Token al
        const response = await axios.post("login", credentials)
        const token = response.data.data.token
        commit("setToken", token)

        // 2. Kullanıcı bilgilerini al
        const userRes = await axios.post(token + "/getLoggedInUserInfo")
        commit("setUserData", userRes.data.data)

        // 3. Başarılıysa portal'a yönlendir
        //  await router.push("/")
        window.location.href = "/portal/"
        // await router.push("/portal/")
      } catch (error) {
        // commit("clearAuth")
        throw error // Hata dışarıda yakalanabilir
      }
    },

    logout({ commit }) {
      commit("clearAuth")
    //   router.push("/")
      window.location.href = "/portal/"
    //   router.push("/portal/")
    }
  },

  getters: {
    getToken: (state) => state.token,
    getUserData: (state) => state.userData,
    isLoggedIn: (state) => state.isLoggedIn,
  },
})

export default store
