import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charanimation from "./design/Charanimation";
import Wordanimation from "./design/Wordanimation";
import Lineanimation from "./design/Lineanimation";
import Mouseanimation from "./design/MouseAnimation";
import Cardanimation from "./design/Cardanimation";
import Buttonanimation from "./design/buttonanimation";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
