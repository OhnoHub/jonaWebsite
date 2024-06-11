import React from "react";

interface ProjectItemProps {
  img: string;
  title: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title }) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-900">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-center pt-2 pb-4 text-center text-white">
          Start Up Radar
        </p>
        <a href="https://aidia.vercel.app/startup">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold courser-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
