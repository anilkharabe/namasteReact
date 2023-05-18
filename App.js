import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>This is span element</span>

var title =  (
  <h1 id="jsxheading" className="head">
    <elem></elem> <br />
    this is heading from JSX
  </h1>
);

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="component">
      {title}
      <h2> {number} </h2>
      <h1>Namaste React JS component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
