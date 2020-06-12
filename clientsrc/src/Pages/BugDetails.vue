<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <div>
          <h2>Bug title from user</h2>
          <h4>Reported by: name</h4>
        </div>
        <div>
          <p>Status</p>
          <h3 class="text-success">Open</h3>
        </div>
      </div>
      <div class="col-12">
        <p>bug details</p>
        <button class="btn btn-danger">Close</button>
      </div>

      <div class="col-12">
        <h3>Notes</h3>
        <div class="row">
          <div class="col-3">
            <h5>Name</h5>
          </div>

          <div class="col-6">
            <h5>Message</h5>
          </div>

          <div class="col-3">
            <h5>Delete</h5>
          </div>
          <div></div>
        </div>
        <div class="row">
          <!-- messages here -->
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-success text-light">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>