const SocialLinks = () => {
  const links = [
    {
      name: "GITHUB",
      description: "SOURCE CODE // PROJECTS",
      url: "https://github.com/IanOliva",
    },
    {
      name: "LINKEDIN",
      description: "PROFESSIONAL NETWORK",
      url: "https://www.linkedin.com/",
    },
  ];

  return (
    <section className="min-h-[500px] bg-[#080808] px-6 py-10 text-white md:px-12">

      {/* Header */}
      <div className="mb-10 border-b border-red-950/70 pb-5">
        <p className="font-mono text-[10px] tracking-[0.35em] text-red-600">
          EXTERNAL NETWORK // IO-01
        </p>

        <h2 className="mt-2 font-mono text-2xl tracking-[0.2em]">
          EXTERNAL CONNECTIONS
        </h2>

        <p className="mt-3 max-w-2xl font-mono text-xs leading-6 text-gray-500">
          External communication channels and professional network
          connections.
        </p>
      </div>

      {/* Links */}
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-red-950/60 bg-black/40 p-6 transition duration-300 hover:border-red-700 hover:bg-red-950/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-lg tracking-[0.2em] text-white transition group-hover:text-red-500">
                  {link.name}
                </p>

                <p className="mt-2 font-mono text-[10px] tracking-[0.15em] text-gray-600">
                  {link.description}
                </p>
              </div>

              <span className="font-mono text-red-700 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default SocialLinks;