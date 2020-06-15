<template>
  <div class="container-fluid">
    <div class="row p-lg-4 pt-3">
      <div class="col-12 d-flex justify-content-between bg-light p-0 rounded-top">
        <div class="p-2 m-2">
          <p>Title:</p>
          <h2 class="text-dark">{{this.bugDetails.title}}</h2>
        </div>
      </div>
      <div class="col-12 text-light rounded-tr bg-dark">
        <div class="d-flex justify-content-between">
          <div class="d-inline">
            <p class="bg-warning p-2 text-dark d-inline rounded-tl rounded-bl ml-2 shadow-">
              <b>Reported by:</b>
            </p>
            <p
              class="d-inline bg-dark p-2 rounded-tr rounded-br text-light shadow"
            >{{this.bugDetails.creatorEmail}}</p>
            <p />
          </div>

          <div v-if="!this.bugDetails.status" class="p-3 mr-2 bg-dark">
            <h5 class="d-inline p-0">Status:</h5>
            <h5 class="text-success d-inline pl-2">Open</h5>
            <hr class="bg-secondary shadow m-0" />
            <small>{{this.bugDetails.createdAt}}</small>
          </div>
          <div v-else class="p-3 mr-2 bg-dark">
            <h5 class="d-inline p-0">Status:</h5>
            <h5 class="text-danger d-inline pl-2">Closed</h5>
            <hr class="bg-secondary shadow m-0" />
            <small>{{this.bugDetails.updatedAt}}</small>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="col-12 text-light bg-dark p-1">
        <div class>
          <h5>
            <b class="text-warning">Desctiption:</b>
          </h5>

          <p class="px-1 m-0">{{this.bugDetails.description}}</p>
          <div class="d-flex justify-content-end p-o m-0">
            <button @click="closeBug" class="btn btn-danger shadow text-light mr-4 mt-2">Close</button>
          </div>
        </div>
      </div>

      <div class="col-12 bg-dark">
        <p class="text-warning p-2 m-0">
          <b>Notes:</b>
        </p>
        <div class="row bg-warning text-dark rounded-top">
          <div class="col-3 p-0">
            <h6 class="text-center p-1 m-0">
              <b>Name</b>
            </h6>
          </div>

          <div class="col-7 d-flex-center p-0">
            <h6 class="d-inline p-1 m-0">
              <b>Details</b>
            </h6>
          </div>
          <div class="col-2 text-center p-0">
            <h6 class="d-inline p-1 m-0">
              <b>Delete</b>
            </h6>
          </div>
        </div>
        <Note />
        <div
          class="row action bg-dark text-light text-center d-flex justify-content-center mx-1 p-0 p-3"
        >
          <div class="col-10 p-0 m-0 d-flex-center">
            <input
              type="text"
              class="w-100 m-2 p-1"
              placeholder="Add note of what you know about the issue...."
            />
          </div>
          <div class="col-2 p-0 m-0 d-flex-center">
            <button @click="addComment" class="btn btn-success text-light">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Note from "../components/Note";
export default {
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("getBugDetails", id);
  },
  computed: {
    bugDetails() {
      return this.$store.state.bugDetails;
    }
  },
  components: {
    Note
  },
  methods: {
    closeBug() {
      let id = this.$route.params.id;
      this.$store.dispatch("closeBug", id);
    },
    addComment() {},
    deleteComment() {}
  }
};
</script>

<style>
.rounded-tr {
  border-top-right-radius: 8px;
}
.rounded-tl {
  border-top-left-radius: 8px;
}
.rounded-bl {
  border-bottom-left-radius: 8px;
}
.rounded-br {
  border-bottom-right-radius: 8px;
}
</style>