<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between bg-light p-0 py-1 rounded-top">
        <div class>
          <h3 class="text-dark p-2">login not working</h3>
        </div>
        <div class="d-flex justify-content-center align-items-center p-2">
          <div>
            <p class="d-inline pr-1">Status:</p>
          </div>
          <div>
            <h4 class="text-success d-inline p-2">Open</h4>
          </div>
        </div>
      </div>
      <div class="col-12 p-0 bg-dark text-light rounded-tr">
        <div class="shadow-lg d-inline">
          <p class="bg-warning p-2 text-dark d-inline rounded-tl rounded-bl ml-2">
            <b>Reported by:</b>
          </p>
          <p class="d-inline bg-dark p-2 rounded-tr rounded-br text-light">Justin</p>
          <p />
        </div>
        <div class="p-1 m-1">
          <p>
            <b class="text-warning">Desctiption:</b>
          </p>
          <p
            class="px-2"
          >bug details Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias illo accusantium aut commodi. Beatae quas, quam doloremque nulla officiis provident dolor nemo impedit id. Distinctio eius nostrum debitis voluptates minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam praesentium sunt assumenda rerum incidunt quos, aliquam quae corporis sequi harum nam! Est autem delectus error sit placeat quas voluptate! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis excepturi voluptate deleniti distinctio minus omnis accusantium culpa! Architecto nesciunt minus rem. Qui nobis cupiditate explicabo ut dolorem dicta voluptas pariatur.</p>
          <div class="d-flex justify-content-end p-o m-0">
            <button class="btn btn-danger shadow text-light">Close</button>
          </div>
          <hr class="bg-warning" />
        </div>
      </div>

      <div class="col-12 bg-dark">
        <p class="text-warning p-3 m-0">
          <b>Notes:</b>
        </p>
        <div class="row text-light bg-dark">
          <div class="col-3">
            <p class="p-2 m-0 text-center">
              <b>Name</b>
            </p>
          </div>

          <div class="col-6">
            <p class="text-center p-0 m-0">
              <b>note</b>
            </p>
          </div>

          <div class="col-3 d-flex justify-content-center text-center">
            <p class="p-0 m-0 d-inline">
              <b>Delete</b>
            </p>
          </div>
          <div></div>
        </div>
        <!-- messages here -->
        <div class="row bg-dark text-light outline">
          <div class="col-3 p-1 outline d-flex align-items-center justify-content-center">
            <p class="p-1 m-0">Justin</p>
          </div>

          <div class="col-6 outline d-flex align-items-center justify-content-center">
            <p class="p-0 m-0">I made some changes to the .env file and it didnt seem to fix it...</p>
          </div>

          <div class="col-3 d-flex justify-content-center outline d-flex align-items-center">
            <p class="p-0 m-0 d-inline">
              <i class="far fa-trash-alt action text-light"></i>
            </p>
          </div>
        </div>
        <!-- end messages -->
      </div>

      <div class="col-12 pt-3">
        <div class="row">
          <div class="col-lg-5 col-12 col-md-8 bg-dark m-auto">
            <div class="text-center">
              <input class="p-1 w-100 m-1" type="text" placeholder="add notes..." />
              <button class="btn btn-success text-light m-1">Add</button>
            </div>
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