import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Theme = {
  name: string;
  primary: string;
  accent: string;
  label: string;
};

const themes: Theme[] = [
  {
    name: 'default',
    label: 'Teal & Orange',
    primary: '186 78% 42%',
    accent: '27 96% 61%',
  },
  {
    name: 'ocean',
    label: 'Ocean Blue',
    primary: '210 100% 45%',
    accent: '195 92% 56%',
  },
  {
    name: 'forest',
    label: 'Forest Green',
    primary: '142 76% 36%',
    accent: '48 96% 53%',
  },
  {
    name: 'sunset',
    label: 'Sunset Purple',
    primary: '262 83% 58%',
    accent: '335 78% 56%',
  },
  {
    name: 'energy',
    label: 'Energy Red',
    primary: '0 72% 51%',
    accent: '45 93% 47%',
  },
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName);
    if (theme) {
      document.documentElement.style.setProperty('--primary', theme.primary);
      document.documentElement.style.setProperty('--accent', theme.accent);
      
      // Update related colors
      const [h, s, l] = theme.primary.split(' ').map(v => parseFloat(v));
      document.documentElement.style.setProperty('--primary-light', `${h} ${s}% ${l + 10}%`);
      document.documentElement.style.setProperty('--primary-dark', `${h} ${s}% ${l - 10}%`);
      
      const [ah, as, al] = theme.accent.split(' ').map(v => parseFloat(v));
      document.documentElement.style.setProperty('--accent-hover', `${ah} ${as}% ${al - 10}%`);
      
      setCurrentTheme(themeName);
      localStorage.setItem('color-theme', themeName);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 rounded-full hover:bg-secondary/80"
          aria-label="Change color theme"
        >
          <Palette className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => applyTheme(theme.name)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <div className="flex gap-1">
                <div
                  className="w-4 h-4 rounded-full border border-border/50"
                  style={{ backgroundColor: `hsl(${theme.primary})` }}
                />
                <div
                  className="w-4 h-4 rounded-full border border-border/50"
                  style={{ backgroundColor: `hsl(${theme.accent})` }}
                />
              </div>
              <span className="text-sm">{theme.label}</span>
              {currentTheme === theme.name && (
                <span className="ml-auto text-primary text-xs">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
