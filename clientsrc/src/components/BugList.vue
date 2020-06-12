<template>
  <div class="row text-light p-3 pt-4">
    <div class="col-12 col-lg-12 m-auto bg-dark">
      <div class="d-flex justify-content-between align-items-center">
        <div class="p-1 m-1">
          <h2 class>Current Bugs</h2>
        </div>
        <div class="p-1 m-1 m">
          <p class="d-inline pr-2">hide closed</p>
          <input type="checkbox" id="hideClosed" name="hideClosed" />
        </div>
      </div>
    </div>
    <div class="bug-Header bg-dark col-12">
      <div class="row table-outline">
        <div class="col-4 p-0 m-0 pl-2">
          <h6>Title</h6>
        </div>
        <div class="col-4 p-0 m-0 pl-2">
          <h6>Reported By</h6>
        </div>
        <div class="col-2 p-0 m-0 d-flex-center">
          <h6 class="d-inline p-0 m-0 mr-1">Status</h6>
          <i class="fas fa-sort"></i>
        </div>
        <div class="col-2 p-0 m-0 d-flex-center">
          <h6 class="d-inline p-0 m-0 mr-1">Last Modified</h6>
          <i class="fas fa-sort"></i>
        </div>
      </div>
      <Bug />
    </div>
  </div>
</template>

<script>
import Bug from "../components/Bug";
export default {
  components: {
    Bug
  }
};
</script>

<style>
</style>