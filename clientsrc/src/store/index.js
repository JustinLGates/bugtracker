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
    showClosedBugs: true,
    bugs: [],
    bugDetails: {},
  },
  mutations: {
    setBugDetails(state, data) {
      state.bugDetails = data;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    },
    isShowingBugForm(state, value) {
      state.isShowingBugForm = !state.isShowingBugForm;
    },
    setShowClosedBugs(state, value) {
      state.showClosedBugs = value;
    },
    setProfile(state, profile) {
      state.profile = profile;
      console.log("profile set to " + state.profile);
    },
  },
  actions: {
    //#region bug report
    async getAllBugs({ commit, dispatch }) {
      try {
        let res = await api.get("bugs");
        console.log(res.data);

        commit("setBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createNewBugReport({ commit, dispatch }, data) {
      try {
        let res = await api.post("bugs", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBugDetails({ commit, dispatch }, id) {
      try {
        let res = await api.get(`bugs/${id}`);
        commit("setBugDetails", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit, dispatch }, id) {
      try {
        let res = await api.delete(`bugs/${id}`);
        dispatch("getBugDetails", id);
      } catch (error) {
        console.error(error);
      }
    },
    toggleBugForm({ commit, dispatch }) {
      commit("isShowingBugForm");
    },
    setShowClosedBugs({ commit, dispatch }, value) {
      commit("setShowClosedBugs", value);
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
