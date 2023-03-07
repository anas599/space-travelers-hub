/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getRocketsArr, reserveRocket, unreserveRocket,
} from '../redux/rockets/rocketsSlice';

function RocketsFunction() {
  const dispatch = useDispatch();
  const rocketsArr = useSelector((state) => state.rockets.rocketsArr);
  const ifSucceed = useSelector((store) => store.rockets.ifSucceed);
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const reserveHandel = (id, reserved) => {
    if (reserved) {
      dispatch(unreserveRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  useEffect(() => {
    dispatch(getRocketsArr());
  }, [dispatch, ifSucceed]);

  useEffect(() => {
    setName('');
    setType('');
  }, [rocketsArr]);

  return (
    <>
      {rocketsArr.map((rocket) => (
        <div key={rocket.id} className="rocket-ele">
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rocket-img" />
          <div className="rocket-info">
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <button
              type="button"
              onClick={() => reserveHandel(rocket.id, rocket.reserved)}
              className={rocket.reserved ? 'reserved-rocket' : 'asd'}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default RocketsFunction;
