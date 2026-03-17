import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Who Am I?</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-[2] mt-10 text-md text-gray-800 dark:text-gray-200 ibm-plex-mono-semibold leading-loose tracking-wide">
          <p className="mb-6">
            Hi, I am Dineth Nethsara Peiris. I live in Kalutara. Currently, I am following the BSc. (Hons) in Computer Science degree programme from the University of Bedfordshire (UK).
            Previously, I completed a HND in Information Technology from SLIIT CITY UNI. Currently, I am seeking an internship opportunity to secure an entry into the software industry.
          </p>
          <p>
            When it comes to my academic timeline, I have done several projects both as a group and as an individual. Most of these projects are related to web development and mobile application development.
            The NS Store web application is one of the standout projects I completed as a group. In that project, I was the team leader and was responsible for the Frontend Development and User Management modules.
            The Smart Tech Store is another major project which I completed as an individual. Check below for further details!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 w-full">
          <div className="brutal-input brutal-shadow-card flex flex-col items-center justify-center py-6 hover:bg-[#82d2f7] group">
            <span className="font-mono text-4xl font-bold group-hover:text-black leading-none mb-2">3+</span>
            <span className="font-semibold uppercase text-sm group-hover:text-black">Years Exp</span>
          </div>
          <div className="brutal-input brutal-shadow-card flex flex-col items-center justify-center py-6 hover:bg-[#aeffda] group">
            <span className="font-mono text-4xl font-bold group-hover:text-black leading-none mb-2">10+</span>
            <span className="font-semibold uppercase text-sm group-hover:text-black">Projects</span>
          </div>
          <div className="brutal-input brutal-shadow-card flex flex-col items-center justify-center py-6 hover:bg-[#e693cb] group">
            <span className="font-mono text-4xl font-bold group-hover:text-black leading-none mb-2">100%</span>
            <span className="font-semibold uppercase text-sm group-hover:text-black">Coffee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
