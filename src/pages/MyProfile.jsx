import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../app/features/missions/missionsSlice';
import { allRockets } from '../app/features/rockets/rocketSlice';

const MyProfile = () => {
  const missions = useSelector(allMissions);
  // My missions
  const missionsArray = missions.filter((mission) => mission.joined);
  const rockets = useSelector(allRockets);
  // My rockets
  const rocketsArray = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="ProfileContainer">
      <section className="myMissions">
        <span className="sectionTitle">My Missions</span>
        {missionsArray.length > 0 ? (
          <ul className="myMissionsList">
            {missionsArray.map((mission) => {
              if (mission?.joined) {
                return (
                  <li className="item" key={mission.id}>
                    {mission.missionName}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span>NO MISSIONS FOUND</span>
        )}
      </section>
      <section className="myRockets">
        <span className="sectionTitle">My Rockets</span>
        {rocketsArray.length > 0 ? (
          <ul className="myMissionsList">
            {rocketsArray.map((rocket) => {
              if (rocket?.reserved) {
                return (
                  <li className="item" key={rocket.id}>
                    {rocket.rocketName}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span>NO ROCKET FOUND</span>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
