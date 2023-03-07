import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleMission from '../components/SingleMission';
import { allMissions, getMissionFromAPI } from '../redux/mission/missionSlice';

const Missions = () => {
  const missions = useSelector(allMissions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionFromAPI());
    }
  });
  return (
    <section className="missionContainer">
      <table className="missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <SingleMission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Missions;
