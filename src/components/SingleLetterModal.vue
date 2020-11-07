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
      @click="goBack"
    ></button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  import SingleLetter from "./SingleLetter.vue";
  import { GETTERS, MUTATIONS } from "@/store";
  import { like, unlike } from "@/services/letterService";

  export default defineComponent({
    name: "SingleLetterModal",
    components: { SingleLetter },
    props: ["id"],
    setup(props) {
      const store = useStore();
      const router = useRouter();
      store.commit(MUTATIONS.SET_CURRENT_LETTER_ID, props.id);
      const letter = computed(() => store.getters[GETTERS.CURRENT_LETTER]);

      const goBack = () => {
        store.commit(MUTATIONS.SET_CURRENT_LETTER_ID, null);
        router.back();
      };

      return {
        letter,
        like,
        unlike,
        goBack,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
