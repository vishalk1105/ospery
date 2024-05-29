import React from "react";

const ReactButton = ({
  btnType,
  btnText,
  onClickfn,
  btnClass,
  reactBtnOuterDiv,
  btnValue,
}) => {
  return (
    <div className={`reactButton text-center ${reactBtnOuterDiv}`}>
      <button
        type={btnType}
        className={`btn ${btnClass}`}
        onClick={onClickfn}
        value={btnValue}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ReactButton;
