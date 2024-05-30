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
        {imgSrc ? (
          <img src={imgSrc} className="card-img-top" alt="..." />
        ) : (
          <span></span>
        )}
      </div>
      <div className={`card-body ${cardBodyDiv}`}>
        <h5 className="card-title">{price}</h5>
      </div>
    </div>
  );
};

export default ReactCard;
