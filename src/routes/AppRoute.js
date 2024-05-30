import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoneyEnvelope from "../view/moneyEnvelop/MoneyEnvelope";
import WeddingInvVideo from "../view/weddingInvVideo/WeddingInvVideo";
import HamperNote from "../view/hamperNote/HamperNote";
import Itinerary from "../view/itinerary/Itinerary";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoneyEnvelope />} />
        <Route path="/wedding-video" element={<WeddingInvVideo />} />
        <Route path="/hamper-note" element={<HamperNote />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
