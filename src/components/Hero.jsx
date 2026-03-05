import { userName, userTitle, userTagline } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{userName}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-4 font-medium">{userTitle}</p>
        <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">{userTagline}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-600/25">
            View My Work
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold transition-colors">
            Get in Touch
          </button>
        </div>

        <div className="mt-16 text-gray-600">
          <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
        </div>
      </div>
    </section>
  );
}