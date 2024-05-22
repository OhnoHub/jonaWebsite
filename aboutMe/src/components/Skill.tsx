import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs, SiPrisma, SiVisualstudiocode } from "react-icons/si";
import { TbBrandNodejs, TbBrandVite } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div>
        <h1>Frontend</h1>
        <FaHtml5 className="cursor-pointer" size={20} />
        <FaCss3 className="cursor-pointer" size={20} />
        <BiLogoJavascript />
        <BiLogoTypescript />
        <FaReact />
        <SiNextdotjs />
      </div>
      <div>
        <h1>Backend</h1>
        <TbBrandNodejs />
        <SiExpress />
        <SiPrisma />
        <BiLogoPostgresql />
      </div>
      <div>
        <h1>Misc</h1>
        <FaFigma />
        <SiVisualstudiocode />
        <TbBrandVite />
      </div>
    </>
  );
};

export default Skill;
