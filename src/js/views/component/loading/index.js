import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import "./Loading.scss"

const Loading = ({ visibility, isLoading=true, afterLoadingText="" }) => {
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
        {isLoading ? <div className={`LoadingRoll_1234fed`}>
            <div
            className={`lds-ring centered-lds-ring`}
            >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
        :
        <FaCheckCircle color="var(--main-blue)" />
        }
      </div>
      <h3
        style={{ color: "#000", fontSize: 22, margin: "10px auto" }}
        className="popup-two-button-header"
      >
        {isLoading ? "Mohon Tunggu" : afterLoadingText}
      </h3>
    </div>
  </div> : ""
}

export default Loading;
