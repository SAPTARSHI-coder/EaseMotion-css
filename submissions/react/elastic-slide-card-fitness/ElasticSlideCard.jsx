import React from 'react';
import './ElasticSlideCard.css';

/**
 * ElasticSlideCard
 * 
 * A fitness tracker card component that reveals detailed statistics on hover/focus 
 * using a smooth elastic slide transition.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.icon - The main icon representing the activity
 * @param {string} props.title - The main title (e.g. "Morning Run")
 * @param {string} props.subtitle - The subtitle or date (e.g. "Today, 6:00 AM")
 * @param {Array<{label: string, value: string|number, unit: string}>} props.stats - Array of statistics to display in the sliding panel
 * @param {boolean} [props.isActive] - Force the panel open for touch devices or external state
 * @param {string} [props.className] - Additional wrapper classes
 * @param {Object} [props.style] - Inline styles for the wrapper (e.g., custom background)
 */
const ElasticSlideCard = ({
  icon,
  title,
  subtitle,
  stats = [],
  isActive = false,
  className = '',
  style = {},
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const open = isActive || isHovered || isFocused;

  return (
  <div
    className={`ease-esc__wrapper ease-fade-in ease-hover-lift-shadow ${isActive ? 'ease-esc--active' : ''} ${className}`}
    tabIndex={0}
    role="region"
    aria-label={`Activity summary for ${title}`}
    style={style}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    {...rest}
  >
    <div className="ease-esc__header">
      <div className="ease-esc__icon-container" aria-hidden="true">
        {icon}
      </div>
      <h3 className="ease-esc__title">{title}</h3>
      <p className="ease-esc__subtitle">{subtitle}</p>
    </div>

    <div
      className="ease-esc__panel"
      aria-hidden={!open ? "true" : "false"}
    >
      {stats.map((stat, index) => (
        <div key={index} className="ease-esc__stat">
          <span className="ease-esc__stat-value">
            {stat.value}
            {stat.unit && <span className="ease-esc__stat-unit">{stat.unit}</span>}
          </span>
          <span className="ease-esc__stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ElasticSlideCard;
