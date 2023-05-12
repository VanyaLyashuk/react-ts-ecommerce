import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type NavMobProps = {
  isNavOpened: boolean
}

const initialState: NavMobProps = {
  isNavOpened: false
}

const navMobSlice = createSlice({
  name: 'navMob',
  initialState,
  reducers: {
    toggleNav(state, action: PayloadAction<boolean>) {
      state.isNavOpened = !state.isNavOpened
    }
  }
});

export const {toggleNav} = navMobSlice.actions;
export default navMobSlice.reducer;