import React from "react";
import { weddingData } from "../../data/moneyEnevData";
import ReactCard from "../../components/ReactCard";
import ReactInput from "../../components/ReactInput";
const WeddingCrest = () => {
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
              cardBodyDiv={"envCardBody"}
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
