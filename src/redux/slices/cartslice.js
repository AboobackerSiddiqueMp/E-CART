import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"Cartlist",
    initialState:[],
    reducers:{
        addtoCartList:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);
        
            if (!existingItem) {
                state.push(newItem);
            }

    },
    removeFromCartList: (state, action) => {
        const itemIdToRemove = action.payload;
        return state.filter(item => item.id !== itemIdToRemove);
      }
}
})
export const {addtoCartList,removeFromCartList}=cartSlice.actions;
export default cartSlice.reducer;