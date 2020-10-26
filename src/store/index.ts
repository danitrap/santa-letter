import { ILetter } from "@/interfaces/shared";
import { createStore } from "vuex";

export default createStore({
  state: {
    uuid: null as string | null,
  },
  mutations: {
    SET_UUID: (state, payload) => (state.uuid = payload),
  },
  actions: {},
  modules: {},
});
