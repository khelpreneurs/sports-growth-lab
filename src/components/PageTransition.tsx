import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fade-in');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fade-out');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fade-out') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fade-in');
        window.scrollTo(0, 0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`transition-opacity duration-200 ${
        transitionStage === 'fade-out' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
