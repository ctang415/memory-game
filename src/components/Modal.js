import React from "react";

const Modal = ({modal, setModal}) => {
    if (modal) {
    return (
        <div className="modal">
            <div className="modaltext">
                <span>You did it!</span> <span>Your memory is awesome.</span>
                <div>
                    <button className="button" onClick={() => setModal(false)}>Play Again</button>
                </div>
            </div>
        </div>
    )
    }
}

export default Modal