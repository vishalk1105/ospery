import React from "react";
import ReactInput from "../../components/ReactInput";

const MoneyEnevDetail = () => {
  return (
    <div className="moneyPurchaseDetailDiv">
      <ReactInput
        inputClassName="inputEnvClass"
        placeholder={
          "Please enter text for personalisation, kindly leave blank (do not type )incase of non-personalised orders"
        }
      />
    </div>
  );
};

export default MoneyEnevDetail;
