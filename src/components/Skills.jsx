import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: 'Core Languages',
      hoverBgColor: 'hover:bg-[#ffb6b9]',
      activeBgColor: 'active:bg-[#ffb6b9]',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M8 10l-2 2 2 2M16 10l2 2-2 2" />
          <path d="M6 21h12" />
        </svg>
      ),
      skills: ['JavaScript (ES6+)', 'PHP', 'Java', 'C++', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend & UI',
      hoverBgColor: 'hover:bg-[#aeffda]',
      activeBgColor: 'active:bg-[#aeffda]',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <rect x="13" y="13" width="4" height="4" />
        </svg>
      ),
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Figma']
    },
    {
      title: 'Backend & Logic',
      hoverBgColor: 'hover:bg-[#82d2f7]',
      activeBgColor: 'active:bg-[#82d2f7]',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
          <circle cx="12" cy="2" r="2" />
          <circle cx="12" cy="22" r="2" />
          <circle cx="2" cy="12" r="2" />
          <circle cx="22" cy="12" r="2" />
        </svg>
      ),
      skills: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      title: 'Database & Storage',
      hoverBgColor: 'hover:bg-[#e693cb]',
      activeBgColor: 'active:bg-[#e693cb]',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      ),
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      hoverBgColor: 'hover:bg-[#fff07c]',
      activeBgColor: 'active:bg-[#fff07c]',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          <path d="M12 7v15" />
        </svg>
      ),
      skills: ['Git & GitHub', 'IntelliJ IDEA', 'Power BI', 'Vercel', 'Postman', 'RStudio']
    }
  ];

  return (
    <div id="skills">
      {/* Desktop View */}
      <section className="hidden md:flex section-container flex-col">
        <h2 className="section-title">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {categories.map((category, index) => (
            <div key={index} className={`bg-brutal-bg dark:bg-dark-bg ${category.hoverBgColor || ''} border-brutal border-brutal-border dark:border-white p-6 brutal-shadow-card flex flex-col transition-colors group`}>
              <h3 className="font-mono font-bold text-xl lg:text-2xl mb-6 flex items-center gap-3 text-brutal-text dark:text-dark-subtext border-b-2 border-brutal-border dark:border-white pb-3 dark:group-hover:text-black">
                <span className="flex items-center justify-center">{category.icon}</span> {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="hit-area-fix font-mono text-sm font-semibold bg-brutal-gray dark:bg-[#333] border-[2px] border-brutal-border dark:border-white px-3 py-1.5 text-brutal-text dark:text-dark-text shadow-brutal-sm dark:shadow-dark-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden section-container flex-col px-4 py-10">
        <div className="w-full">
          <h2 className="section-title text-[27px] text-left mb-6 pb-2">Tech Stack</h2>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {categories.map((category, index) => {
            const activeBgClass = category.activeBgColor || '';
            return (
              <div key={index} className={`bg-brutal-bg dark:bg-dark-bg ${activeBgClass} border-brutal border-brutal-border dark:border-white p-[18px] brutal-shadow-card flex flex-col transition-colors group`}>
                <h3 className="font-mono font-bold text-[15px] mb-4 flex items-center gap-2 text-brutal-text dark:text-dark-subtext border-b-2 border-brutal-border dark:border-white pb-2 dark:group-active:text-black">
                  <span className="flex items-center justify-center scale-75">{category.icon}</span> {category.title}
                </h3>
                <div className="flex flex-wrap gap-[9px]">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="hit-area-fix font-mono text-[10.5px] font-semibold bg-brutal-gray dark:bg-[#333] border-[2px] border-brutal-border dark:border-white px-[9px] py-[4.5px] text-brutal-text dark:text-dark-text shadow-brutal-sm dark:shadow-dark-brutal-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;