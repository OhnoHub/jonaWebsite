import React from "react";
import aidiaImg from "../assets/aidia.png";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-12 pt-8">
        <ProjectItem img={aidiaImg} title="AiDiA - The Lounge" />
      </div>
    </div>
  );
};

export default Projects;
