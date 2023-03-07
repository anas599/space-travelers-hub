/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
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

export const reserveRocket = createAction('rockets/reserveRocket', (id) => ({
  payload: id,
}));
export const unreserveRocket = createAction('rockets/unreserveRocket', (id) => ({
  payload: id,
}));

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rocketsArr: [],
    loading: false,
    ifSucceed: false,
  },
  reducers: {
    rsvRocket: (state, action) => {
      const rocket = state.rocketsArr.find((rocketID) => rocketID.id === action.payload);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    unrsvRocket: (state, action) => {
      const rocket = state.rocketsArr.find((r) => r.id === action.payload);
      if (rocket) {
        rocket.reserved = false;
      }
    },
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
      })
      .addCase(reserveRocket, (state, action) => {
        const rocket = state.rocketsArr.find((x) => x.id === action.payload);
        if (rocket) {
          rocket.reserved = true;
        }
      })
      .addCase(unreserveRocket, (state, action) => {
        const rocket = state.rocketsArr.find((x) => x.id === action.payload);
        if (rocket) {
          rocket.reserved = false;
        }
      });
  },
});

export default rocketsSlice.reducer;
export const { rsvRocket, unrsvRocket } = rocketsSlice.actions;
