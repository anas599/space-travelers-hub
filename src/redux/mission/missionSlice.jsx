import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = [];
const baseURL = 'https://api.spacexdata.com/v3/missions';

const missionsSlice = createSlice({
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
  // extraReducers: {
  //   [getMissionFromAPI.pending]: (state) => {
  //     console.log('Loading...', state);
  //   },
  //   [getMissionFromAPI.fulfilled]: (state, action) => {
  //     const missions = action.payload.map(
  //       ({ mission_id: id, mission_name: missionName, description }) => ({
  //         id,
  //         missionName,
  //         description,
  //       }),
  //     );
  //     return missions;
  //   },
  // },
});

// Expose the state
export const allMissions = (state) => state.missions;

// Export the actions
export const { joinedMission, leavedMission } = missionsSlice.actions;
// Export default the reducer
export default missionsSlice.reducer;