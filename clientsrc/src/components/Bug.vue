<template>
  <div v-if="this.hideClosed(bug.status)">
    <div
      @click="routeToBugDetails(bug.id)"
      class="row action bg-dark text-light text-center d-flex justify-content-center mx-1"
    >
      <div class="col-6 p-0">
        <p class="p-1 m-0 br">{{bug.title}}</p>
      </div>
      <div class="col-3 p-0 d-flex-center">
        <div v-if="bug.status">
          <i title="closed" class="fas fa-circle bug-closed p-1"></i>
          <p class="d-inline p-1 m-0">Closed</p>
        </div>
        <div v-else>
          <i title="open" class="fas fa-circle bug-open p-1"></i>
          <p class="d-inline p-1 m-0">Open</p>
        </div>
      </div>
      <div class="col-3 p-0 m-0 d-flex-center bl">
        <p class="m-0">{{bug.updatedAt}}</p>
      </div>
      <div class="col-12 p-0">
        <hr class="bg-warning m-0 w-100" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bug"],
  computed: {
    showClosedBugs() {
      return this.$store.state.showClosedBugs;
    }
  },
  methods: {
    routeToBugDetails() {
      this.$router.push({ path: `/bugDetails/${this.bug.id}` });
    },

    hideClosed(status) {
      if (!this.showClosedBugs) {
        return true;
      } else if (!status) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
.br {
  border-right: solid 1px chocolate;
}
.bl {
  border-left: solid 1px chocolate;
}
.action {
  cursor: pointer;
}
.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outline {
  outline: solid 1px rgb(20, 20, 20);
}
.outline2 {
  outline: solid 1px rgb(20, 20, 20);
}
.bug-closed {
  color: rgb(185, 66, 66);
  text-shadow: 0px 0px 5px rgba(207, 57, 57, 0.5);
}
.bug-open {
  color: rgb(87, 187, 95);
  text-shadow: 0px 0px 5px rgba(0, 255, 0, 0.5);
}
</style>
<style scoped>
</style>