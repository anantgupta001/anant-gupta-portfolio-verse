import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const THEMES = [
  { key: 'dark', label: 'Dark', icon: Moon },
  { key: 'light', label: 'Light', icon: Sun },
];

export const ThemeToggle = () => {
  const [themeIdx, setThemeIdx] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeIdx(savedTheme === 'dark' ? 0 : 1);
    } else {
      setThemeIdx(0); // default to dark
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    if (THEMES[themeIdx].key === 'dark') {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', THEMES[themeIdx].key);
  }, [themeIdx]);

  const toggleTheme = () => {
    setThemeIdx((prev) => (prev + 1) % THEMES.length);
  };

  const Icon = THEMES[themeIdx].icon;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={`Switch theme: ${THEMES[themeIdx].label}`}
      className="relative h-10 w-10 rounded-full border border-border/50 glass hover:glow transition-all duration-300"
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
};