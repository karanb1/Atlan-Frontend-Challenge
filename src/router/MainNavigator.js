import React from "react";
import { Link, useLocation } from "react-router-dom";

const MainNavigator = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="nav">
        <div>
          <Link to="/">
            <button
              className={pathname === "/" ? "btn-active" : "btn-inactive"}
            >
              Home
            </button>
          </Link>
          <Link to="/workspace">
            <button
              className={
                pathname === "/workspace" ? "btn-active" : "btn-inactive"
              }
            >
              Workspace
            </button>
          </Link>
        </div>

        <div className="avatar">KB</div>
      </div>
      {children}
    </>
  );
};

export default MainNavigator;
