import { computed, ref } from "vue";
import { ILetter } from "@/interfaces/ILetter.interface";
import { chunk } from "@/helpers/chunk";
import * as firebase from "firebase";
import $store from "../store";
import { db } from "../firebaseDatabase";

const letters = ref<ILetter[]>([]);

const like = (letterId: string) => {
  const letterRef = db.collection("letters").doc(letterId);

  letterRef.update({
    likedBy: firebase.firestore.FieldValue.arrayUnion($store.state.uuid),
  });
};

const unlike = (letterId: string) => {
  const letterRef = db.collection("letters").doc(letterId);

  letterRef.update({
    likedBy: firebase.firestore.FieldValue.arrayRemove($store.state.uuid),
  });
};

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
