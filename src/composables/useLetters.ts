import { computed, ref } from "vue";
import { ILetter } from "@/interfaces/shared";
import { chunk } from "@/helpers/chunk";

import { like, unlike, watchCollection } from "../services/letterService";

export const useLetters = async () => {
  const letters = ref<ILetter[]>([]);

  await watchCollection((newLetters) => (letters.value = newLetters));

  const lettersInColumns = computed(() => chunk<ILetter>(letters.value, 3));

  return { lettersInColumns, like, unlike };
};
