<template>
  <router-view></router-view>
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
  <add-button />
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import $store from "../store";

  import LettersList from "../components/LettersList.vue";
  import AddButton from "../components/AddButton.vue";

  export default defineComponent({
    name: "Home",
    components: {
      LettersList,
      AddButton,
    },
  });
</script>
