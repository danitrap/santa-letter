<template>
  <router-view></router-view>
  <section class="section">
    <div class="container">
      <Suspense>
        <template #default>
          <letters-list />
        </template>
        <template #fallback>
          <div
            class="columns"
            v-for="(n, i) in Array.from(new Array(3))"
            :key="i"
          >
            <div
              class="column is-4"
              v-for="(n, i) in Array.from(new Array(3))"
              :key="i"
            >
              <card-skeleton />
            </div>
          </div>
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
  import CardSkeleton from "../components/CardSkeleton.vue";

  export default defineComponent({
    name: "Home",
    components: {
      LettersList,
      AddButton,
      CardSkeleton,
    },
  });
</script>
