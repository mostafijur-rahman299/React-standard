import { configureStore } from "@reduxjs/toolkit"
import uiCartSlice from "./cart-slice"
import uiSlice from "./ui-slice"



const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: uiCartSlice.reducer}
})


export default store