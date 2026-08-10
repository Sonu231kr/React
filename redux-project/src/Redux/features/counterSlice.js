import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'name',
    initialState :{
        value : 0
    },
    reducers:{
        increment : (state) =>{
                state.value +=1
        },
        decrement : (state) =>{

                state.value -=1
        },
        increasebyamount : (state,actions) =>{
            state.value += actions.payload
        },
        decreasebyamout : (state,actions) =>{
            state.value -= actions.payload
        }
    }
})

export const {increment , decrement, increasebyamount, decreasebyamout} = counterSlice.actions
export default counterSlice.reducer