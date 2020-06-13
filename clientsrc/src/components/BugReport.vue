<template>
  <div class="container-fluid bg-dark vh100 p-absolute">
    <div class="row">
      <div
        class="col-12 col-md-8 col-lg-6 m-auto d-flex justify-content-center align-items-center vh-100"
      >
        <div class="d-flex flex-column bg-secondary bug-report-card p-2 rounded shadow w-100">
          <form @submit="createNewBugReport">
            <div>
              <h3 class="text-warning p-1">Bug Report</h3>
            </div>
            <div class="p-1 m-1">
              <input v-model="bugFormData.title" class="w-100" type="text" placeholder="Title..." />
            </div>
            <div>
              <textarea
                v-model="bugFormData.description"
                class="w-100"
                id="w3review"
                name="w3review"
                rows="4"
                placeholder="description of the bug..."
              ></textarea>
            </div>
            <div class="d-flex justify-content-around">
              <button class="btn btn-success text-light">Submit</button>
              <button class="btn btn-dark text-light">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bugFormData: {}
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    createNewBugReport() {
      let data = {
        title: this.bugFormData.title,
        description: this.bugFormData.description,
        creatorEmail: this.$auth.user.email
      };
      this.$store.dispatch("createNewBugReport", data);
    }
  }
};
</script>

<style>
.p-absolute {
  position: absolute;
}
.vh100 {
  z-index: 3;
  height: 100vh;
}
.report {
  position: absolute;
  z-index: 3;
}
</style>