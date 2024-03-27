import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string,
  password: string,
  phone_no: string,
  email: string,
 
}

const initialState: UserState = {
 email: "",
 password: "",
 name: "",
 phone_no: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const {email, password,phone_no,name} = action.payload
      state.email = email;
      state.password = password;
      state.name= name;
      state.phone_no= phone_no     
    },
    logout: (state) => {
      state = initialState;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer