<template>
  <div class="container-fluid">
    <BugList />
  </div>
</template>

<script>
import BugList from "../components/BugList";
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    BugList
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
