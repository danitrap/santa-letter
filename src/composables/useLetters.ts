import { computed, ref } from "vue";
import { ILetter } from "@/interfaces/shared";
import { chunk } from "@/helpers/chunk";
import { db } from "../firebaseDatabase";

import { like, unlike } from "../services/letterService";

const letters = ref<ILetter[]>([]);

export const useLetters = async () => {
  db.collection("letters").onSnapshot((snapshot) => {
    const newLetters = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as ILetter)
    );
    letters.value = newLetters;
  });

  const lettersInColumns = computed(() => chunk<ILetter>(letters.value, 3));

  return { lettersInColumns, like, unlike };
};
