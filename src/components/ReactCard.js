import React from "react";

const ReactCard = ({
  onCardSelect,
  cardBodyDiv,
  cardMainDiv,
  imgSrc,
  price,
  key,
  cardimgDiv,
}) => {
  return (
    <div className={`card ${cardMainDiv}`} onClick={onCardSelect} key={key}>
      <div className={`${cardimgDiv}`}>
        {price === 0 && (
          <div className="emptyDiv">
            {<img src={imgSrc} className="card-img-top emptyImg" alt="..." />}
          </div>
        )}
        {imgSrc && price > 0 ? (
          <img src={imgSrc} className="card-img-top" alt="..." />
        ) : (
          <span></span>
        )}
      </div>
      <div className={`card-body ${cardBodyDiv}`}>
        <h5 className="card-title">{price > 0 ? `Rs ${price}/-` : "None"}</h5>
      </div>
    </div>
  );
};

export default ReactCard;
