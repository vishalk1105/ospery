import React, { useState } from "react";
import { weddingData } from "../../data/moneyEnevData";
import ReactCard from "../../components/ReactCard";
import ReactInput from "../../components/ReactInput";
const WeddingCrest = ({ priceFromwedCrest }) => {
  const [activeId, setActiveId] = useState(1);

  const onSelectCard = (id, price) => {
    setActiveId(id);
    priceFromwedCrest(price);
  };

  return (
    <div className="row row-gap-3  my-4">
      {weddingData.map((ele) => {
        return (
          <div className="col-4 col-lg-3 wedCrestCard" key={ele.id}>
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
      <ReactInput
        placeholder={"Please enter your initals here"}
        inputClassName={"p-3"}
      />
    </div>
  );
};

export default WeddingCrest;
