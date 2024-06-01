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
        {!imgSrc && (
          <div className="emptyDiv">
            <img
              src={
                "https://ospreyinvites.com/cdn/shop/files/WL-02-mockup-jpeg.jpg?v=1715164214&width=360"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
        )}
        {imgSrc ? (
          <img src={imgSrc} className="card-img-top" alt="..." />
        ) : (
          <span></span>
        )}
      </div>
      <div className={`card-body ${cardBodyDiv}`}>
        <h5 className="card-title">{price > 0 ? `₹${price}/-` : "None"}</h5>
      </div>
    </div>
  );
};

export default ReactCard;
