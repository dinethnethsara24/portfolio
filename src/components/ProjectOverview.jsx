import React, { useState, useEffect } from 'react';
import Header from './Header';

const ProjectOverview = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brutal-bg dark:bg-dark-bg overflow-y-auto w-full h-full min-h-screen">
      <Header onClose={onClose} />

      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 relative pt-32">
        {/* Close Button */}
        {/* <button 
          onClick={onClose} 
          className="absolute top-24 right-6 font-mono font-bold text-brutal-text transition-all duration-200 bg-[#ffb6b9] px-4 py-2 border-[3px] border-brutal-border shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none z-50 text-sm sm:text-base"
        >
          CLOSE
        </button> */}

        <div className="lg:w-[50%] flex flex-col pt-8">

          {/* Ribbon */}
          <div className="flex items-center mb-8 h-10 md:h-12 font-mono font-bold">

            {/* First Arrow: "Portfolio" */}
            <a href="#projects" onClick={onClose} className="flex h-full cursor-pointer group">
              {/* arrow__rectangle */}
              <div className="flex items-center px-4 md:px-6 bg-[#b2bbf0] text-[#33332d] sm:text-lg">
                <span className='font-mono'><a href="#projects" onClick={onClose}>Portfolio</a></span>
              </div>
              {/* arrow__point */}
              <div
                className="w-5 h-full bg-[#b2bbf0]"
                style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
              ></div>
            </a>

            {/* Second Arrow: {project.title} */}
            <div className="flex h-full -ml-5">
              {/* The cut-out for the previous arrow's point */}
              <div
                className="w-5 h-full bg-[#33332d] dark:bg-white"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 100% 50%)' }}
              ></div>

              {/* arrow__rectangle */}
              <div className="flex items-center pr-4 pl-2 bg-[#33332d] dark:bg-white text-white dark:text-black truncate text-sm sm:text-base max-w-[200px] md:max-w-[300px]">
                {project.title}
              </div>

              {/* arrow__point */}
              <div
                className="w-5 h-full bg-[#33332d] dark:bg-white"
                style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
              ></div>
            </div>
          </div>


          {/* Project Title */}
          <h1 className="font-mono text-2xl md:text-3xl font-extrabold mb-8 text-brutal-text dark:text-dark-text tracking-tight uppercase border-b-[4px] border-brutal-border dark:border-white pb-4 w-fit pr-8">
            {project.title}
          </h1>

          {/* Project Description */}
          <div className="font-mono text-sm md:text-base text-brutal-text dark:text-dark-subtext leading-relaxed mb-10 prose prose-p:mb-4 prose-li:mb-1">
            {project.detailedDescription || (
              <p>
                In this section, we take a deeper dive into the features and implementation of <strong>{project.title}</strong>.
                <br /><br />
                This project showcases practical application of {project.tech.join(', ')} and focuses on modern web application development principles.
              </p>
            )}
          </div>

          {/* Skills Gained */}
          <h3 className="font-mono text-2xl font-bold mb-5 text-brutal-text dark:text-dark-text border-b-[3px] border-brutal-border dark:border-white pb-2 w-fit pr-6">
            Skills Gained
          </h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {(project.learnedSkills || project.tech).map((skill, idx) => (
              <span key={idx} className="font-mono text-sm md:text-base font-bold bg-[#fff07c] dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <h3 className="font-mono text-2xl font-bold mb-5 text-brutal-text dark:text-dark-text border-b-[3px] border-brutal-border dark:border-white pb-2 w-fit pr-6">
            Links
          </h3>
          <div className="flex flex-row flex-wrap gap-3 mb-10">
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm md:text-base font-bold bg-[#aeffda] dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                Live Demo
              </a>
            )}

            {typeof project.github === 'string' && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm md:text-base font-bold bg-white dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <span className="text-lg font-black">{`</>`}</span> Source Code
              </a>
            )}

            {typeof project.github === 'object' && project.github !== null && (
              <>
                {project.github.frontend && (
                  <a href={project.github.frontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm md:text-base font-bold bg-white dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                    <span className="text-lg font-black">{`</>`}</span> Frontend Code
                  </a>
                )}
                {project.github.backend && (
                  <a href={project.github.backend} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm md:text-base font-bold bg-white dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                    <span className="text-lg font-black">{`</>`}</span> Backend Code
                  </a>
                )}
              </>
            )}

            {project.linkedin && project.linkedin !== '#' && (
              <a href={project.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm md:text-base font-bold bg-[#82d2f7] dark:bg-[#444] border-[3px] border-brutal-border dark:border-white px-4 py-2 text-brutal-text dark:text-dark-text transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Bento Grid Media Section */}
        {/* Bento Grid Media Section */}
        <div className="lg:w-[50%] mt-16 lg:mt-0 flex flex-col pt-2 lg:pt-[104px] lg:-mr-6 w-full">
          {/* <h3 className="font-mono text-2xl font-bold mb-6 text-brutal-text dark:text-dark-text border-b-[3px] border-brutal-border dark:border-white pb-2 w-fit pr-6">
            Project Media
          </h3> */}

          {/* Changed to a clean 3-column grid that fills 100% width */}
          <div className="grid grid-cols-3 gap-0 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] w-full px-0">
            {project.images && project.images.length > 0 ? (
              project.images.map((imgSrc, idx) => {
                // Updated logic: First image takes 2/3 width, others fill gaps
                const isFeatured = idx === 0;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`${isFeatured ? 'col-span-2 row-span-2' : 'col-span-1'} 
            border-[3px] border-white dark:border-[#33332d] overflow-hidden relative bg-white cursor-pointer group`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 flex items-center justify-center border-[4px] border-brutal-border dark:border-white border-dashed bg-[#EEE] h-[300px]">
                <p className="font-mono font-bold text-gray-500 text-lg">No Images Available</p>
              </div>
            )}
          </div>
        </div>


      </div>

      {/* Image Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white font-mono text-xl md:text-2xl hover:text-[#ffb6b9] z-50 transition-colors"
          >
            X
          </button>

          {/* Main Carousel Area */}
          <div
            className="relative w-[95vw] max-w-7xl h-[60vh] md:h-[70vh] flex items-center justify-center cursor-default mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                  }}
                  className="">
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                  }}
                  className="">
                </button>
              </>
            )}

            {/* Images */}
            {project.images.map((imgSrc, idx) => {
              const total = project.images.length;
              let offset = idx - selectedImageIndex;

              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              let isCenter = offset === 0;
              let isLeft = offset === -1 || (offset === total - 1 && total > 2);
              let isRight = offset === 1 || (offset === -(total - 1) && total > 2);

              if (total === 2 && offset === 1) { isRight = true; isLeft = false; }
              if (total === 2 && offset === -1) { isLeft = true; isRight = false; }

              let zIndex = 0;
              let transform = 'translateX(-50%) translateY(-50%) scale(0.5)';
              let opacity = 0;
              let blur = 'blur(8px)';

              if (isCenter) {
                zIndex = 30;
                transform = 'translateX(-50%) translateY(-50%) scale(1)';
                opacity = 1;
                blur = 'blur(0px)';
              } else if (isLeft && total > 1) {
                zIndex = 20;
                transform = 'translateX(-110%) translateY(-50%) scale(0.85)';
                opacity = 0.6;
                blur = 'blur(2px)';
              } else if (isRight && total > 1) {
                zIndex = 20;
                transform = 'translateX(10%) translateY(-50%) scale(0.85)';
                opacity = 0.6;
                blur = 'blur(2px)';
              }

              return (
                <div
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isCenter) setSelectedImageIndex(idx);
                  }}
                  className={`absolute top-1/2 left-1/2 w-[70%] md:w-[45%] h-[70%] md:h-[90%] transition-all duration-500 ease-in-out flex items-center justify-center ${!isCenter ? 'cursor-pointer hover:opacity-100' : ''}`}
                  style={{
                    transform,
                    zIndex,
                    opacity: isCenter ? 1 : (isLeft || isRight ? 0.6 : 0),
                    filter: blur,
                    pointerEvents: isCenter || isLeft || isRight ? 'auto' : 'none'
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} Screenshot ${idx + 1}`}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none transition-opacity duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          {project.images.length > 1 && (
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full border-[1px] border-white transition-all duration-300 ${selectedImageIndex === idx
                    ? 'bg-white scale-125'
                    : 'bg-transparent hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;
