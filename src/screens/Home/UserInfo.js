import React, { memo } from "react";
import Avatar from "../../Images/avatar.jpg";

const UserInfo = () => {
  let dayGrids = [];
  for (let i = 0; i < 340; i++) {
    if (i % 3 === 0) {
      dayGrids.unshift(<div className="day day--active" key={i} />);
    } else {
      dayGrids.unshift(<div className="day" key={i} />);
    }
  }

  return (
    <>
      <div className="user-info">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${Avatar})` }}
        ></div>
        <div className="info">
          <p>Karan Balodi</p>
          <p>Joined 10 months ago</p>
          <p>Working at Atlan</p>
          <p>100 saved queries</p>
          <p>Manage Account</p>
        </div>
      </div>
      <p className="user-headings">Queries implemented in last year</p>
      <div className="days">{dayGrids}</div>
      <p className="user-headings">Recently saved</p>
      {[1, 2, 3].map(() => (
        <div className="recent">
          <h5>
            Query all users whose age is greater than 5 <span>(15s ago)</span>
          </h5>
          <button>Share</button>
        </div>
      ))}
    </>
  );
};

export default memo(UserInfo);
