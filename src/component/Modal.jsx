import React from "react";

const Modal = ({ show, setShow, handleVerify, data }) => {
  return (
    <div>
      {show ? (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal">
              <div className="modal-img-container">
                <img src={`${data?.img}`} />
              </div>
              <div>
                <h1 className="modal-title">{data?.headingText}</h1>
                <p className="modal-subtitle">{data?.subheadingText}</p>
                <div className="modal-btn-container">
                  <button className="nvd-btn-green" onClick={handleVerify}>
                    Yes
                  </button>
                  <button className="nvd-btn-red">No</button>
                </div>
              </div>
              {/* cross button */}
              <div className="modal-cross" onClick={() => setShow(!show)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
