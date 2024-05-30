import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import ReactSlider from "../../components/ReactSlider";
import Title from "../../components/Title";
import ReactButton from "../../components/ReactButton";
import ReactAccordion from "../../components/ReactAccordion";
import { ItineraryData } from "../../data/itineraryData";
import { panels } from "../../data/moneyEnevData";

const Itinerary = () => {
  const [activeId, setActiveId] = useState(null);
  const selectPsc = (id) => {
    setActiveId(id);
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

  return (
    <MainLayout>
      <ReactSlider />
      <div className="container">
        <Title titleText={"Itinerary"} titleNameClass={"mt-5 mb-3"} />

        <div className="eneMaiDiv mb-5">
          <div className="priceOffDiv d-flex gap-5">
            <div className="priceLable">Rs 2000/-</div>
            <ReactButton btnClass={"offerDiv "} btnText={"% Offers"} />
          </div>

          <div className="qtyDiv d-flex justify-content-center">
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
            <ReactAccordion
              accContent={"contentOuterDiv"}
              accOuterClass="w-100"
              items={ItineraryData}
            />
          </div>
          <div className="px-4">
            <ReactAccordion
              items={panels}
              accordionBtn={"accCartBtn"}
              accContent={"cartContent"}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Itinerary;
