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
  import { useStore } from "vuex";

  import { chunk } from "@/helpers/chunk";
  import { like, unlike, watchCollection } from "../services/letterService";
  import { MUTATIONS } from "@/store";
  import { ILetter } from "@/interfaces/shared";

  import SingleLetter from "./SingleLetter.vue";

  export default defineComponent({
    name: "LettersList",
    components: {
      SingleLetter,
    },
    async setup() {
      const letters = ref<ILetter[]>([]);
      const store = useStore();

      await watchCollection((newLetters) => {
        letters.value = newLetters;
        store.commit(MUTATIONS.SET_LETTERS_MAP, newLetters);
      });

      const lettersInColumns = computed(() => chunk<ILetter>(letters.value, 3));

      return { lettersInColumns, like, unlike };
    },
  });
</script>

<style lang="scss" scoped></style>
