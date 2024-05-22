import React from "react";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const SkillItem = () => {
  return (
    <div>
      <FaHtml5 className="cursor-pointer" size={20} />
      <FaCss3 className="cursor-pointer" size={20} />

      <BiLogoTypescript />
    </div>
  );
};

export default SkillItem;
