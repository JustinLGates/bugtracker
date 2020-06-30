<template>
  <div class="bg-dark vh100 p-absolute">
    <div class="row bg-secondary fixed-top mt-5">
      <div class="col-11 col-md-8 col-lg-6 d-flex align-items-center vh-100 m-auto">
        <div class="w-100">
          <form @submit="createNewBugReport" class="bg-dark rounded">
            <div class="bg-warning p-2 rounded-top d-flex justify-content-between">
              <h2 class="text-dark p-2 m-0">Bug Report</h2>
              <h2 class="p-2 text-dark">
                <i class="fas fa-times"></i>
              </h2>
            </div>
            <div class="row d-flex justify-content-end">
              <div class="col-lg-5 col-md-7 col-10">
                <h4 class="text-right text-secondary p-1 pr-2">
                  <small>Reported by</small>
                  <br />Justin gates
                </h4>
                <hr class="p-0 m-1 bg-warning" />
              </div>
            </div>
            <div class="m-3 p-2">
              <h4 class="text-warning p-1" for>Title:</h4>
              <input v-model="bugFormData.title" class="w-100" type="text" placeholder="Title..." />
            </div>
            <div class="mt-3 p-2 mx-3 text-warning p-1">
              <h4 class="p-1">Descripiton:</h4>
              <textarea
                v-model="bugFormData.description"
                class="w-100"
                id="w3review"
                name="w3review"
                rows="4"
                placeholder="description of the bug..."
              ></textarea>
            </div>
            <div class="d-flex justify-content-around p-3">
              <button class="btn btn-outline-success">Submit</button>
              <button class="btn btn-outline-danger">Cancel</button>
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
  height: 200vh;
}
.report {
  position: absolute;
  z-index: 3;
}
</style>