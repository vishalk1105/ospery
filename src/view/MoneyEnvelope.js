import React from "react";
import MainLayout from "../layout/MainLayout";
import ReactSlider from "../components/ReactSlider";
import Title from "../components/Title";

import ReactButton from "../components/ReactButton";
function MoneyEnvelope() {
  return (
    <MainLayout>
      <ReactSlider />
      <Title titleText={"Money Enevelope"} />

      <div className="eneMaiDiv">
        <div className="priceOffDiv d-flex gap-5">
          <div className="priceLable">Rs 2000/-</div>
          <ReactButton btnClass={"pcsBtn"} btnValue={20} btnText={"% Offers"} />
        </div>

        <div className="qtyDiv gap-5">
          <div className="qtyTitle me-4">Quantity :</div>
          <ReactButton btnClass={"pcsBtn"} btnValue={20} btnText={"20 Pcs"} />
          <ReactButton btnClass={"pcsBtn"} btnValue={50} btnText={"50 Pcs"} />
          <ReactButton btnClass={"pcsBtn"} btnValue={100} btnText={"100 Pcs"} />
        </div>
      </div>
    </MainLayout>
  );
}

export default MoneyEnvelope;
