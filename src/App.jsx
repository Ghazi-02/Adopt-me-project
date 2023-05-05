import React from "react"
import  { createRoot }  from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",Pet
    }),
    React.createElement(Pet, {
      animal: "Big Cat",
      name: "Simba",
      breed: "Lion",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Spike",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
 