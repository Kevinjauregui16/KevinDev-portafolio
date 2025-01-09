import { useState } from "react";
import Header from "./components/Header";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";

export default function Page() {
  const [isDark, setIsDark] = useState(false); //si es false es light si es true es dark

  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        isDark
          ? "bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500"
          : "bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900"
      }`}
    >
      <div className="w-full flex justify-end mt-2 mr-6">
        <button
          className={`${
            isDark ? "text-gray-700" : "text-text"
          } text-2xl p-2 rounded-xl transition-transform duration-500 transform ${
            isDark ? "rotate-0" : "rotate-90"
          }`}
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? <MdOutlineDarkMode /> : <GoSun />}
        </button>
      </div>
      <Header isDark={isDark} />
      <AboutMe isDark={isDark} />
      <Technologies isDark={isDark} />
      <Experience isDark={isDark} />
    </div>
  );
}
