import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import ReactSlider from "../../components/ReactSlider";
import Title from "../../components/Title";
import ReactButton from "../../components/ReactButton";
import ReactAccordion from "../../components/ReactAccordion";
import { MoneyEnvData } from "../../data/moneyEnevData";
import ReactCart from "../../components/ReactCart";
function MoneyEnvelope() {
  const [activeId, setActiveId] = useState("20env");
  const [crestPrice, setCrestPrice] = useState(0);
  const [qty, setQty] = useState(20);
  const selectPsc = (id, value) => {
    setActiveId(id);
    setQty(value);
  };
  const priceFromwedCrest = (data) => {
    setCrestPrice(data);
  };

  const btnData = [
    {
      id: "20env",
      value: 20,
      text: "20 pcs",
    },
    {
      id: "50env",
      value: 50,
      text: "50 pcs",
    },
    {
      id: "100env",
      value: 100,
      text: "100 pcs",
    },
  ];

  const onAddCart = () => {
    console.log("Added to Cart");
  };

  return (
    <MainLayout>
      <div className="sliderDiv">
        <ReactSlider />
      </div>
      <div className="container">
        <Title titleText={"Money Envelope"} titleNameClass={"mt-5 mb-3"} />

        <div className="eneMaiDiv mb-5">
          <div className="priceOffDiv d-flex gap-5">
            <div className="priceLable">Rs 2000/-</div>
            <ReactButton btnClass={"offerDiv "} btnText={"% Offers"} />
          </div>

          <div className="qtyDiv  d-flex justify-content-center">
            <div className="qtyTitle me-2">Quantity:</div>
            {btnData.map((ele) => (
              <ReactButton
                key={ele.id}
                id={ele.id}
                reactBtnOuterDiv="reactBtnOuterDiv"
                btnClass={`pcsBtn ${activeId === ele.id ? "pcs-active" : ""}`}
                btnValue={ele.value}
                btnText={ele.text}
                onClickfn={() => selectPsc(ele.id, ele.value)}
              />
            ))}
          </div>
          <div className="accDiv">
            <div className="addOn me-4 mb-2 text-left">Add ons :</div>
            <ReactAccordion
              accContent={"contentOuterDiv"}
              accOuterClass="w-100"
              items={MoneyEnvData}
              priceFromwedCrest={priceFromwedCrest}
            />
          </div>
        </div>
      </div>
      <ReactCart qty={qty} onClickfn={onAddCart} wedCrestPrice={crestPrice} />
    </MainLayout>
  );
}

export default MoneyEnvelope;
