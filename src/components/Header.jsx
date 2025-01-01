import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";

export default function Header({ isDark }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:pl-6 items-center md:gap-8 w-full md:w-1/2 ${
        isDark ? "text-gray-800" : "text-text"
      }`}
    >
      <div className="size-40 self-auto">
        <img
          className={`rounded-full ${isDark ? "bg-secondary" : "bg-text"}`}
          src="/perfil.png"
          alt="Perfil"
        />
      </div>
      <div className="space-y-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Kevin Jauregui Garcia
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
          Software Developer Jr
        </h2>
        <p className="flex justify-center md:justify-start">
          <TfiLocationPin className="text-xl my-auto" />
          Guadalajara, Mexico
        </p>
        <div className="space-x-2 m-auto">
          <button
            className={`border-2 ${
              isDark
                ? "border-secondary text-gray-700 hover:border-primary"
                : "border-primary text-text hover:border-secondary"
            } w-20 py-1 rounded-2xl transition-all`}
          >
            <IoMailOutline className="m-auto bg-transparent text-2xl" />
          </button>
          <button
            className={`border-2 ${
              isDark
                ? "border-secondary text-gray-700 hover:border-primary"
                : "border-primary text-text hover:border-secondary"
            } w-20 py-1 rounded-2xl transition-all`}
          >
            <IoDocumentTextOutline className="m-auto bg-transparent text-2xl" />
          </button>
          <button
            className={`border-2 ${
              isDark
                ? "border-secondary hover:border-primary text-gray-700"
                : "border-primary hover:border-secondary text-text"
            } w-20 py-1 rounded-2xl transition-all`}
          >
            <TbBrandGithub className="m-auto bg-transparent text-2xl" />
          </button>
          <button
            className={`border-2 ${
              isDark
                ? "border-secondary hover:border-primary text-gray-700"
                : "border-primary hover:border-secondary text-text"
            } w-20 py-1 rounded-2xl transition-all`}
          >
            <FaLinkedinIn className="m-auto bg-transparent text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
