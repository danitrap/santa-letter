<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        <router-link :to="{name: 'home.single', params: {id: letter.id}}">
        {{ letter.text }}
        </router-link>
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

      return { liked, toggleLike };
    },
  });
</script>
