<template>
  <section class="section">
    <div class="container">
      <Suspense>
        <template #default>
          <letters-list />
        </template>
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </section>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import $store from "../store";

  import LettersList from "../components/LettersList.vue";

  export default defineComponent({
    name: "Home",
    components: {
      LettersList,
    },
    setup() {
      return {
        uuid: computed(() => $store.state.uuid),
      };
    },
  });
</script>
