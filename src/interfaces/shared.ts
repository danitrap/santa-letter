export interface ILetter {
  id?: string;
  name: string;
  text: string;
  likedBy: string[];
}

export interface ILetterSendPayload {
  name: string;
  text: string;
  uuid: string | null;
}
