import { useEffect, useState } from "react";

const technologies = [
  { name: "C#", level: 85 },
  { name: ".NET", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 82 },
  { name: "PHP", level: 75 },
  { name: "Laravel", level: 78 },
  { name: "MySQL", level: 80 },
  { name: "MongoDB", level: 70 },
];

const TechnicalProfile = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    setSelectedTechnology(technologies[0]);
  }, []);

  return (
    <section className="min-h-[600px] bg-[#080808] px-6 py-10 text-white md:px-12">

      {/* Header */}
      <div className="mb-10 border-b border-red-950/70 pb-5">
        <p className="font-mono text-[10px] tracking-[0.35em] text-red-600">
          TECHNICAL DATABASE // IO-01
        </p>

        <h2 className="mt-2 font-mono text-2xl tracking-[0.2em]">
          TECHNICAL PROFILE
        </h2>

        <p className="mt-3 max-w-2xl font-mono text-xs leading-6 text-gray-500">
          Technical analysis of current programming knowledge,
          development tools and systems experience.
        </p>
      </div>

      {/* Technologies */}
      <div className="grid gap-10 md:grid-cols-2">

        {/* Radar provisional */}
        <div className="flex min-h-[350px] items-center justify-center border border-red-950/60 bg-black/40 p-6">
          <div className="relative h-64 w-64">

            {/* Radar rings */}
            <div className="absolute inset-0 rounded-full border border-red-900/60" />
            <div className="absolute inset-[12%] rounded-full border border-red-900/50" />
            <div className="absolute inset-[24%] rounded-full border border-red-900/40" />
            <div className="absolute inset-[36%] rounded-full border border-red-900/30" />

            {/* Cross */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-red-950/60" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-red-950/60" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700 shadow-[0_0_15px_rgba(180,0,0,0.8)]" />

            {/* Technology points */}
            {technologies.map((technology, index) => {
              const angle =
                (index / technologies.length) * Math.PI * 2;

              const radius =
                35 + (technology.level / 100) * 80;

              const x =
                Math.cos(angle) * radius;

              const y =
                Math.sin(angle) * radius;

              return (
                <button
                  key={technology.name}
                  type="button"
                  onClick={() => setSelectedTechnology(technology)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-gray-400 transition hover:text-red-500"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {technology.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Analysis */}
        <div className="border border-red-950/60 bg-black/40 p-6">

          <p className="font-mono text-[10px] tracking-[0.3em] text-red-600">
            SELECTED TECHNOLOGY
          </p>

          {selectedTechnology && (
            <>
              <h3 className="mt-4 font-mono text-xl tracking-[0.15em]">
                {selectedTechnology.name}
              </h3>

              <div className="mt-6">
                <div className="mb-2 flex justify-between font-mono text-[10px] text-gray-500">
                  <span>PROFICIENCY</span>
                  <span>{selectedTechnology.level}%</span>
                </div>

                <div className="h-1 bg-gray-900">
                  <div
                    className="h-full bg-red-700 transition-all duration-500"
                    style={{
                      width: `${selectedTechnology.level}%`,
                    }}
                  />
                </div>
              </div>

              <p className="mt-8 font-mono text-xs leading-7 text-gray-500">
                Technical knowledge acquired through academic training,
                personal projects and practical development experience.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="mt-10 border border-red-950/60 bg-black/40 p-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-red-600">
          EDUCATION
        </p>

        <div className="mt-5 space-y-5 font-mono">
          <div>
            <p className="text-sm text-white">
              Técnico Universitario en Programación
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Universidad Tecnológica Nacional
            </p>
          </div>

          <div>
            <p className="text-sm text-white">
              Ingeniería de Software
            </p>
            <p className="mt-1 text-xs text-gray-600">
              En curso
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechnicalProfile;