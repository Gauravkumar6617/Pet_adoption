import { configureStore } from "@reduxjs/toolkit";
import Counter from "../features/CounterFeautre/Counter"
export const store=configureStore({
    reducer:{
        counter:Counter
        
        
    }
})