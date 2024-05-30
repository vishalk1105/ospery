import ReactCarousel from "../../components/ReactCarousel";
import ReactInput from "../../components/ReactInput";
import { page3data } from "../../data/weddingVedio";

const Page3 = () => {
  return (
    <div className="mb-3">
      <ReactCarousel data={page3data} carousalImgClass={"page3Images"} />
      <ReactInput
        placeholder={"Please enter your details here"}
        inputClassName={"p-3 my-2 mt-3 mx-4"}
      />
    </div>
  );
};

export default Page3;
