import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charanimation from "./design/Charanimation";
import Wordanimation from "./design/Wordanimation";
import Lineanimation from "./design/Lineanimation";
import Mouseanimation from "./design/MouseAnimation";
import Cardanimation from "./design/Cardanimation";
import Buttonanimation from "./design/buttonanimation";
import CanvasAnimation from "./design/CanvasAnimation";
import SplitTextAnimation from "./design/SplitTextAnimation";
import Cursordriven from "./design/Cursordriven";
import MorphTransition from "./design/MorphTransition";
import SwipePreview from "./design/SwipePreview";
import Gallery from "./design/Gallery";
import SendButton from "./design/button animation/SendButton";
import NotAllowedButton from "./design/button animation/NotAllowedButton";
import FancyButton from "./design/button animation/FancyButton";
import BuyButton from "./design/button animation/BuyButton";
import Explorebtn from "./design/button animation/ExploreButton";
import Hoverfill from "./design/button animation/HoverFillButton";
import HoverCard from "./design/cardanimation/HoverCard";
import ProfileCard from "./design/cardanimation/ProfileCard";
import FlipCards from "./design/cardanimation/FlipCards";
import ProductCard from "./design/cardanimation/ProductCard";
import TeamCard from "./design/cardanimation/TeamCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Charanimation />} />
        <Route path="/wordanimation" element={<Wordanimation />} />
        <Route path="/lineanimation" element={<Lineanimation />} />
        <Route path="/mouseanimation" element={<Mouseanimation />} />
        <Route path="/cardanimation" element={<Cardanimation />} />
        <Route path="/buttonanimation" element={<Buttonanimation />} />
        <Route path="/canvasAnimation" element={<CanvasAnimation />} />
        <Route path="/splitTextAnimation" element={<SplitTextAnimation />} />
        <Route path="/cursordriven" element={<Cursordriven />} />
        <Route path="/morphTransition" element={<MorphTransition />} />;
        <Route path="/swipePreview" element={<SwipePreview />} />;
        <Route path="/Gallery" element={<Gallery />} />;
        <Route path="/SendButton" element={<SendButton />} />;
        <Route path="/NotAllowedButton" element={<NotAllowedButton />} />;
        <Route path="/FancyButton" element={<FancyButton />} />;
        <Route path="/BuyButton" element={<BuyButton />} />;
        <Route path="/Explorebtn" element={<Explorebtn />} />;
        <Route path="/Hoverfill" element={<Hoverfill />} />;
        <Route path="/HoverCard" element={<HoverCard />} />;
        <Route path="/ProfileCard" element={<ProfileCard />} />;
        <Route path="/FlipCards" element={<FlipCards />} />;
        <Route path="/ProductCard" element={<ProductCard />} />;
        <Route path="/TeamCard" element={<TeamCard />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
