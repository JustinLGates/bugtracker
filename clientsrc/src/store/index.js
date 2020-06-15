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
    showClosedBugs: false,
    bugs: [],
    notes: [],
    bugDetails: {},
    sortByNewest: true,
    sortByOpen: true,
  },
  mutations: {
    sortBugsByDate(state, data) {
      let order = state.sortByNewest ? 1 : -1;
      state.bugs = state.bugs.sort((a, b) => {
        let dateA = a.createdAt;
        let dateB = b.createdAt;
        if (dateA < dateB) {
          return order;
        }
        if (dateA > dateB) {
          return -order;
        }
      });
      state.sortByNewest = !state.sortByNewest;
    },

    sortBugsByStatus(state, data) {
      let order = state.sortByOpen ? 1 : -1;
      state.bugs = state.bugs.sort((a, b) => {
        let statusA = a.status;
        let statusB = b.status;
        if (statusA > statusB) {
          return order;
        }
        if (statusA < statusB) {
          return -order;
        }
      });
      state.sortByOpen = !state.sortByOpen;
    },
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
    setNotes(state, value) {
      state.notes = value;
    },
  },
  actions: {
    //#region bug report
    sortBugsByStatus({ commit }) {
      commit("sortBugsByStatus");
    },
    sortBugsByDate({ commit, dispatch }) {
      commit("sortBugsByDate");
    },
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
        await api.post("bugs", data);
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
    //#region notes
    async deleteNote({ commit, dispatch }, data) {
      try {
        await api.delete(`notes/${data.noteId}`);
        dispatch("getNotesByBugId", data.bugId);
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, dispatch }, rawData) {
      try {
        await api.post(`bugs/${rawData.bugId}/notes`, rawData);
        dispatch("getNotesByBugId", rawData.bugId);
      } catch (error) {
        console.error(error);
      }
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      try {
        let res = await api.get(`bugs/${id}/notes`);
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    //#region auth
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
    //#endregion
  },
});
