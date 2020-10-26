import * as firebase from "firebase";
import { db } from "../firebaseDatabase";
import $store from "../store";

import { ILetter, ILetterSendPayload } from "../interfaces/shared";

export const watchCollection = (effect: (letters: ILetter[]) => void) => {
  return new Promise((resolve) => {
    let firstRun = true;

    db.collection("letters")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        effect(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as ILetter))
        );

        if (firstRun) {
          firstRun = false;
          resolve();
        }
      });
  });
};

export const like = (letterId: string) => {
  const letterRef = db.collection("letters").doc(letterId);

  letterRef.update({
    likedBy: firebase.firestore.FieldValue.arrayUnion($store.state.uuid),
  });
};

export const unlike = (letterId: string) => {
  const letterRef = db.collection("letters").doc(letterId);

  letterRef.update({
    likedBy: firebase.firestore.FieldValue.arrayRemove($store.state.uuid),
  });
};

export const send = ({ uuid, ...letter }: ILetterSendPayload) => {
  return db.collection("letters").add({
    ...letter,
    likedBy: [uuid],
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
