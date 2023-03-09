import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../pages/Missions';

const mockStore = configureStore([]);
const description = 'Mission 1 Desc';

describe('Missions Page', () => {
  it('single mission info should display', () => {
    const missionsArr = [
      {
        id: '1',
        missionName: 'Mission 1',
        description,
        joined: false,
      },
    ];
    const initialState = {
      missions: {
        missions: missionsArr,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const missionName = screen.getByText('Mission 1');
    const missionDesc = screen.getByText(description);
    expect(missionName).toBeInTheDocument();
    expect(missionDesc).toBeInTheDocument();
    expect(store.getState()).toMatchSnapshot();
  });
});
