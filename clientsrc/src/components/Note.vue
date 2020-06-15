<template>
  <div class="row bg-dark text-light text-center d-flex justify-content-center p-0">
    <div class="col-3 p-0 m-0 d-flex-center">
      <p class="p-0 m-0">{{note.creatorEmail}}</p>
    </div>
    <div class="col-7 p-0 m-0 d-flex-center bl">
      <p class="d-inline p-1 m-0">{{note.body}}</p>
    </div>
    <div class="col-2 p-0 m-0 d-flex-center bl">
      <i @click="deleteComment" class="fa fa-trash action"></i>
    </div>
    <div class="col-12 p-0">
      <hr class="bg-warning m-0 w-100" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["note"]
};
</script>

<style>
</style>