import useDarkMode from "../hooks/useDarkMode";
import { ToggleLeft, ToggleRight } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-blue-600 dark:bg-gray-800 text-gray-900 dark:text-white transition-all shadow-lg"
    >
      {darkMode ? (
        <ToggleLeft size={24} color="white" />
      ) : (
        <ToggleRight size={24} color="white" />
      )}
    </button>
  );
};

export default ThemeToggle;
