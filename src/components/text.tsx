import React from "react";
import ContentEditable from "react-contenteditable";

import "./styles.css";

const useRefCallback = <T extends any[]>(
  value: ((...args: T) => void) | undefined,
  deps?: React.DependencyList
): ((...args: T) => void) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, deps ?? [value]);

  const result = React.useCallback((...args: T) => {
    ref.current?.(...args);
  }, []);

  return result;
};

function Demo() {
  const [text, setText] = React.useState("Woot! Hooks working");

  const handleChange = useRefCallback((evt) => {
    setText(evt.target.value);
  }, []);

  const handleBlur = useRefCallback(() => {
    console.log(text);
  }, [text]);

  return (
    <ContentEditable html={text} onBlur={handleBlur} onChange={handleChange} />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Edit the text below</h1>
      <Demo />
    </div>
  );
}
