import { useAtom } from 'jotai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { themeAtom } from '../../atoms/themeAtom';

function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-secondary-300 dark:border-secondary-600 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 hover:border-primary-300 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-secondary-700 dark:hover:border-primary-500 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}

export default ThemeToggle;

