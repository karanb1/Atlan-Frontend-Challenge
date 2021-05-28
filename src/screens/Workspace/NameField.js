import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../reducers/Workspace";

const NameField = () => {
  const dispatch = useDispatch();
  const { active, tabs } = useSelector((state) => state.workspace);
  return (
    <div className="name-field">
      <input
        type="text"
        placeholder="Enter Query Name"
        value={tabs[active]?.name === "untitled" ? "" : tabs[active]?.name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <button className="run">Run</button>
    </div>
  );
};

export default NameField;
