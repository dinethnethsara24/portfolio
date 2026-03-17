import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-10 border-t-[3px] border-brutal-border dark:border-white font-mono bg-brutal-bg dark:bg-dark-bg text-brutal-text dark:text-dark-text mt-20">
      <p>&copy; {new Date().getFullYear()} My Portfolio.</p>
    </footer>
  );
};

export default Footer;
