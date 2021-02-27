import { createSlice } from "@reduxjs/toolkit"

//setting up the actual reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      count: 0
    },
    reducers: {
      increment: state => ({ ...state, count: state.count+1}),
      decrement: state => ({ ...state, count: state.count-1}),
      test:(state, action) => {
        const {testValue}= action.payload;
        //lets just consolelog it to see the result
        console.log(testValue);

      }
    }
  })
  
  //export actions and reducer separately
export const { increment, decrement, test } = counterSlice.actions;
export default counterSlice.reducer