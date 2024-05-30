import React from "react";

const Title = ({ titleText, titleNameClass }) => {
  return <h2 className={`cardTitle ${titleNameClass}`}>{titleText}</h2>;
};

export default Title;
