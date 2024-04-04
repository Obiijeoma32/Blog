import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import Write from "./Component/Write";
import TopArticles from "./Component/TopArticles";
import People from "./Component/People";
import Place from "./Component/Place";
import Business from "./Component/Business";
import Inn from "./Component/Inn";
import "./App.css";
import Individuals from "./Component/Individuals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/toparticles" element={<TopArticles />} />
          <Route path="/people" element={<People />} />
          <Route path="/place" element={<Place />} />
          <Route path="/business" element={<Business />} />
          <Route path="/inn" element={<Inn />} />
          <Route path="/individual" element={<Individuals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
