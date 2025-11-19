import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Keyboard } from 'lucide-react';

interface KeyboardShortcutsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KeyboardShortcutsDialog = ({ open, onOpenChange }: KeyboardShortcutsDialogProps) => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const ctrlKey = isMac ? '⌘' : 'Ctrl';

  const shortcuts = [
    { keys: `${ctrlKey} + K`, description: 'Open quick navigation' },
    { keys: `${ctrlKey} + /`, description: 'Show keyboard shortcuts' },
    { keys: `${ctrlKey} + D`, description: 'Toggle dark mode' },
    { keys: `${ctrlKey} + M`, description: 'Toggle mobile menu' },
    { keys: 'ESC', description: 'Close dialogs' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Keyboard className="w-5 h-5 text-primary" />
            Keyboard Shortcuts
          </DialogTitle>
          <DialogDescription>
            Use these shortcuts to navigate faster
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 pt-4">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-fast"
            >
              <span className="text-sm text-foreground">{shortcut.description}</span>
              <kbd className="px-3 py-1.5 text-xs font-semibold bg-background border border-border rounded-md shadow-sm">
                {shortcut.keys}
              </kbd>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortcutsDialog;
