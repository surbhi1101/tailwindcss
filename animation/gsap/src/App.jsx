import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/components.css";
import Box from "./Box";
import Herosection from "./Herosection";
import FeaturesCards from "./FeaturesCards";
import SplitText from "./SplitText";
import HorizontalScroll from "./Horizontalscroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/Herosection" element={<Herosection />} />
        <Route path="/FeaturesCards" element={<FeaturesCards />} />
        <Route path="/SplitText" element={<SplitText />} />
        <Route path="/HorizontalScroll" element={<HorizontalScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
