import React, { Fragment } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./PopupOneButton.scss";

const PopupOneButton = ({
    visibility = true,
    title = "",
    contentTitle = "",
    buttonText = "",
    onClickButton = () => {},
    style={},
    className = "",
    footerText = null,
    backdrop = true,
    children
}) => {
    return <Fragment>
        <Modal
            isOpen={visibility}
            toggle={onClickButton}
            style={style}
            className={`modal-wrapper ${className}`}
            backdrop={backdrop}
        >
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <div className="modal-footer-info">{footerText}</div>
                <button
                    onClick={onClickButton}
                >
                    {buttonText}
                </button>
            </ModalFooter>
        </Modal>
    </Fragment>
}

export default PopupOneButton;
