import React, { useState } from "react";
import Carousel from "@christian-martins/react-grid-carousel";
const ReactCarousel = ({ data, carousalImgClass, onClickImage }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <Carousel cols={4} rows={1} gap={20} loop>
        {data.map((ele) => (
          <Carousel.Item key={ele.id}>
            {ele.imgSrc && (
              <img
                className={`${
                  selectedId === ele.id
                    ? carousalImgClass + "-active"
                    : carousalImgClass
                }`}
                src={ele.imgSrc}
                alt=""
                onClick={() => handleClick(ele.id)}
              />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
