<template>
  <div class="container-fluid">
    <div class="row p-1 pt-3">
      <div class="col-12 d-flex justify-content-between bg-light p-0 rounded-top">
        <div class="p-1 pt-3 m-2">
          <p class="text-dark p-0 m-0">Title:</p>
          <h2 class="text-dark p-0 m-0">{{this.bugDetails.title}}</h2>
        </div>
      </div>
      <div class="col-12 p-0 p-absolute m-0 p-0 d-flex justify-content-end glass">
        <div v-if="!this.bugDetails.status" class="p-3 mr-2">
          <h5 class="d-inline p-0">Status:</h5>
          <h5 class="text-success d-inline pl-2">Open</h5>
          <hr class="bg-dark shadow m-0" />
        </div>
        <div v-else class="p-3 m-0 p-0">
          <h5 class="d-inline p-0">Status:</h5>
          <h5 class="text-danger d-inline pl-2">Closed</h5>
          <hr class="bg-dark shadow m-0" />
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
        </div>
      </div>

      <div class="col-12 text-light bg-dark p-1">
        <div class>
          <h5>
            <b class="text-warning">Desctiption:</b>
          </h5>

          <p class="px-1 m-0">{{this.bugDetails.description}}</p>
          <div v-if="this.profile.email == this.bugDetails.creatorEmail ">
            <form @submit.prevent="editBug">
              <input
                class="p-1 rounded"
                v-model="editBugForm.title"
                placeholder="edit title here...."
              />
              <textarea
                placeholder="edit description here..."
                v-model="editBugForm.description"
                class="rounded p-1 mt-2 w-90 d-block"
                type="text"
                rows="5"
              />
              <button
                title="Save your changes"
                type="submit"
                class="btn btn-outline-success shadow mt-2"
              >Save</button>
            </form>
          </div>
          <div class="d-flex justify-content-end p-o m-0">
            <button
              @click="closeBug"
              class="btn btn-danger shadow text-light mr-4 mt-2"
              title="this action cannot be undone this closes the bug"
            >Close</button>
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
              <b>Note</b>
            </h6>
          </div>

          <div class="col-2 text-center p-0">
            <h6 class="d-inline p-1 m-0">
              <b>Delete</b>
            </h6>
          </div>
        </div>
        <Note v-for="(note, index) in notes" :key="index" :note="note" />
        <form @submit.prevent="addNote">
          <div
            class="row action bg-dark text-light text-center d-flex justify-content-center mx-1 p-0 p-3"
          >
            <div class="col-10 p-0 m-0 d-flex-center">
              <input
                v-model="newNoteForm.description"
                type="text"
                class="w-100 m-2 p-1"
                placeholder="Add note of what you know about the issue...."
              />
            </div>
            <div class="col-2 p-0 m-0 d-flex-center">
              <button type="submit" class="btn btn-success text-light">Add</button>
            </div>
          </div>
        </form>
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
    this.$store.dispatch("getNotesByBugId", id);
  },

  data() {
    return {
      editBugForm: {},
      newNoteForm: {}
    };
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
    bugDetails() {
      return this.$store.state.bugDetails;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    Note
  },
  methods: {
    closeBug() {
      let deleteIt = window.confirm("are you sure ");
      if (deleteIt) {
        let id = this.$route.params.id;
        this.$store.dispatch("closeBug", id);
      }
    },
    addNote() {
      let id = this.bugDetails.id;
      let data = {
        description: this.newNoteForm.description,
        bugId: id,
        creatorEmail: this.$auth.user.email
      };
      this.$store.dispatch("addNote", data);
    },
    editBug() {
      let bugid = this.bugDetails.id;
      let bugTitle = this.editBugForm.title;
      let bugDescription = this.editBugForm.description;
      let data = {
        bugId: bugid,
        description: bugDescription,
        title: bugTitle
      };
      this.$store.dispatch("editBug", data);
    }
  }
};
</script>

<style>
.glass {
  background: rgba(255, 255, 255, 0);
}
.p-absolute {
  position: absolute;
}
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
.w-90 {
  width: 90%;
}
</style>