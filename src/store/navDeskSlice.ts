import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavDeskProps = {
  isNavOpened: boolean,
}

const initialState: NavDeskProps = {
  isNavOpened: false
}

const navDeskSlice = createSlice({
  name: 'navDesk',
  initialState,
  reducers: {
    openNav(state, action: PayloadAction<boolean>) {
      state.isNavOpened = true;
    },
    closeNav(state, action: PayloadAction<boolean>) {
      state.isNavOpened = false;
    },
  },
});

export const { openNav, closeNav } = navDeskSlice.actions;

export default navDeskSlice.reducer;