import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import ButtonLink from "./ui/ButtonLink";
import "animate.css";

export default function Header({ isDark }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:pl-6 items-center md:gap-8 w-full md:w-1/2 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <div className="size-40 self-auto">
        <img
          className={`rounded-full ${isDark ? "bg-secondary" : "bg-text"}`}
          src="/perfil.png"
          alt="Perfil"
        />
      </div>
      <div className="md:space-y-1 text-center md:text-left">
        <h1 className="animate__animated animate__rubberBand text-3xl md:text-4xl font-bold">
          Kevin Jauregui Garcia
        </h1>
        <h2 className="animate__animated animate__bounceInDown text-xl md:text-2xl font-semibold">
          Software Developer Jr
        </h2>
        <p className="flex justify-center md:justify-start">
          <TfiLocationPin className="text-xl my-auto" />
          Guadalajara, Mexico.
        </p>
        <div
          className={`space-x-2 mt-3 flex ${
            isDark ? "text-secondary" : " text-text"
          }`}
        >
          <ButtonLink isDark={isDark} icon={<IoMailOutline />} />
          <ButtonLink isDark={isDark} icon={<IoDocumentTextOutline />} />
          <ButtonLink isDark={isDark} icon={<TbBrandGithub />} />
          <ButtonLink isDark={isDark} icon={<FaLinkedinIn />} />
        </div>
      </div>
    </div>
  );
}
