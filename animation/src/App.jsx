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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
