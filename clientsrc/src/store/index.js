import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    profile: {},
    isShowingBugForm: false,
  },
  mutations: {
    isShowingBugForm(state, value) {
      state.isShowingBugForm = !state.isShowingBugForm;
    },
    setProfile(state, profile) {
      state.profile = profile;
      console.log("profile set to " + state.profile);
    },
  },
  actions: {
    //#region bug report
    async createNewBugReport({ commit, dispatch }, data) {
      try {
        let res = await api.post("bugs", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
    toggleBugForm({ commit, dispatch }) {
      commit("isShowingBugForm");
    },
    //#endregion

    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");

        commit("setProfile", res.data);
      } catch (error) {
        console.log("error getting profile");
        console.error(error);
      }
    },
  },
});
