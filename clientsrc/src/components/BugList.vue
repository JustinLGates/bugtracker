<template>
  <div class="row p-lg-4 pt-3">
    <div class="col-12 col-lg-11 m-auto text-dark bg-light rounded">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center p-1">
          <div class="py-2">
            <h2 class="text-dark p-2">Reported Bugs</h2>
          </div>
          <div class="py-2 pt-5 p-2">
            <p class="d-inline p-1">Hide closed</p>

            <form @change.prevent="setShowClosedBugs">
              <input class="d-inline" type="checkbox" name="box" id="box" />
            </form>
          </div>
        </div>
      </div>

      <div class="row bg-warning text-dark mx-1 rounded-top">
        <div class="col-6 p-1">
          <h6 class="text-center p-1 m-0">
            <b>Title</b>
          </h6>
        </div>

        <div class="col-3 d-flex-center p-1">
          <h6 class="d-inline p-1 m-0">
            <b>
              Status
              <i @click="sortByStatus" class="fas fa-sort action"></i>
            </b>
          </h6>
        </div>
        <div class="col-3 d-flex-center p-1">
          <h6 class="d-inline p-1 m-0">
            <b>
              Date
              <i @click="sortBydate" class="fas fa-sort action"></i>
            </b>
          </h6>
        </div>
      </div>
      <Bug v-for="(bug) in bugs" :key="bug.id" :bug="bug" />
      <!-- v-forbug in bugs :key="bug.id" -->
      <div class="row rounded-bottom text-light bg-dark p-1 mx-1">
        <div class="col-12 text-center p-0 m-0">
          <h6 class="p-1 m-0">
            <b>
              <em>Thats all of the bugs right now</em>
            </b>
          </h6>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Bug from "../components/Bug";
import bugReport from "../Pages/BugDetails";
export default {
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    setShowClosedBugs() {
      let value = event.target.checked;

      this.$store.dispatch("setShowClosedBugs", value);
    },
    sortByStatus() {},
    sortBydate() {}
  },
  components: {
    bugReport,
    Bug
  }
};
</script>

<style>
</style>