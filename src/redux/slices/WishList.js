import { createSlice } from "@reduxjs/toolkit";

const  WishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addtoWishList:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);
        
            if (!existingItem) {
                state.push(newItem);
            }

    },
    removeFromWishlist: (state, action) => {
        const itemIdToRemove = action.payload;
        return state.filter(item => item.id !== itemIdToRemove);
      }

}
})
export const {addtoWishList,removeFromWishlist}=WishlistSlice.actions;
export default WishlistSlice.reducer;