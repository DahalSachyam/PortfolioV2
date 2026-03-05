import { useState } from "react";
import { userName, userEmail } from "../data";

const links = ["About", "Projects", "Skills", "Academics", "Contact"];

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold text-white tracking-tight">
          {userName.split(" ")[0]}<span className="text-indigo-500">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              className={`text-sm font-medium transition-colors ${activeSection === l.toLowerCase() ? "text-indigo-400" : "text-gray-400 hover:text-white"}`}>
              {l}
            </button>
          ))}
          <a href={`mailto:${userEmail}`} className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-indigo-500 hover:bg-indigo-500 transition-colors">
            Email Me
          </a>
        </div>

        <button className="md:hidden text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 pb-4 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="block w-full text-left text-gray-300 hover:text-white py-2 text-sm">{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}