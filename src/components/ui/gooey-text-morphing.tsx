import React from "react";

interface GooeyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GooeyText: React.FC<GooeyTextProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};