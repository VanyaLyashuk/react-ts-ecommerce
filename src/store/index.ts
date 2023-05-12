import { configureStore } from "@reduxjs/toolkit";
import navDeskReducer from './navDeskSlice';
import navMobSlice from "./navMobSlice";
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    navDesk: navDeskReducer,
    navMob: navMobSlice,
    cart: cartSlice,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;