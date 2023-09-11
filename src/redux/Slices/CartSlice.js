import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart" ,
    initialState :[],
    reducers:{
        // reducers in redux take 2 parameters state and action
           add:(state,action)=>{

            // action.apyload indicates any parameter send in othe component
            state.push(action.payload)
           },
           remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload);
           }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;