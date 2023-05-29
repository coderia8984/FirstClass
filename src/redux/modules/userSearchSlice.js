import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departure: "",
  arrival: "",
  date: "",
  number: ""
};

const searchSlice = createSlice({
  name: "searchRequire",
  initialState,
  reducers: {
    changeRequire: (state, action) => {
        state.departure = action.payload.departure;
        state.arrival = action.payload.arrival;
        state.date = action.payload.date;
        state.number = action.payload.number;   
    }
  },
});

export const {changeRequire} = searchSlice.actions;
export default searchSlice.reducer;
