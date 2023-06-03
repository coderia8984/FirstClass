import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: { departure: "", departureID: "", arrival: "", arrivalID: "", date: "", number: "" },
});
