<template>
  <base-header />
  <router-view />
  <base-footer />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import $store from "./store";
  import { getUser } from "./services/userService";

  import BaseHeader from "./components/BaseHeader.vue";
  import BaseFooter from "./components/BaseFooter.vue";

  export default defineComponent({
    name: "App",
    components: {
      BaseHeader,
      BaseFooter,
    },
    created() {
      $store.commit("SET_UUID", getUser());
    },
  });
</script>

<style lang="scss"></style>
