import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import NoPage from "./pages/NoPage.js";
import "./index.css";
import ThemeToggle from "./components/ThemeToggle.js";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto p-4 rounded-t-md min-h-screen bg-gray-100 dark:bg-gray-800 relative transition-colors duration-300">
        <div className="absolute top-10 right-10">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
