import { createSlice } from "@reduxjs/toolkit";

export interface HomePageState {
  animeList: any[]
}

const initialState: HomePageState = {
  animeList: []
}

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {

  }
})

export const {} = HomePageSlice.actions
export default HomePageSlice.reducer