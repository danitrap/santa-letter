<template>
  <div
    class="columns"
    v-for="(letters, index) in lettersInColumns"
    :key="index"
  >
    <div
      class="column is-4 single-letter-overview"
      v-for="letter in letters"
      :key="letter.id"
    >
      <single-letter :letter="letter" :like="like" :unlike="unlike" />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";

  import { chunk } from "@/helpers/chunk";
  import { like, unlike, watchCollection } from "../services/letterService";
  import $store, { MUTATIONS } from "@/store";
  import { ILetter } from "@/interfaces/shared";

  import SingleLetter from "./SingleLetter.vue";

  export default defineComponent({
    name: "LettersList",
    components: {
      SingleLetter,
    },
    async setup() {
      const letters = ref<ILetter[]>([]);

      await watchCollection((newLetters) => {
        letters.value = newLetters;
        $store.commit(MUTATIONS.SET_LETTERS_MAP, newLetters);
      });

      const lettersInColumns = computed(() => chunk<ILetter>(letters.value, 3));

      return { lettersInColumns, like, unlike };
    },
  });
</script>

<style lang="scss" scoped>
  .single-letter-overview ::v-deep(.title) {
    overflow: hidden;
    position: relative;
    height: 4.4em; /* exactly three lines */

    &:after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 90%;
      height: 1.2em;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 50%
      );
    }
  }
</style>
