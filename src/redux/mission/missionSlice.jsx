import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = [];
const baseURL = 'https://api.spacexdata.com/v3/missions';

// =============== Asynchronous =============

export const getMissionFromAPI = createAsyncThunk(
  'missions/getMissionFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something goes wrong.');
    }
  },
);

const missionSlice = createSlice({
  initialState,
  name: 'missions',
  reducers: {
    joinedMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return newState;
    },
    leavedMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return newState;
    },
  },
  extraReducers: {
    [getMissionFromAPI.fulfilled]: (state, action) => {
      const missions = action.payload.map(
        ({ mission_id: id, mission_name: missionName, description }) => ({
          id,
          missionName,
          description,
        }),
      );
      return missions;
    },
  },
});

// Expose the state
export const allMissions = (state) => state.missions;
// Export the actions
export const { joinedMission, leavedMission } = missionSlice.actions;
// Export default the reducer
export default missionSlice.reducer;
