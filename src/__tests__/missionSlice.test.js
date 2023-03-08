import { getMissionFromAPI } from '../redux/mission/missionSlice';
import store from '../redux/store';

describe('Mission Slice', () => {
  it('Should load all the mission and set the state', async () => {
    await store.dispatch(getMissionFromAPI());
    const state = store.getState();
    console.log(state);
  });
});
