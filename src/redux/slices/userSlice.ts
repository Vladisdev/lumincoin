import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInitialState {
  name: string
  email: string
  balance: number
}

const initialState: UserInitialState = {
  name: '',
  email: '',
  balance: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    getUserData: state => {
      return {
        name: state.name,
        email: state.email,
        balance: state.balance,
      }
    },
  },
})

export const { createUser } = userSlice.actions

export default userSlice.reducer
