import React from "react";

const BootstrapGrid = () => {
  return (
    <div className="container mt-10">
      <div className="row border">
        <div className="col">1 of 2</div>
        <div className="col">2 of 2</div>
      </div>
      <div className="row border">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  );
};

export default BootstrapGrid;
