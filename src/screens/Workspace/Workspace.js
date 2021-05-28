import React from "react";
import { useSelector } from "react-redux";
import Split from "react-split";
import EmptyState from "./EmptyState";
import NameField from "./NameField";
import Saved from "./Saved";
import SideBar from "./SideBar";
import SQLEditor from "./SQLEditor";
import Tabs from "./Tabs";

const Workspace = () => {
  const { active } = useSelector((state) => state.workspace);
  return (
    <div>
      <Split
        className="split"
        minSize={280}
        gutterSize={6}
        snapOffset={50}
        dragInterval={5}
        sizes={[200, 700]}
      >
        <div>
          <Saved />
        </div>
        <Split
          direction="vertical"
          minSize={250}
          gutterSize={1}
          snapOffset={50}
          dragInterval={5}
          sizes={[80, 25]}
        >
          <div style={{ padding: "0px 0px 0px 30px" }}>
            <Tabs />
            <div style={{ display: "flex", width: "100%", height: "92%" }}>
              <div style={{ width: "90%" }}>
                {active === -1 ? (
                  <EmptyState />
                ) : (
                  <>
                    <NameField />
                    <SQLEditor />
                  </>
                )}
              </div>
              <SideBar />
            </div>
          </div>

          <h4>Hit run to get result </h4>
        </Split>
      </Split>
    </div>
  );
};

export default Workspace;
