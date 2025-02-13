import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import NoPage from "./pages/NoPage.js";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
