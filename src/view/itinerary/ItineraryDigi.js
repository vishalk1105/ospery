import React, { useState } from "react";
import ReactCard from "../../components/ReactCard";
import ReactInput from "../../components/ReactInput";
import { digitalIllustraionData } from "../../data/itineraryData";
import UploadFile from "../../components/UploadFile";

const ItineraryDigi = () => {
  const [activeId, setActiveId] = useState([]);

  const onSelectCard = (id) => {
    const updatedActiveIds = [...activeId];
    if (activeId.includes(id)) {
      const index = updatedActiveIds.indexOf(id);
      updatedActiveIds.splice(index, 1);
    } else {
      updatedActiveIds.push(id);
    }
    setActiveId(updatedActiveIds);
  };

  return (
    <div className="row row-gap-3 my-4">
      {digitalIllustraionData.map((ele) => {
        return (
          <div className="col-4 col-lg-3" key={ele.id}>
            <ReactCard
              cardMainDiv={"envCardMainDiv"}
              imgSrc={ele.imgSrc}
              price={ele.price}
              cardimgDiv={"envImgDiv"}
              cardBodyDiv={`envCardBody ${
                activeId.includes(ele.id) ? "envCardBody-active" : ""
              }`}
              onCardSelect={() => onSelectCard(ele.id)}
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
