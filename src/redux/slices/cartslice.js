import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cartlist",
  initialState: [],
  reducers: {
    addtoCartList: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 });
      }
      else {
        existingItem.quantity += 1
      }

    },
    removeFromCartList: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemToRemove = state.find((item) => item.id === itemIdToRemove);

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          // Decrease quantity by one if it's greater than one
          itemToRemove.quantity -= 1;
        } else {
          // Remove the item from the cart if its quantity is one
          return state.filter((item) => item.id !== itemIdToRemove);
        }
      }

      return state;
    },
    emptycart: (state) => {
      return state = []
    }
  }
})
export const { addtoCartList, removeFromCartList, emptycart } = cartSlice.actions;
export default cartSlice.reducer;