/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsArr, reserveRocket } from '../redux/rockets/rocketsSlice';

function RocketsFunction() {
  const dispatch = useDispatch();
  const rocketsArr = useSelector((state) => state.rockets.rocketsArr);
  const ifSucceed = useSelector((store) => store.rockets.ifSucceed);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const reserveHandel = (id) => {
    dispatch(reserveRocket(id));
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
            <button type="button" onClick={() => reserveHandel(rocket.id)}>Reserve Rocket</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default RocketsFunction;
