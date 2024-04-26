import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data.json";

const initialState = {
	value: data,
}; 
    

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		
	},
});
export const { increment, decrement } = dataSlice.actions;

export default dataSlice.reducer;
