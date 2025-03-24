import { configureStore } from "@reduxjs/toolkit";
import  formSlice  from "../app/Slice/createSlice";

export const store = configureStore({
    reducer: {
        form: formSlice,
    },

})


