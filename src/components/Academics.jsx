import { academicsArray } from "../data";

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Academics</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800 hidden sm:block" />

          <div className="space-y-8">
            {academicsArray.map((item) => (
              <div key={item.id} className="relative flex gap-6 group">
                {/* Logo circle */}
                <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-black border-2 border-indigo-500/40 items-center justify-center overflow-hidden z-10 group-hover:border-indigo-400 transition-colors">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500/30 p-6 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full w-fit">{item.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{item.institution}</p>
                  <p className="text-xs text-indigo-300 font-semibold mb-3">{item.grade}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}