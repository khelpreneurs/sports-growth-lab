import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, GraduationCap, Calendar, Mail } from 'lucide-react';

const StickyQuickNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { label: 'Apply', href: '/cohorts', icon: Rocket, primary: true },
    { label: 'Cohorts', href: '/cohorts', icon: GraduationCap },
    { label: 'Events', href: '/events', icon: Calendar },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-background/95 backdrop-blur-lg px-3 py-2.5 shadow-strong rounded-full border border-border">
        <div className="flex items-center gap-2">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.href;
            
            if (link.primary) {
              return (
                <Button
                  key={index}
                  asChild
                  size="sm"
                  className="bg-accent hover:bg-accent-hover shadow-accent text-accent-foreground font-semibold px-4 h-9"
                >
                  <Link to={link.href}>
                    <Icon className="w-4 h-4 mr-1.5" />
                    {link.label}
                  </Link>
                </Button>
              );
            }

            return (
              <Button
                key={index}
                asChild
                variant="ghost"
                size="sm"
                className={`h-9 px-3 text-foreground ${
                  isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'hover:bg-secondary/80 hover:text-primary'
                }`}
              >
                <Link to={link.href}>
                  <Icon className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyQuickNav;
