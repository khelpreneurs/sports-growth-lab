import { useEffect } from 'react';

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: ShortcutConfig[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      shortcuts.forEach((shortcut) => {
        const ctrlKey = event.ctrlKey || event.metaKey; // Support both Ctrl and Cmd
        const matchesModifiers =
          (!shortcut.ctrl || ctrlKey) &&
          (!shortcut.shift || event.shiftKey) &&
          (!shortcut.alt || event.altKey);

        if (matchesModifiers && event.key.toLowerCase() === shortcut.key.toLowerCase()) {
          event.preventDefault();
          shortcut.action();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

export const getShortcutLabel = (shortcut: ShortcutConfig) => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const ctrlKey = isMac ? '⌘' : 'Ctrl';
  
  let label = '';
  if (shortcut.ctrl) label += `${ctrlKey} + `;
  if (shortcut.shift) label += 'Shift + ';
  if (shortcut.alt) label += 'Alt + ';
  label += shortcut.key.toUpperCase();
  
  return label;
};
