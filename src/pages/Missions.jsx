import React from 'react';
import SingleMission from '../components/SingleMission';

const Missions = () => {
  const missions = [
    {
      id: 1,
      missionName: 'Mission 1',
      description: 'Mission Desc',
    },
    {
      id: 2,
      missionName: 'Mission 2',
      description: 'Mission Desc',
      joined: true,
    },
    {
      id: 3,
      missionName: 'Mission 3',
      description: 'Mission Desc',
    },
  ];
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
