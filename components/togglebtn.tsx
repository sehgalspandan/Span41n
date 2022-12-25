import { useState } from "react";

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className={`w-10 h-10 rounded-full focus:outline-none ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      {isDarkMode ? (
        <img src="/moon.svg" alt="Dark mode" className="w-5 h-5" />
      ) : (
        <img src="/sun.svg" alt="Light mode" className="w-5 h-5" />
      )}
    </button>
  );
};

export default ToggleButton;
