<template>
  <div id="app">
    <navbar />
    <BugReport v-if="isShowingBugForm" />
    <router-view />
  </div>
</template>

<script>
import BugReport from "./components/BugReport.vue";
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    BugReport,
    Navbar
  },
  computed: {
    isShowingBugForm() {
      return this.$store.state.isShowingBugForm;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
<style>
.action {
  cursor: pointer;
}
</style>