import { FaCss3, FaFigma, FaHtml5 } from "react-icons/fa";
import {
  BiLogoGit,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiExpress,
  SiNextdotjs,
  SiPrettier,
  SiPrisma,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandNodejs, TbBrandVite } from "react-icons/tb";

const Skill = () => {
  return (
    <div id="skill" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center pb-8">Techstack</h1>
      <h2 className="text-2xl font-bold">Frontend:</h2>
      <div className="flex gap-4 mt-2 mb-4">
        <FaHtml5
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <FaCss3
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiTailwindcss
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <BiLogoJavascript
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <BiLogoTypescript
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <BiLogoReact
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiNextdotjs
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
      </div>
      <h1 className="text-2xl font-bold">Backend:</h1>
      <div className="flex gap-4 mt-2 mb-4">
        <TbBrandNodejs
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiExpress
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiPrisma
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <BiLogoPostgresql
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
      </div>
      <h1 className="text-2xl font-bold">Misc:</h1>
      <div className="flex gap-4 mt-2 mb-4">
        <FaFigma
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <BiLogoGit
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiVisualstudiocode
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <SiPrettier
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
        <TbBrandVite
          className="cursor-pointer hover:scale-110 ease-in duration-300"
          size={35}
        />
      </div>
    </div>
  );
};

export default Skill;
