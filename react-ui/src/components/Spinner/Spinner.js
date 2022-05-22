import React from "react";
import "./Spinner.css";

export default function LoadingSpinner() {
  return (
    <>
      <div className="spinner-container">
        <div className="lineUp">
          <h3>Please wait...</h3>
          <span className="dot-falling"></span>
        </div>
      </div>
    </>
  );
}