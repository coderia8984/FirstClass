import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: { departure: "", arrival: "", date: "", number: "" },
});
