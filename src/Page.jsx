import { useState } from "react";
import Header from "./components/header";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";

export default function Page() {
  const [isDark, setIsDark] = useState(false); //si es false es light si es true es dark

  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        isDark ? "bg-white" : "bg-background"
      }`}
    >
      <div className="w-full flex justify-end mt-3 md:mt-6 mr-6 md:mr-12">
        <button
          className={`${
            isDark ? "bg-white" : "bg-background text-text"
          } text-2xl p-2 rounded-xl`}
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? <MdOutlineDarkMode /> : <GoSun />}
        </button>
      </div>
      <Header isDark={isDark} />
    </div>
  );
}
