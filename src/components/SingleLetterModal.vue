<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <single-letter
        v-if="letter"
        :letter="letter"
        :like="like"
        :unlike="unlike"
        :viewMode="true"
      />
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$router.back()"
    ></button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import SingleLetter from "./SingleLetter.vue";
  import $store, { GETTERS, MUTATIONS } from "@/store";
  import { like, unlike } from "@/services/letterService";

  export default defineComponent({
    name: "SingleLetterModal",
    components: { SingleLetter },
    props: ["id"],
    setup(props) {
      $store.commit(MUTATIONS.SET_CURRENT_LETTER_ID, props.id);
      const letter = computed(() => $store.getters[GETTERS.CURRENT_LETTER]);

      return {
        letter,
        like,
        unlike,
      };
    },
    unmounted() {
      $store.commit(MUTATIONS.SET_CURRENT_LETTER_ID, null);
    },
  });
</script>

<style lang="scss" scoped></style>
