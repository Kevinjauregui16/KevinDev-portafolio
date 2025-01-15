import { TbSchool } from "react-icons/tb";

export default function Training({ isDark }) {
  return (
    <div
      className={`w-full md:w-1/2 mt-6 px-6 space-y-4 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <p className="text-3xl font-semibold">Formación</p>
      <div className="flex justify-start items-center">
        <TbSchool className="text-3xl" />
        <div className="mx-4">
          <p className="text-xl font-bold">Universidad UTEL</p>
          <p>Ingenieria en Sistemas Computacionales</p>
        </div>
        <p className="text-sm">2022-2025</p>
      </div>
    </div>
  );
}
