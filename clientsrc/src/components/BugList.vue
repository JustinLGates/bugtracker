<template>
  <div class="row p-1 p-lg-4 pt-3">
    <div class="col-12 col-lg-12 text-dark bg-light rounded">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <div class="p-2 m-2">
            <h2 class="text-dark">Reported Bugs</h2>
          </div>
          <div class="p-2 m-2">
            <p class="d-inline pr-1">hide closed</p>
            <input type="checkbox" id="hideClosed" name="hideClosed" />
          </div>
        </div>
      </div>

      <div class="row bg-warning text-dark">
        <div class="col-4 p-1">
          <h5 class="text-center">Title</h5>
        </div>
        <div class="col-4 p-1">
          <h5 class="text-center">Reported By</h5>
        </div>
        <div class="col-2 d-flex-center p-1">
          <h5 class="d-inline pr-1">Status</h5>
          <i class="fas fa-sort action"></i>
        </div>
        <div class="col-2 d-flex-center p-1">
          <h5 class="d-inline pr-1">Date</h5>
          <i class="fas fa-sort action"></i>
        </div>
      </div>
      <Bug />
      <div class="row">
        <div class="col-12 text-center p-0 m-0">
          <p class="p-2 m-0">
            <b>
              <em>Thats all of the bugs right now</em>
            </b>
          </p>
        </div>
      </div>
    </div>

    <bugReport class="mt-5" />
  </div>
</template>

<script>
import Bug from "../components/Bug";
import bugReport from "../Pages/BugDetails";
export default {
  components: {
    bugReport,
    Bug
  }
};
</script>

<style>
</style>