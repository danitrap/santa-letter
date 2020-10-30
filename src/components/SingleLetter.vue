<template>
  <div class="card" :class="{ 'is-overview': !viewMode }">
    <div class="card-content">
      <p class="title is-handwritten">
        <router-link
          :to="{ name: 'home.single', params: { id: letter.id } }"
          v-if="!viewMode"
        >
          {{ letter.text }}
        </router-link>
        <template v-else>
          {{ letter.text }}
        </template>
      </p>
      <p class="subtitle">
        {{ letter.name }}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <like-button :liked="liked" @click="toggleLike">{{
            letter.likedBy.length
          }}</like-button>
        </span>
      </p>
      <p class="card-footer-item" :title="fullTimestamp">
        {{ date }}
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
  import { ILetter } from "@/interfaces/shared";
  import { computed, defineComponent } from "vue";
  import $store from "../store";
  import LikeButton from "./LikeButton.vue";

  export default defineComponent({
    name: "SingleLetter",
    components: { LikeButton },
    props: {
      letter: {
        type: Object,
        required: true,
      },
      like: {
        type: Function,
        required: true,
      },
      unlike: {
        type: Function,
        required: true,
      },
      viewMode: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const liked = computed(
        () =>
          $store.state.uuid &&
          (props.letter as ILetter).likedBy.includes($store.state.uuid)
      );

      const toggleLike = () => {
        liked.value
          ? props.unlike(props.letter.id)
          : props.like(props.letter.id);
      };

      const createdAtMillis = computed(
        () => props.letter.createdAt.seconds * 1000
      );

      const date = computed(() =>
        new Date(createdAtMillis.value).toLocaleDateString()
      );

      const fullTimestamp = computed(() =>
        new Date(createdAtMillis.value).toLocaleString()
      );

      return { liked, toggleLike, date, fullTimestamp };
    },
  });
</script>

<style lang="scss" scoped>
  .is-overview .title {
    overflow: hidden;
    position: relative;
    height: 4.4em; /* exactly three lines */

    &:after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 90%;
      height: 1.2em;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 50%
      );
    }
  }
</style>
