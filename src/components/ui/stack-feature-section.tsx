import React from "react";

interface StackFeatureSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const StackFeatureSection: React.FC<StackFeatureSectionProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default StackFeatureSection;