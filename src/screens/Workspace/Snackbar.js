import React, { memo } from "react";

const Snackbar = ({ text, error }) => {
  return (
    <div
      className="snackbar"
      style={{ backgroundColor: error ? "#F44336" : "#4caf50" }}
    >
      {text}
    </div>
  );
};

export default memo(Snackbar);
