import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React  2"),
    React.createElement("h2", {}, "I'm in h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm in h1 tag"),
    React.createElement("h2", {}, "I'm in h2 tag"),
  ]),
]);

console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

