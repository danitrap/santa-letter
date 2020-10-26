<template>
  <div
    class="columns"
    v-for="(letters, index) in lettersInColumns"
    :key="index"
  >
    <div class="column is-4" v-for="letter in letters" :key="letter.id">
      <single-letter :letter="letter" :like="like" :unlike="unlike" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import { useLetters } from "../composables/useLetters";

  import SingleLetter from "./SingleLetter.vue";

  export default defineComponent({
    name: "LettersList",
    components: {
      SingleLetter,
    },
    async setup() {
      const letters = useLetters();
      return letters;
    },
  });
</script>
