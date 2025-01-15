import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoIosGitPullRequest } from "react-icons/io";
import ItemTec from "./ui/ItemTec";

export default function Technologies({ isDark }) {
  return (
    <div className="w-full md:w-1/2 mt-6 px-6">
      <p
        className={`text-3xl font-semibold ${
          isDark ? "text-secondary" : "text-text"
        } `}
      >
        Tecnologías
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <ItemTec isDark={isDark} icon={<FaHtml5 />} name="Html" />
        <ItemTec isDark={isDark} icon={<FaCss3Alt />} name="Css" />
        <ItemTec isDark={isDark} icon={<FaJs />} name="JavaScript" />
        <ItemTec isDark={isDark} icon={<RiTailwindCssFill />} name="Tailwind" />
        <ItemTec isDark={isDark} icon={<FaReact />} name="React" />
        <ItemTec isDark={isDark} icon={<RiNextjsFill />} name="Next" />
        <ItemTec isDark={isDark} icon={<IoIosGitPullRequest />} name="Git" />
      </div>
    </div>
  );
}
