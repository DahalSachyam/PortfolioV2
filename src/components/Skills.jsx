import { useState } from "react";
import { skillsArray } from "../data";

export default function Skills() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (name) => {
    setActiveId(activeId === name ? null : name);
  };

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2">My Toolbox</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
          <p className="text-gray-500 text-sm mt-4">Hover on a skill to see details</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {skillsArray.map((skill) => {
            const isActive = activeId === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => toggle(skill.name)}
                onMouseEnter={() => setActiveId(skill.name)}
                onMouseLeave={() => setActiveId(null)}
                className="relative cursor-pointer group"
              >
                {/* Card */}
                <div
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-gray-800 border-indigo-500 shadow-lg shadow-indigo-500/10 scale-105"
                      : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {/* Icon */}
                  <div className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <p className="mt-3 text-sm font-semibold text-white text-center">{skill.name}</p>

                  {/* Color accent bar */}
                  <div
                    className="mt-3 h-0.5 rounded-full transition-all duration-500"
                    style={{
                      width: isActive ? "80%" : "0%",
                      backgroundColor: skill.color,
                    }}
                  />

                  {/* Details tooltip */}
                  <div
                    className={`overflow-hidden transition-all duration-300 text-center ${
                      isActive ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-xs text-gray-400 leading-relaxed">{skill.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}