import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInitialState {
  name: string
  balance: number
}

const initialState: UserInitialState = {
  name: '',
  balance: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    getUserData: state => {
      return {
        name: state.name,
        balance: state.balance,
      }
    },
  },
})

export const { createUser } = userSlice.actions

export default userSlice.reducer
