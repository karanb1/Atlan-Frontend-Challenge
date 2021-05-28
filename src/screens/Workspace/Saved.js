import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSavedActive, setTabs } from "../../reducers/Workspace";

const Saved = () => {
  const { saved, savedActive } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setTabs(saved[index]));
    dispatch(setSavedActive(index));
  };

  return (
    <div className="saved">
      <input type="text" placeholder="Search" />
      <h6>Saved Queries</h6>
      <div className="saved-tab">
        {saved?.length === 0 ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 12,
              color: "#888888",
            }}
          >
            No saved queries
          </span>
        ) : (
          saved?.map((item, index) => (
            <p
              className={savedActive === index ? "saved-active" : null}
              onClick={() => handleClick(index)}
            >
              {item?.name}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Saved;
