import * as firebase from "firebase";
import { db } from "../firebaseDatabase";
import $store from "../store";

import { ILetterSendPayload } from "../interfaces/shared";

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
  });
};
