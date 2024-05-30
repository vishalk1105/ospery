import React from "react";
import MainLayout from "../../layout/MainLayout";
import ReactSlider from "../../components/ReactSlider";
import Title from "../../components/Title";
import ReactButton from "../../components/ReactButton";
import ReactAccordion from "../../components/ReactAccordion";
import ReactCart from "../../components/ReactCart";
import { WeddingVideoData } from "../../data/weddingVedio";

const WeddingInvVideo = () => {
  return (
    <MainLayout>
      <ReactSlider />
      <div className="container">
        <Title
          titleText={"Wedding Invite Video"}
          titleNameClass={"mt-5 mb-3"}
        />

        <div className="eneMaiDiv mb-5">
          <div className="priceOffDiv d-flex gap-5">
            <div className="priceLable">Rs 2000/-</div>
            <ReactButton btnClass={"offerDiv "} btnText={"% Offers"} />
          </div>

          <div className="qtyDiv gap-5 d-flex justify-content-center">
            <div className="wedInvoffer">
              Includes Intro page + 1 function page
            </div>
          </div>
          <div className="accDiv">
            <ReactAccordion
              accContent={"contentOuterDiv"}
              accOuterClass="w-100"
              items={WeddingVideoData}
            />
          </div>
        </div>
        <ReactCart />
      </div>
    </MainLayout>
  );
};

export default WeddingInvVideo;
