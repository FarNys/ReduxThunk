import React, { useEffect, useState } from "react";
import BootstrapGrid from "./components/BootstrapGrid";
import DNDIndex from "./components/DNDIndex";
import DragNDrop from "./components/DragNDrop";
import DNDColumns from "./components/DNDColumns";
import FavSongs from "./components/FavSongs";
const App = () => {
  return (
    <div className="app_container">
      <FavSongs />
      <BootstrapGrid />
      <DragNDrop />
      <DNDIndex />
      <DNDColumns />
    </div>
  );
};

export default App;
