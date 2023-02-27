import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: { value: false },
    reducers: {
        click: (state) => {
            state.value = !state.value;
        },
        setDarkMode: (state) => {
            state.value = true;
        },
        removeDarkMode: (state) => {
            state.value = false;
        }
    }
})

export const { click, setDarkMode, removeDarkMode } = darkModeSlice.actions;

export const darkMode = (state) => state.darkMode.value

export default darkModeSlice.reducer