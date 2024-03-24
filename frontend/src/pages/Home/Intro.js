import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, caption, description } = intro;

  const handleGetStartedClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <div className='bg-primary flex flex-col h-[80vh] items-start justify-center gap-8 py-10'>
      <h1 className='text-tertiary'>{welcomeText || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ''} {lastName || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-tertiary font-semibold'>{caption || ''}</h1>
      <p className="text-tertiary w-2/3">{description || ''}</p>
      <button onClick={handleGetStartedClick} className='border-2 border-tertiary px-10 py-3 rounded mt-7 text-tertiary'>Get Started</button>
    </div>
  );
}

export default Intro;
