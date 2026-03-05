import { useState } from "react";
import { projectsArray } from "../data";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2">What I've Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>

        {/* Featured — ElectroMart (full width) */}
        <div className="mt-12">
          {projectsArray.filter((p) => p.id === 1).map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500/50 overflow-hidden transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                {/* Visual side */}
                <div className={`relative h-64 md:h-auto bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="text-8xl md:text-9xl select-none opacity-80 group-hover:scale-110 transition-transform duration-500">{p.emoji}</div>
                  {/* Decorative floating elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border border-white/20 rounded-lg rotate-12" />
                  <div className="absolute bottom-8 right-8 w-10 h-10 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/10 rounded-md -rotate-6" />
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wide">
                    FEATURED
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.21 3.438 9.63 8.205 11.188.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects — 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {projectsArray.filter((p) => p.id !== 1).map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500/50 overflow-hidden transition-all duration-300"
            >
              {/* Gradient header with emoji */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="text-7xl select-none opacity-80 group-hover:scale-110 transition-transform duration-500">{p.emoji}</div>
                {/* Decorative shapes */}
                <div className="absolute top-4 left-4 w-12 h-12 border border-white/20 rounded-lg rotate-12" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border border-white/20 rounded-full" />

                {/* Hover overlay with links */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300"
                  style={{ backgroundColor: hoveredId === p.id ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)" }}
                >
                  {hoveredId === p.id && (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.21 3.438 9.63 8.205 11.188.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}