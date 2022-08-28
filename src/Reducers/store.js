import {configureStore} from "@reduxjs/toolkit";
import FoydalanuvchilarReducer from "./FoydalanuvchilarReducer";
import KassalarReducer from "./KassalarReducers";
import KirimlarReducer from "./KirimlarReducer";
import ChiqimlarReducer from "./ChiqimlarReducer";
export default configureStore({reducer:{FoydalanuvchilarReducer,KassalarReducer,KirimlarReducer,ChiqimlarReducer}})