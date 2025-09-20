import React from "react";

interface FancyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const FancyButton: React.FC<FancyButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center px-6 py-3 
        bg-gradient-to-r from-blue-600 to-purple-600 text-white 
        font-medium rounded-lg transition-all duration-300 
        hover:from-blue-700 hover:to-purple-700 
        hover:shadow-lg hover:scale-105 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default FancyButton;