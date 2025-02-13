import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import NoPage from "./pages/NoPage.js";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
