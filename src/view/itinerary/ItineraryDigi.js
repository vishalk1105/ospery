import React, { useState } from "react";
import ReactCard from "../../components/ReactCard";
import { digitalIllustraionData } from "../../data/itineraryData";
import UploadFile from "../../components/UploadFile";

const ItineraryDigi = ({ digiCrestPrice }) => {
  const [activeId, setActiveId] = useState([]);

  const onSelectCard = (id, value) => {
    setActiveId(id);
    digiCrestPrice(value);
  };

  return (
    <div className="row row-gap-3 my-1 px-2">
      {digitalIllustraionData.map((ele) => {
        return (
          <div className="col-4 col-lg-3 gx-3 " key={ele.id}>
            <ReactCard
              cardMainDiv={`envCardMainDiv ${
                activeId === ele.id ? "envCardMainDiv-active" : ""
              }`}
              imgSrc={ele.imgSrc}
              price={ele.price}
              cardimgDiv={"envImgDiv"}
              cardBodyDiv={`envCardBody `}
              onCardSelect={() => onSelectCard(ele.id, ele.price)}
            />
          </div>
        );
      })}

      <div className=" px-2">
        <div className="d-flex gap-2 justify-content-between border border-tertiory rounded-4">
          <div className="ps-3 mt-3 ">
            <p className="personTextHeader">Personalise illustrations</p>
            <p className="itiPrice">
              ₹ 3000/-
              <span> (add your own face) </span>
            </p>
          </div>
          <UploadFile />
        </div>
      </div>
    </div>
  );
};

export default ItineraryDigi;
