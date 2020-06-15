<template>
  <div class="row bg-dark text-light text-center d-flex justify-content-center p-0">
    <div class="col-5 col-lg-3 p-0 m-0 d-flex-center">
      <p class="p-0 m-0">{{note.creatorEmail}}</p>
    </div>
    <div class="col-5 col-lg-7 p-0 m-0 d-flex-center bl">
      <p class="d-inline p-1 m-0">{{note.description}}</p>
    </div>
    <div v-if="note.creatorEmail == this.userEmail " class="col-2 p-0 m-0 d-flex-center bl">
      <i @click="deleteNote" class="fa fa-trash action"></i>
    </div>
    <div v-else class="col-2 p-0 m-0 d-flex-center bl">
      <i class="fa fa-minus"></i>
    </div>
    <div class="col-12 p-0">
      <hr class="bg-warning m-0 w-100" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["note"],
  computed: {
    userEmail() {
      return this.$store.state.profile.email;
    }
  },
  methods: {
    deleteNote() {
      let data = {
        noteId: this.note.id,
        bugId: this.note.bugId
      };
      this.$store.dispatch("deleteNote", data);
    }
  }
};
</script>

<style>
</style>