import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  onClick?: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  enableHover = true,
  onClick,
  ...props
}) => {
  return (
    <Card
      className={cn(
        enableHover && 'hover-lift cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Card>
  );
};

export default InteractiveCard;
