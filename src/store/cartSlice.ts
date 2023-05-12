import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type cartProps = {
  isCartOpened: boolean
}

const initialState: cartProps = {
  isCartOpened: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state, action: PayloadAction<boolean>) {
      state.isCartOpened = true;
    },
    closeCart(state, action: PayloadAction<boolean>) {
      state.isCartOpened = false;
    }
  }
});

export const {openCart, closeCart} = cartSlice.actions;

export default cartSlice.reducer;