/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsAPIurl = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsArr = createAsyncThunk(
  'rockets/getRocketsArr',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(rocketsAPIurl);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

export function reserveRocket(id) {
  const xx = { payload: id };
  return {
    type: 'ReserveRocket',
    xx,
  };
}

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rocketsArr: [],
    loading: false,
    ifSucceed: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsArr.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRocketsArr.fulfilled, (state, action) => {
        state.loading = false;
        state.rocketsArr = action.payload;
      })
      .addCase(getRocketsArr.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default rocketsSlice.reducer;
