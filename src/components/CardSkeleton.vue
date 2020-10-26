<template>
  <div class="card">
    <div class="card-content">
      <div class="skeleton skeleton--title"></div>
      <div class="skeleton skeleton--title"></div>
      <div class="skeleton skeleton--title"></div>
      <div class="skeleton skeleton--subtitle"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardSkeleton",
  });
</script>

<style lang="scss" scoped>
  .skeleton {
    width: 100%;
    background: #ccc;
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    &--title {
      height: 16px;
      margin-bottom: 16px;
    }

    &--subtitle {
      height: 12px;
      margin-bottom: 12px;
      width: 50%;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: 150px;
      background: linear-gradient(
        to right,
        transparent 0%,
        #e8e8e8 50%,
        transparent 100%
      );
      animation: load 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
</style>
