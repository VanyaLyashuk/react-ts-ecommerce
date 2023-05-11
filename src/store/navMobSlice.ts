import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type NavMobProps = {
  isOpened: boolean
}

const initialState: NavMobProps = {
  isOpened: false
}

const navMobSlice = createSlice({
  name: 'navMob',
  initialState,
  reducers: {
    toggleNav(state, action: PayloadAction<boolean>) {
      state.isOpened = !state.isOpened
    }
  }
});

export const {toggleNav} = navMobSlice.actions;
export default navMobSlice.reducer;