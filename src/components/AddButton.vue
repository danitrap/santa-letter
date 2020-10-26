<template>
  <router-link class="button is-floating is-circular is-primary" to="add">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 15V18H16V20H19V23H21V20H24V18H21V15H19M14 18H3V8L11 13L19 8V13H21V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H14V18M19 6L11 11L3 6H19Z"
      />
    </svg>
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AddButton",
    emits: ["click"],
  });
</script>

<style lang="scss" scoped>
  .is-floating {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .is-circular {
    border-radius: 50%;
    padding: 0;
    height: 48px;
    width: 48px;
  }
</style>
