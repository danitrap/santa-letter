<template>
  <card-modal>
    <add-form />
  </card-modal>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CardModal from "./CardModal.vue";
  import AddForm from "./AddForm.vue";

  export default defineComponent({
    name: "AddModal",
    components: { CardModal, AddForm },
  });
</script>
