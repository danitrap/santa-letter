import { ILetter } from "@/interfaces/shared";
import { createStore } from "vuex";

export default createStore({
  state: {
    uuid: null as string | null,
    currentLetterId: null as string | null,
    letters: null as Record<string, ILetter> | null,
  },
  mutations: {
    SET_UUID: (state, payload) => (state.uuid = payload),
    SET_CURRENT_LETTER_ID: (state, payload) => (state.currentLetterId = payload),
    SET_LETTERS: (state, payload: ILetter[]) => {
      state.letters = payload.reduce((map, letter) => {
        return Object.assign(map, { [letter.id as unknown as string]: letter });
      }, {});
    },
  },
  getters: {
    currentLetter: (state) => (state.letters && state.letters[state.currentLetterId as string])
  },
  actions: {},
  modules: {},
});
