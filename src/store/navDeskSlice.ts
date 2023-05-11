import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavDeskProps = {
  isOpened: boolean,
}

const initialState: NavDeskProps = {
  isOpened: false
}

const navDeskSlice = createSlice({
  name: 'navDesk',
  initialState,
  reducers: {
    openNav(state, action: PayloadAction<boolean>) {
      state.isOpened = true;
    },
    closeNav(state, action: PayloadAction<boolean>) {
      state.isOpened = false;
    },
  },
});

export const { openNav, closeNav } = navDeskSlice.actions;

export default navDeskSlice.reducer;