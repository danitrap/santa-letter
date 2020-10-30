<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nome"
          v-model="form.name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Lettera</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Caro Babbo Natale, "
          v-model="form.text"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <router-link to="/" class="button is-light">
          Torna indietro
        </router-link>
      </p>
      <p class="control">
        <button
          class="button is-primary"
          :class="{ 'is-loading': loading }"
          :disabled="!valid"
          type="submit"
        >
          Invia
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive, ref } from "vue";
  import $store from "../store";
  import { send } from "../services/letterService";
  import router from "@/router";

  export default defineComponent({
    name: "AddForm",
    setup() {
      const form = reactive({
        name: "",
        text: "",
        uuid: $store.state.uuid,
      });

      const valid = computed(() => form.name && form.text);

      const loading = ref(false);

      const submit = async () => {
        loading.value = true;

        try {
          await send(form);
        } catch (error) {
          console.error(error);
        } finally {
          loading.value = false;
          router.push("/");
        }
      };

      return {
        form,
        valid,
        loading,
        submit,
      };
    },
  });
</script>

<style lang="scss" scoped>
  button svg {
    margin-left: 3px;
  }
</style>
