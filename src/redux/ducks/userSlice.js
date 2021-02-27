import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
   getUser() {},
   setUser(state, action){
       const UserData= action.payload;
       return {...state, ...UserData};

    }
  }
})

export const { getUser, setUser } = userSlice.actions

export default userSlice.reducer