import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/fold/foldcode";
import { useSelector } from "react-redux";
import { setCode } from "../../reducers/Workspace";
import { useDispatch } from "react-redux";

const SQLEditor = () => {
  const dispatch = useDispatch();
  const { active, tabs } = useSelector((state) => state.workspace);
  console.log(tabs);

  return (
    <CodeMirror
      autoScroll={true}
      value={tabs[active]?.code}
      onBeforeChange={(editor, data, value) => dispatch(setCode(value))}
      options={{
        mode: "text/x-sql",
        indentWithTabs: true,
        smartIndent: true,
        indentUnit: 4,
        matchBrackets: true,
        foldGutter: true,
        lint: true,
        styleActiveLine: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        autofocus: true,
      }}
    />
  );
};

export default SQLEditor;
