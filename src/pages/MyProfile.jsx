import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../redux/mission/missionSlice';

const MyProfile = () => {
  const rocketsArr = useSelector((state) => state.rockets.rocketsArr);
  const rocketsReserved = rocketsArr.filter((x) => x.reserved);
  const missions = useSelector(allMissions);
  // My missions
  const missionsArray = missions.filter((mission) => mission.joined);

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
          <span>No Missions Joined</span>
        )}
      </section>
      <section className="myRockets">
        <span className="sectionTitle">My Rockets</span>
        {rocketsReserved.length > 0 ? (
          <ul className="myMissionsList">
            {rocketsReserved.map((x) => {
              if (x?.reserved) {
                return (
                  <li className="item" key={x.id}>
                    {x.rocket_name}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span>No Rockets Reserved</span>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
