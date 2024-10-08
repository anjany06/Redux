import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <div>
      <p className="lead mb-4">Counter Current Value : {counterVal}</p>
    </div>
  );
}

export default DisplayCounter;
