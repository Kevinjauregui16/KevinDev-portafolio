import { FaCode } from "react-icons/fa6";

export default function Experience({ isDark }) {
  return (
    <div
      className={`w-full md:w-1/2 mt-6 px-6 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <p className="text-3xl font-semibold">Experiencia</p>

      <div className="flex justify-start items-center">
        <FaCode className="text-3xl" />
        <div className="mx-4">
          <p className="text-xl font-bold">Solar Center</p>
          <p>Software Developer Jr</p>
        </div>
        <p className="text-sm">2024-Actualidad</p>
      </div>
    </div>
  );
}
