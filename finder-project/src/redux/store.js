import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchbar'


export  const store = configureStore({
    reducer :{
        search: searchReducer,
    }
});

