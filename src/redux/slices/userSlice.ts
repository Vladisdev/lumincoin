import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInitialState {
  name: string
}

const initialState: UserInitialState = {
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer