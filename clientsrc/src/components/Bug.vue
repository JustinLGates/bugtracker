<template>
  <div>
    <div class="row action bg-dark text-light outline text-center">
      <div class="col-4 p-1 outline">
        <p class="m-0">login page not working</p>
      </div>
      <div class="col-4 p-1 outline">
        <p class="m-0">Justin</p>
      </div>
      <div class="col-2 p-1 outline d-flex-center">
        <i title="closed" class="fas fa-circle bug-closed"></i>
      </div>
      <div class="col-2 p-0 m-0 d-flex-center outline">
        <p class="m-0">4/7/2020</p>
      </div>
    </div>
    <div class="row action bg-dark text-light outline text-center">
      <div class="col-4 p-1 outline">
        <p class="m-0">route not working</p>
      </div>
      <div class="col-4 p-1 outline">
        <p class="m-0">Tim</p>
      </div>
      <div class="col-2 p-1 outline d-flex-center">
        <i title="open" class="fas fa-circle bug-open"></i>
      </div>
      <div class="col-2 p-0 m-0 outline d-flex-center">
        <p class="m-0">4/3/2020</p>
      </div>
    </div>
    <div class="row action bg-dark text-light outline text-center">
      <div class="col-4 p-1 outline">
        <p class="m-0">broken link in about page</p>
      </div>
      <div class="col-4 p-1 outline">
        <p class="m-0">Mark</p>
      </div>
      <div class="col-2 p-1 outline d-flex-center">
        <i title="closed" class="fas fa-circle bug-closed"></i>
      </div>
      <div class="col-2 p-0 m-0 d-flex-center outline">
        <p class="m-0">2/29/2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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