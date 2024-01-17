import { configureStore } from "@reduxjs/toolkit";
import WishList from "./slices/WishList";
import cartslice from "./slices/cartslice";

const store=configureStore({
    reducer:{

        wishlisttReducer:WishList,
        cartlistReducer:cartslice



    }
})
export default store