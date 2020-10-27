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

<style lang="scss" scoped>
  .single-letter-overview ::v-deep .title {
    max-width: 100ch;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .single-letter-overview ::v-deep .title {
    position: relative;
    height: 4.6em; /* exactly three lines */

    &:after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 70%;
      height: 1.2em;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 50%
      );
    }
  }
</style>
