<template>
  <div>
    <div class="row action bg-secondary text-light p-1">
      <div class="col-4 p-0 m-0 pl-2">title of the bug goes here</div>
      <div class="col-4 p-0 m-0 pl-2">justin lee gates 16</div>
      <div class="col-2 p-0 m-0 d-flex-center">
        <i title="closed" class="fas fa-circle bug-closed"></i>
      </div>
      <div class="col-2 p-0 m-0 d-flex-center">4/27/2020</div>
    </div>
    <div class="row">
      <div class="col-4 p-0 m-0 pl-2">title of the bug goes here</div>
      <div class="col-4 p-0 m-0 pl-2">justin lee gates 16</div>
      <div class="col-2 p-0 m-0 d-flex-center">
        <i title="open" class="fas fa-circle bug-open"></i>
      </div>
      <div class="col-2 p-0 m-0 d-flex-center">4/27/2020</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
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