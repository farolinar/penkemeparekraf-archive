import React from 'react';
import "./Loading.scss"

const Loading = ({ visibility }) => {
    return visibility ? <div
    id="popup-two-button"
    className="overlay target"
  >
    <div
      style={{
        overflow: "hidden",
        height: "auto",
        padding: "30px 32px",
        margin: "30vh auto",
        width: 337,
      }}
      className="popup-prompt centered-item"
    >
      <div
        className="popup-two-button-message"
        style={{ color: "#000", fontSize: 13, lineHeight: "16px" }}
      >
        <div className={`LoadingRoll_1234fed`}>
            <div
            className={`lds-ring centered-lds-ring`}
            >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
      </div>
      <h3
        style={{ color: "#000", fontSize: 22, margin: "10px auto" }}
        className="popup-two-button-header"
      >
        Mohon Tunggu
      </h3>
    </div>
  </div> : ""
}

export default Loading;
