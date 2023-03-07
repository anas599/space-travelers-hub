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
  }, []);
  return (
    <section className="missionContainer">
      <table className="missions">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map((mission) => (
          <SingleMission key={mission.id} mission={mission} />
        ))}
      </table>
    </section>
  );
};
export default Missions;
