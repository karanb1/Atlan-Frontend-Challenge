import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { setTabs } from "../../reducers/Workspace";

const EmptyState = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      setTabs({
        name: "untitled",
        code: "",
      })
    );
  };

  return (
    <div className="empty-state">
      <p>Open new tab to get started</p>
      <button onClick={handleClick}>New Tab</button>
    </div>
  );
};

export default memo(EmptyState);
