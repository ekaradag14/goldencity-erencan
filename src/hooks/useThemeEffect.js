import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms/themeAtom';

/**
 * Custom hook that applies the theme class to the document root
 * and persists theme changes to localStorage
 */
export const useThemeEffect = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    // Apply theme class to document root
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, setTheme, toggleTheme };
};

export default useThemeEffect;

