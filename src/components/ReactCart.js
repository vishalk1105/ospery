import React from "react";
import ReactButton from "./ReactButton";
import ReactAccordion from "./ReactAccordion";
import { panels } from "../data/moneyEnevData";

const ReactCart = ({ onClickfn, qty, wedCrestPrice }) => {
  const totalPrice = !isNaN(qty * 100 + wedCrestPrice)
    ? qty * 100 + wedCrestPrice
    : 2000;

  return (
    <div className="cart sticky-bottom bg-light">
      <div className="text-center cartText py-1">
        Save 50% on order for your spouse
      </div>
      <div className="cartDiv my-3">
        <div className="priceDetailDiv">
          {totalPrice && (
            <div className="priceTag">
              ₹{totalPrice}
              /- <span>Intro + 1 page in cart</span>
            </div>
          )}

          {wedCrestPrice !== 0 && (
            <div className="priceTagData">
              includes Wedding crest + Caricature
            </div>
          )}
        </div>
        <div className="cartBtnDiv">
          <ReactButton
            btnText={"Add to Cart"}
            btnClass={"btn-danger cartBtn"}
            onClickfn={onClickfn}
          />
        </div>
      </div>
      {wedCrestPrice > 0 && (
        <div className="px-4">
          <ReactAccordion
            items={panels}
            accordionBtn={"accCartBtn"}
            accContent={"cartContent"}
            accOuterClass={"cartOuterClass"}
            accItem={"cartItemClass"}
          />
        </div>
      )}
    </div>
  );
};

export default ReactCart;
