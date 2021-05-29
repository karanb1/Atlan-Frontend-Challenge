import React, { memo, useState } from "react";
import Save from "../../Images/save.png";
import Copy from "../../Images/copy.png";
import Share from "../../Images/share.png";
import { useDispatch, useSelector } from "react-redux";
import { setSaved } from "../../reducers/Workspace";
import Snackbar from "./Snackbar";

const SideBar = () => {
  const dispatch = useDispatch();
  const { active, tabs } = useSelector((state) => state.workspace);
  const [snack, setSnack] = useState(false);
  const [snackText, setSnackText] = useState();

  const handleSave = () => {
    if (tabs[active].name.length < 0 || tabs[active].name === "untitled") {
      setSnack(true);
      setSnackText("Please enter name for query");
    } else {
      dispatch(setSaved(tabs[active]));
      setSnack(true);
      setSnackText("Query Saved");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[active].code);
    setSnack(true);
    setSnackText("Code Copied");
  };

  setTimeout(() => {
    setSnack(false);
  }, 3000);

  return (
    <div className="side-bar">
      <button onClick={handleSave}>
        <img src={Save} alt="Save" />
      </button>
      <button onClick={handleCopy}>
        <img src={Copy} alt="Copy" />
      </button>
      <button>
        <img src={Share} alt="Save" />
      </button>
      {snack && (
        <Snackbar error={snackText.includes("Please")} text={snackText} />
      )}
    </div>
  );
};

export default memo(SideBar);
