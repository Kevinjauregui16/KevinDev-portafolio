import { FaCode } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";

export default function ItemProyect({
  isDark,
  proyectName,
  tecnologies,
  imgName,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-start md:tems-center bg-gray-50 bg-opacity-15 w-full md:w-max px-4 py-4 md:py-2 rounded-2xl">
      <FaCode className="text-3xl" />
      <div className="mx-4 mt-2 md:mt-0">
        <p className="text-2xl font-bold">{proyectName}</p>
        <p>{tecnologies}</p>
        <div className="mt-2 space-x-3">
          <button
            className={`p-2 text-xl border-2 ${
              isDark ? "border-secondary" : "border-text"
            } rounded-2xl`}
          >
            <HiOutlineLink />
          </button>
          <button
            className={`p-2 text-xl border-2 ${
              isDark ? "border-secondary" : "border-text"
            } rounded-2xl`}
          >
            <TbBrandGithub />
          </button>
        </div>
      </div>
      <img src={imgName} alt="" className="w-40 h-40 mt-4 md:mt-0 md:ml-10" />
    </div>
  );
}
