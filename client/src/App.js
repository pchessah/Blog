import React from "react";
import "./App.css";
import RoutesMain from "./components/Routes";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <RoutesMain />
      </div>
    </div>
  );
}

export default App;
