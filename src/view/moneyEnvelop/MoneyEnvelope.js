import React from "react";
import MainLayout from "../../layout/MainLayout";
import ReactSlider from "../../components/ReactSlider";
import Title from "../../components/Title";
import ReactButton from "../../components/ReactButton";
import ReactAccordion from "../../components/ReactAccordion";
import { MoneyEnvData } from "../../data/moneyEnevData";
import ReactCart from "../../components/ReactCart";
function MoneyEnvelope() {
  return (
    <MainLayout>
      <ReactSlider />
      <div className="container">
        <Title titleText={"Money Enevelope"} titleNameClass={"mt-5 mb-3"} />

        <div className="eneMaiDiv mb-5">
          <div className="priceOffDiv d-flex gap-5">
            <div className="priceLable">Rs 2000/-</div>
            <ReactButton btnClass={"offerDiv "} btnText={"% Offers"} />
          </div>

          <div className="qtyDiv gap-5 d-flex justify-content-center">
            <div className="qtyTitle me-4">Quantity :</div>
            <ReactButton btnClass={"pcsBtn"} btnValue={20} btnText={"20 Pcs"} />
            <ReactButton btnClass={"pcsBtn"} btnValue={50} btnText={"50 Pcs"} />
            <ReactButton
              btnClass={"pcsBtn"}
              btnValue={100}
              btnText={"100 Pcs"}
            />
          </div>
          <div className="accDiv">
            {/* <div className=" addOn me-4 mb-2 text-left">Add ons :</div>*/}
            <ReactAccordion
              accContent={"contentOuterDiv"}
              accOuterClass="w-100"
              items={MoneyEnvData}
            />
          </div>
        </div>
        <ReactCart />
      </div>
    </MainLayout>
  );
}

export default MoneyEnvelope;
