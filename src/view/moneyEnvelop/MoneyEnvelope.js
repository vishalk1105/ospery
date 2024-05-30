import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import ReactSlider from "../../components/ReactSlider";
import Title from "../../components/Title";
import ReactButton from "../../components/ReactButton";
import ReactAccordion from "../../components/ReactAccordion";
import { MoneyEnvData } from "../../data/moneyEnevData";
import ReactCart from "../../components/ReactCart";
function MoneyEnvelope() {
  const [activeId, setActiveId] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const selectPsc = (id) => {
    setActiveId(id);
    setShowCart(true);
  };
  const btnData = [
    {
      id: "20env",
      value: 20,
      text: "20 Pcs",
    },
    {
      id: "50env",
      value: 50,
      text: "50 Pcs",
    },
    {
      id: "100env",
      value: 100,
      text: "100 Pcs",
    },
  ];

  const onAddCart = () => {
    prompt("Added to the cart");
  };

  return (
    <MainLayout>
      <div className="sliderDiv">
        <ReactSlider />
      </div>
      <div className="container">
        <Title titleText={"Money Enevelope"} titleNameClass={"mt-5 mb-3"} />

        <div className="eneMaiDiv mb-5">
          <div className="priceOffDiv d-flex gap-5">
            <div className="priceLable">Rs 2000/-</div>
            <ReactButton btnClass={"offerDiv "} btnText={"% Offers"} />
          </div>

          <div className="qtyDiv  d-flex justify-content-center">
            <div className="qtyTitle me-2">Quantity :</div>
            {btnData.map((ele) => (
              <ReactButton
                key={ele.id}
                id={ele.id}
                btnClass={`pcsBtn ${activeId === ele.id ? "pcs-active" : ""}`}
                btnValue={ele.value}
                btnText={ele.text}
                onClickfn={() => selectPsc(ele.id)}
              />
            ))}
          </div>
          <div className="accDiv">
            {/* <div className=" addOn me-4 mb-2 text-left">Add ons :</div>*/}
            <ReactAccordion
              accContent={"contentOuterDiv"}
              accOuterClass="w-100"
              items={MoneyEnvData}
              setShowCart={setShowCart}
            />
          </div>
        </div>
        {showCart && <ReactCart onClickfn={onAddCart} />}
      </div>
    </MainLayout>
  );
}

export default MoneyEnvelope;
