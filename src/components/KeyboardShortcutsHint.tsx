import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Keyboard, X } from 'lucide-react';

const KeyboardShortcutsHint = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem('hasSeenKeyboardHint');
    
    if (!hasSeenHint) {
      // Show hint after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenKeyboardHint', 'true');
  };

  if (!isVisible) return null;

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const ctrlKey = isMac ? '⌘' : 'Ctrl';

  return (
    <div className="fixed bottom-32 left-6 z-50 animate-fade-in">
      <div className="bg-card border border-border shadow-strong rounded-lg p-4 max-w-xs">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Keyboard className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-1">Keyboard Shortcuts</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Press <kbd className="px-1.5 py-0.5 text-xs bg-secondary border border-border rounded">
                {ctrlKey} + /
              </kbd> to see all shortcuts
            </p>
            <Button
              onClick={handleDismiss}
              variant="ghost"
              size="sm"
              className="h-7 text-xs"
            >
              Got it
            </Button>
          </div>
          <button
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground transition-fast"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHint;
