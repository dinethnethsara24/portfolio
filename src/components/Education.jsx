import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: 'BSc (Hons) in Computer Science',
      school: 'University of Bedfordshire',
      year: '2026 - 2027',
      details: ''
    },
    {
      degree: 'Higher Diploma in Information Technology',
      school: 'SLIIT CITY UNI',
      year: '2024 - 2026',
      details: ''
    },
    {
      degree: 'GCE Advanced Level',
      school: 'Kalutara Vidyalaya National School',
      year: '2021 - 2023',
      details: 'Completed in Maths Stream'
    }
  ];

  return (
    <div id="education">
      {/* Desktop View */}
      <section className="hidden md:flex section-container flex-col">
        <h2 className="section-title">Education</h2>
        <div className="relative max-w-[800px] mx-auto py-10 before:content-[''] before:absolute before:top-0 before:left-5 before:h-full before:w-[3px] before:bg-brutal-border dark:before:bg-white">
          {educationList.map((item, index) => (
            <div key={index} className="relative pl-[60px] mb-12 last:mb-0">
              <div className="absolute left-[8px] top-0 w-6 h-6 bg-white dark:bg-black border-[3px] border-brutal-border dark:border-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#FFFFFF] rounded-full z-10"></div>
              <div className="bg-brutal-bg dark:bg-[#33332d] border-brutal border-brutal-border dark:border-white shadow-brutal dark:shadow-dark-brutal p-6 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg dark:hover:shadow-dark-brutal-lg">
                <span className="inline-block font-mono font-bold text-sm px-2 py-1 border-2 border-brutal-border dark:border-white mb-4 bg-[#EEE] dark:bg-[#333] text-brutal-text dark:text-dark-text">{item.year}</span>
                <h3 className="text-2xl mb-1 dark:text-dark-subtext font-bold">{item.degree}</h3>
                <h4 className="font-mono font-normal text-gray-600 dark:text-dark-subtext mb-4">{item.school}</h4>
                <p className="mb-0 dark:text-dark-subtext">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden section-container flex-col py-10 px-4">
        <div className="w-full">
          <h2 className="section-title text-[27px] text-left mb-6 pb-2">Education</h2>
        </div>
        <div className="relative w-full py-[10px] before:content-[''] before:absolute before:top-0 before:left-[15px] before:h-full before:w-[2.25px] before:bg-brutal-border dark:before:bg-white">
          {educationList.map((item, index) => (
            <div key={index} className="relative pl-[45px] mb-[36px] last:mb-0">
              <div className="absolute left-[6px] top-0 w-[18px] h-[18px] bg-white dark:bg-black border-[2.25px] border-brutal-border dark:border-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#FFFFFF] rounded-full z-10"></div>
              <div className="bg-brutal-bg dark:bg-[#33332d] border-brutal border-brutal-border dark:border-white shadow-brutal dark:shadow-dark-brutal p-[18px] transition-transform active:-translate-x-0.5 active:-translate-y-0.5 active:shadow-brutal-lg dark:active:shadow-dark-brutal-lg">
                <span className="inline-block font-mono font-bold text-[10.5px] px-[6px] py-[3px] border-[1.5px] border-brutal-border dark:border-white mb-[12px] bg-[#EEE] dark:bg-[#333] text-brutal-text dark:text-dark-text">{item.year}</span>
                <h3 className="text-[18px] mb-[3px] dark:text-dark-subtext font-bold">{item.degree}</h3>
                <h4 className="font-mono font-normal text-[12px] text-gray-600 dark:text-dark-subtext mb-3">{item.school}</h4>
                <p className="mb-0 text-[12px] dark:text-dark-subtext">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
