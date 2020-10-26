<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <add-form />
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import AddForm from "./AddForm.vue";

  export default defineComponent({
    name: "AddModal",
    components: { AddForm },
  });
</script>

<style lang="scss" scoped></style>
