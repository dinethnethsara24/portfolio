import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const Header = ({ onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // Show hamburger immediately when scrolling
      setIsHamburgerVisible(true);

      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Hide after exactly 1.5 seconds of no scrolling
      timeoutId = setTimeout(() => {
        // Keep it open if sidebar is actively open!
        if (!isSidebarOpen) {
          setIsHamburgerVisible(false);
        }
      }, 1500);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial timeout to hide when first loading the page
    timeoutId = setTimeout(() => {
      if (!isSidebarOpen) {
        setIsHamburgerVisible(false);
      }
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Explicitly keep hamburger visible while toggling
    setIsHamburgerVisible(true);
  };

  const closeSidebarAndNavigate = (e, onClickProps, targetId) => {
    setIsSidebarOpen(false);
    
    if (onClickProps) {
      onClickProps(e);
      // After closing the modal, we need to wait a tick for the DOM to un-hide the main body,
      // and then manually scroll to the element.
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const navigateDesktop = (e, onClickProps, targetId) => {
    if (onClickProps) {
      onClickProps(e);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <>
      <header className="h-[80px] flex justify-center items-center fixed top-0 w-full md:bg-brutal-bg md:dark:bg-dark-bg pointer-events-none md:pointer-events-auto z-[110] text-brutal-text dark:text-dark-text transition-transform duration-300">

        {/* Mobile Hamburger Icon Wrapper */}
        <div className={`absolute left-6 block md:hidden z-[120] pointer-events-auto transition-opacity duration-300 ${isHamburgerVisible || isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            className="flex flex-col justify-center items-center w-10 h-10 border-[3px] border-brutal-border dark:border-white bg-[#aeffda] dark:bg-[#333] shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className={`bg-brutal-text dark:bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${isSidebarOpen ? 'rotate-45 translate-y-[8px]' : '-translate-y-1'}`}></span>
            <span className={`bg-brutal-text dark:bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm my-0.5 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-brutal-text dark:bg-white block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${isSidebarOpen ? '-rotate-45 -translate-y-[8px]' : 'translate-y-1'}`}></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-16 items-center pointer-events-auto">
          <a href="#home" onClick={(e) => navigateDesktop(e, onClose, 'home')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">Home</a>
          <a href="#about" onClick={(e) => navigateDesktop(e, onClose, 'about')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">About</a>
          <a href="#skills" onClick={(e) => navigateDesktop(e, onClose, 'skills')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">Skills</a>
          <a href="#projects" onClick={(e) => navigateDesktop(e, onClose, 'projects')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">Projects</a>
          <a href="#education" onClick={(e) => navigateDesktop(e, onClose, 'education')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">Education</a>
          <a href="#contact" onClick={(e) => navigateDesktop(e, onClose, 'contact')} className="hit-area-fix font-mono text-lg hover:underline hover:translate-x-[2px] transition-transform">Contact</a>
        </nav>

        {/* Desktop Theme Toggle (Right aligned) */}
        <div className="hidden md:block absolute right-10 pointer-events-auto">
          <button
            className="hit-area-fix bg-brutal-bg dark:bg-dark-bg border-[3px] border-brutal-border dark:border-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#FFFFFF] px-4 py-2 font-mono font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] dark:hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
            onClick={toggleTheme}
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[250px] sm:w-[300px] bg-brutal-bg dark:bg-dark-bg z-[105] border-r-[4px] border-brutal-border dark:border-white transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[100px] px-8 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-6">
          <a href="#home" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'home')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">Home</a>
          <a href="#about" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'about')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">About</a>
          <a href="#skills" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'skills')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">Skills</a>
          <a href="#projects" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'projects')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">Projects</a>
          <a href="#education" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'education')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">Education</a>
          <a href="#contact" onClick={(e) => closeSidebarAndNavigate(e, onClose, 'contact')} className="font-mono text-xl font-bold border-b-2 border-transparent hover:border-brutal-text dark:hover:border-white w-fit transition-colors pb-1 text-brutal-text dark:text-dark-text">Contact</a>
        </nav>

        <div className="mt-12 pt-8 border-t-[3px] border-brutal-border dark:border-white">
          <button
            className="w-full bg-[#ffb6b9] dark:bg-[#444] text-brutal-text dark:text-white border-[3px] border-brutal-border dark:border-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#FFFFFF] px-4 py-3 font-mono font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] dark:hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
            onClick={() => {
              toggleTheme();
              setTimeout(() => setIsSidebarOpen(false), 300);
            }}
          >
            {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
