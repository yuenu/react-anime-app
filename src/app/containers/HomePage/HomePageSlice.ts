import { GetAnimePage } from './../../services/animeService/__generated__/GetAnimePage';
import { createSlice } from "@reduxjs/toolkit";

export interface IHomePageState {
  animePage: GetAnimePage['Page']
}

const initialState: IHomePageState = {
  animePage: null
}

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload
    }
  }
})

export const { setAnimePage } = HomePageSlice.actions
export default HomePageSlice.reducer