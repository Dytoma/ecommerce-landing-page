import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
    name: 'addItem',
    initialState: { value: false },
    reducers: {
        add: (state) => {
            state.value = true;
        },

        remove: (state) => {

            state.value = false

        }
    }
})

export const { add, remove } = addSlice.actions;

export const itemAdded = (state) => state.addItem.value

export default addSlice.reducer