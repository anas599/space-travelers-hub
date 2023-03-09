import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketsFunction from '../pages/Rockets';

const mockStore = configureStore([]);
const description = 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009....';

describe('RocketsFunction', () => {
  it('single rocket info to display', () => {
    const rocketsArr = [
      {
        id: '1',
        rocket_name: 'Falcon 1',
        description,
        reserved: false,
        flickr_images: [
          'https://live.staticflickr.com/764/22460724618_69d817d02a_b.jpg',
        ],
      },
    ];
    const initialState = {
      rockets: {
        rocketsArr,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <RocketsFunction />
      </Provider>,
    );
    const rocketName = screen.getByText('Falcon 1');
    const rocketDesc = screen.getByText(description);
    expect(rocketName).toBeInTheDocument();
    expect(rocketDesc).toBeInTheDocument();
    expect(store.getState()).toMatchSnapshot();
  });
});
