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
    <section id="education" className="section-container">
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
  );
};

export default Education;
