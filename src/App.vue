<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import { MUTATIONS } from "./store";
  import { useStore } from "vuex";

  import { getUser } from "./services/userService";

  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";

  export default defineComponent({
    name: "App",
    components: {
      TheHeader,
      TheFooter,
    },
    setup() {
      const store = useStore();
      store.commit(MUTATIONS.SET_UUID, getUser());
    },
  });
</script>

<style lang="scss"></style>
