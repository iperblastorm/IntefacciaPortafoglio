import { configureStore } from "@reduxjs/toolkit";
import { PortafoglioSlice } from "../features/portafoglio/PortafoglioSlice";

export default configureStore({
    reducer: {
        PortafoglioSlice : PortafoglioSlice.reducer
    }
});