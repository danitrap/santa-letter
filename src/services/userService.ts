import { v4 as uuidv4 } from "uuid";

export const getUser = () => {
  let uuid: string | null = null;
  if (!(uuid = window.localStorage.getItem("uuid"))) {
    uuid = uuidv4();
    window.localStorage.setItem("uuid", uuid);
  }
  return uuid;
};
