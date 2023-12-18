import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "fab fa-html5",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:hover:bg-red-500",
    },
    {
      logo: "fab fa-css3-alt",
      level: "advance",
      count: 86,
      color: "text-blue-500",
      bgColor: "hover:bg-blue-500",
    },
    {
      logo: "fab fa-js-square",
      level: "advance",
      count: 86,
      color: "text-yellow-500",
      bgColor: "hover:bg-yellow-500",
    },
    {
      logo: "fab fa-react",
      level: "advance",
      count: 86,
      color: "text-blue-500",
      bgColor: "hover:bg-blue-500",
    },
    {
      logo: "fab fa-node",
      level: "advance",
      count: 86,
      color: "text-green-500",
      bgColor: "hover:bg-green-500",
    },
    {
      logo: "fab fa-npm",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      logo: "fab fa-git-alt",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      logo: "fab fa-github",
      level: "advance",
      count: 86,
      color: "text-black",
      bgColor: "hover:bg-black",
    },
    {
      logo: "fab fa-sass",
      level: "advance",
      count: 86,
      color: "text-pink-500",
      bgColor: "hover:bg-pink-500",
    },
    {
      logo: "fab fa-bootstrap",
      level: "advance",
      count: 86,
      color: "text-purple-500",
      bgColor: "hover:bg-purple-500",
    },
    {
      logo: "fab fa-php",
      level: "advance",
      count: 86,
      color: "text-blue-500",
      bgColor: "hover:bg-blue-500",
    },
    {
      logo: "fab fa-laravel",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      logo: "fab fa-python",
      level: "advance",
      count: 86,
      color: "text-yellow-500",
      bgColor: "hover:bg-yellow-500",
    },
    {
      logo: "fab fa-java",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      logo: "fab fa-android",
      level: "advance",
      count: 86,
      color: "text-green-500",
      bgColor: "hover:bg-green-500",
    },
    {
      logo: "fab fa-apple",
      level: "advance",
      count: 86,
      color: "text-black",
      bgColor: "hover:bg-black",
    },
    {
      logo: "fab fa-linux",
      level: "advance",
      count: 86,
      color: "text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      logo: "fab fa-windows",
      level: "advance",
      count: 10,
      color: "text-blue-500",
      bgColor: "hover:bg-blue-500",
    },
  ];
  return (
    <section className="bg-gray-800 h-screen py-8">
      <div className=" flex flex-col   text-center py-4">
        <h1 className="text-4xl font-bold text-cyan-400 py-4">
          {" "}
          My <span className="text-white">Skills </span>{" "}
        </h1>
        <p className="text-gray-100"> My Knowledge</p>
      </div>
      <div
        className={`  gap-y-5 hover  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6   `}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.bgColor} ${skill.color} cursor-pointer text-6xl hover:text-white w-24 h-24 hover:animate-pulse  rounded-full bg-slate-300 flex justify-self-center justify-center items-center`}
          >
            <i className={`${skill.logo}`}></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
