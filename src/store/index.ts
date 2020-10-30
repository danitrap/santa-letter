import { ILetter } from "@/interfaces/shared";
import { createStore } from "vuex";

export const enum MUTATIONS {
  SET_UUID = "SET_UUID",
  SET_CURRENT_LETTER_ID = "SET_CURRENT_LETTER_ID",
  SET_LETTERS_MAP = "SET_LETTERS_MAP",
}

export const enum GETTERS {
  CURRENT_LETTER = "currentLetter",
}

export default createStore({
  state: {
    uuid: null as string | null,
    currentLetterId: null as string | null,
    lettersMap: null as Record<string, ILetter> | null,
  },
  mutations: {
    [MUTATIONS.SET_UUID]: (state, payload) => (state.uuid = payload),
    [MUTATIONS.SET_CURRENT_LETTER_ID]: (state, payload) =>
      (state.currentLetterId = payload),
    [MUTATIONS.SET_LETTERS_MAP]: (state, payload: ILetter[]) => {
      state.lettersMap = payload.reduce((map, letter) => {
        return { ...map, [letter.id as string]: letter };
      }, {});
    },
  },
  getters: {
    [GETTERS.CURRENT_LETTER]: (state) =>
      state.lettersMap && state.lettersMap[state.currentLetterId as string],
  },
  actions: {},
  modules: {},
});
