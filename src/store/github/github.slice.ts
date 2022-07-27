import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite: (state, actions: PayloadAction<string>) => {
      state.favourites.push(actions.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(actions.payload))
    },
    removeFavourite: (state, actions: PayloadAction<string>) => {
      state.favourites = state.favourites.filter((f) => f !== actions.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(actions.payload))
    },
  },
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
