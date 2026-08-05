import React, { useState } from 'react';

/**
 * Weather Forecast Card with Animated Ambient Icons
 * 
 * @param {string} location - City/location name
 * @param {number} currentTemp - Current temperature
 * @param {string} condition - "Sunny", "Cloudy", or "Rainy"
 * @param {Array} forecast - Array of daily forecast objects { day, temp, condition }
 */
const WeatherCard = ({ 
  location = "San Francisco, CA", 
  currentTemp = 72, 
  condition = "Sunny",
  forecast = [] 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper to render the appropriate animated icon based on condition
  const renderWeatherIcon = (weatherType, isMain = false) => {
    const type = weatherType.toLowerCase();
    
    // Classes applied based on main card icon vs small forecast icon
    const iconClass = isMain ? "ease-weather-icon-main" : "ease-weather-icon-small";
    
    if (type.includes('sun') || type.includes('clear')) {
      return (
        <div className={`${iconClass} is-sunny`}>
          <div className="ease-weather-sun">
            <div className="ease-weather-sun-core" />
            <div className="ease-weather-sun-rays" />
          </div>
        </div>
      );
    } 
    
    if (type.includes('rain') || type.includes('shower')) {
      return (
        <div className={`${iconClass} is-rainy`}>
          <div className="ease-weather-cloud" />
          <div className="ease-weather-rain-drops">
            <span style={{ animationDelay: '0s' }} />
            <span style={{ animationDelay: '0.2s' }} />
            <span style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      );
    }

    // Default to cloudy
    return (
      <div className={`${iconClass} is-cloudy`}>
        <div className="ease-weather-cloud ease-weather-cloud-back" />
        <div className="ease-weather-cloud ease-weather-cloud-front" />
      </div>
    );
  };

  // Dynamic gradient based on current condition
  const getBackgroundClass = () => {
    const type = condition.toLowerCase();
    if (type.includes('sun')) return 'bg-sunny';
    if (type.includes('rain')) return 'bg-rainy';
    return 'bg-cloudy';
  };

  return (
    <div 
      className={`ease-weather-card ${getBackgroundClass()} ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background particles/glows triggered on hover */}
      <div className="ease-weather-ambient-layer">
        <div className="ease-weather-ambient-glow" />
      </div>

      <div className="ease-weather-current">
        <div className="ease-weather-header">
          <h2 className="ease-weather-location">{location}</h2>
          <span className="ease-weather-date">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </span>
        </div>

        <div className="ease-weather-main-data">
          {renderWeatherIcon(condition, true)}
          <div className="ease-weather-temp-wrapper">
            <span className="ease-weather-temp">{currentTemp}°</span>
            <span className="ease-weather-condition">{condition}</span>
          </div>
        </div>
      </div>

      <div className="ease-weather-divider" />

      <div className="ease-weather-forecast">
        {forecast.map((day, index) => (
          <div 
            key={day.day} 
            className="ease-weather-forecast-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="ease-weather-forecast-day">{day.day}</span>
            {renderWeatherIcon(day.condition, false)}
            <span className="ease-weather-forecast-temp">{day.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
