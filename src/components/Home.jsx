import React from 'react';
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
  return (
    <section id="home" className="section-container flex flex-col md:flex-row justify-between items-center relative overflow-hidden min-h-[calc(100vh-80px)] mt-[10px]">
      <div className="flex-1 max-w-[1800px] z-10">
        <h1 className="text-3xl md:text-4xl font-mono leading-tight mb-8 uppercase text-brutal-text dark:text-dark-text font-bold">
          Hi,Welcome to my portfolio
        </h1>
        <h2 className="text-xl md:text-2xl font-mono leading-tight mb-8 uppercase text-brutal-text dark:text-dark-subtext font-bold">
          I'm {' '}
          <TypeAnimation
            sequence={[
              'Dineth Nethsara',
              2000,
              'a Full Stack Developer',
              2000,
              'an AI/ML Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-lg mb-12 max-w-[500px] font-medium text-brutal-text dark:text-dark-text">
          A passionate Full-Stack Developer and Problem Solver with a growing interest in AI and Machine Learning. Currently pursuing a BSc (Hons) in Computer Science Degree programme after completing a Higher Diploma at SLIIT City UNI, I focus on building scalable web applications and innovative software solutions. I am dedicated to bridging the gap between clean, efficient code and intelligent, data-driven experiences.        </p>
        <div className="flex gap-5">
          <button className="brutal-input brutal-shadow-btn font-bold text-lg hover:bg-[#b2bbf0] hover:text-black" onClick={() => document.getElementById('projects').scrollIntoView()}>View Projects</button>
          <button className="brutal-input brutal-shadow-btn font-bold text-lg bg-brutal-gray dark:bg-[#333] hover:bg-[#aeffda] hover:text-black" onClick={() => document.getElementById('contact').scrollIntoView()}>Contact Me</button>
        </div>
      </div>
      <div className="flex-1 flex justify-end relative mt-10 md:mt-0">
        <img src="/my_image_lightn.png" alt="My Profile" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover bg-brutal-bg dark:bg-dark-bg border-brutal border-brutal-border dark:border-white shadow-brutal-xl dark:shadow-dark-brutal-xl rotate-6 hover:rotate-0 transition-transform duration-300" />
      </div>
    </section>
  );
};

export default Home;
