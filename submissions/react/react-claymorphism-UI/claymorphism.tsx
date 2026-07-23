import React from 'react';

interface ClayCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export const ClayCard: React.FC<ClayCardProps> = ({
  title = "Claymorphism Card",
  description = "A soft, 3D plastic-like UI component built using modern inner shadows and smooth transitions.",
  buttonText = "Explore",
  className = ""
}) => {
  return (
    <div className={`ease-clay-card ease-fade-in ease-hover-lift ${className}`}>
      <div className="ease-clay-icon-wrapper">
        <span className="ease-clay-icon">✨</span>
      </div>
      <h3 className="ease-clay-title">{title}</h3>
      <p className="ease-clay-desc">{description}</p>
      <button className="ease-clay-btn ease-interactive-tap">
        {buttonText}
      </button>
    </div>
  );
};

export default ClayCard;