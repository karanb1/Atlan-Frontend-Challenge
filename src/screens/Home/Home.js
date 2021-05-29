import React, { memo } from "react";
import UserInfo from "./UserInfo";

const Home = () => {
  return (
    <div className="home">
      <UserInfo />
    </div>
  );
};

export default memo(Home);
