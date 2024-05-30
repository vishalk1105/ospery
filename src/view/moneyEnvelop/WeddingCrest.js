import React, { useState } from "react";
import { weddingData } from "../../data/moneyEnevData";
import ReactCard from "../../components/ReactCard";
import ReactInput from "../../components/ReactInput";
const WeddingCrest = () => {
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
      {weddingData.map((ele) => {
        return (
          <div className="col-4" key={ele.id}>
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
      <ReactInput
        placeholder={"Please enter your initals here"}
        inputClassName={"p-3"}
      />
    </div>
  );
};

export default WeddingCrest;
