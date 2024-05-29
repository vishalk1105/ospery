import { useEffect, useRef, useState } from "react";

const bgImg = [
  "https://ospreyinvites.com/cdn/shop/files/WEB_BANNER_DESIGN-06-min_1.jpg?v=1689848358&width=3840",
  "https://ospreyinvites.com/cdn/shop/files/WEB_BANNER_DESIGN-07-min_1.jpg?v=1689848358&width=3840",
  "https://ospreyinvites.com/cdn/shop/files/WEB_BANNER_DESIGN-05-min_1.jpg?v=1689848358&width=3840",
];
const delay = 5000;

function ReactSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === bgImg.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {bgImg.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {bgImg.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ReactSlider;
