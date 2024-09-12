import React from "react";

function Model({ children }) {
  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body"></div>
        {children}
      </div>
    </>
  );
}

export default Model;
