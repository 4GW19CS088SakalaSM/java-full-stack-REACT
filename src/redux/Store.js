import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from './EmpSlice';
import UserReducer from './UserSlice';
console.log('store');

const store = configureStore({
    reducer: {
        emp: EmpReducer,
        user: UserReducer // more reducers 
    }
});
export default store;