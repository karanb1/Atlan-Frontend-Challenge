import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setTabs, setClose } from "../../reducers/Workspace";

const Tabs = () => {
  const dispatch = useDispatch();
  const { active, tabs } = useSelector((state) => state.workspace);

  const handleClick = () => {
    dispatch(
      setTabs({
        name: "untitled",
        code: "",
      })
    );
  };

  const handleClose = (e, index) => {
    e.stopPropagation();
    dispatch(setClose(index));
  };

  return (
    <div className="tabs">
      {tabs?.map((item, index) => (
        <div
          className={active === index ? "indi-tab-active" : "indi-tab-inactive"}
          onClick={() => dispatch(setActive(index))}
        >
          <span>{item?.name}</span>
          <p onClick={(e) => handleClose(e, index)}>x</p>
        </div>
      ))}

      <div className="add" onClick={handleClick}>
        +
      </div>
    </div>
  );
};

export default memo(Tabs);
