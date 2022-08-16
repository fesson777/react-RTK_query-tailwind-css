import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const LS_FAV_KEY = 'rfk'

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
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite: (state, actions: PayloadAction<string>) => {
      state.favourites = state.favourites.filter((f) => f !== actions.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
  },
})

export const { actions, reducer } = githubSlice
