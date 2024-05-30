import React from "react";
import ReactButton from "./ReactButton";
import ReactAccordion from "./ReactAccordion";
import { panels } from "../data/moneyEnevData";

const ReactCart = ({ onClickfn }) => {
  return (
    <div className="cart mb-2">
      <div className="text-center cartText py-2">
        Save 50% on order for your spouse
      </div>
      <div className="cartDiv my-3">
        <div className="priceDetailDiv">
          <div className="priceTag">
            ₹ 2000/- <span>Intro + 1 page in cart</span>
          </div>
          <div className="priceTagData">
            includes Wedding crest + Caricature
          </div>
        </div>
        <div className="cartBtnDiv">
          <ReactButton
            btnText={"Add to Cart"}
            btnClass={"btn-danger cartBtn"}
            onClickfn={onClickfn}
          />
        </div>
      </div>
      <div className="px-4">
        <ReactAccordion
          items={panels}
          accordionBtn={"accCartBtn"}
          accContent={"cartContent"}
        />
      </div>
    </div>
  );
};

export default ReactCart;
