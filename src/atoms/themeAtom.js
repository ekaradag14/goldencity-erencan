import { atom } from 'jotai';

// Helper function to get initial theme
const getInitialTheme = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'light';
  }
  
  // Check localStorage first
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  
  // Fall back to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

// Theme atom - stores 'light' or 'dark'
export const themeAtom = atom(getInitialTheme());

