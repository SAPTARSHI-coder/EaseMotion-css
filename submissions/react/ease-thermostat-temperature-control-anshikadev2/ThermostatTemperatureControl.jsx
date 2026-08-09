import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * ThermostatTemperatureControl Component/
 * Uses EaseMotion CSS utility classes to create a fluid, tactile climate adjusting interface.
 */
export const ThermostatTemperatureControl = ({ 
  initialTemp = 72, 
  minTemp = 50, 
  maxTemp = 90, 
  unit = '°F' 
}) => {
  const [temperature, setTemperature] = useState(initialTemp);

  const increment = () => {
    if (temperature < maxTemp) setTemperature(prev => prev + 1);
  };

  const decrement = () => {
    if (temperature > minTemp) setTemperature(prev => prev - 1);
  };

  const getModeClass = () => {
    if (temperature >= 78) return 'ease-bg-danger ease-color-white ease-pulse-warm'; 
    if (temperature <= 64) return 'ease-bg-primary ease-color-white ease-pulse-cool'; 
    return 'ease-bg-surface ease-color-text ease-hover-lift'; 
  };

  return (
    <div className={`ease-thermostat-control padding-large border-radius-circular ${getModeClass()}`} style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center', transition: 'all 0.4s ease-in-out' }}>
      <div className="thermostat-label" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>
        Target Climate
      </div>
      
      <div className="thermostat-display ease-pop-in" key={temperature} style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '16px 0' }}>
        {temperature}{unit}
      </div>

      <div className="thermostat-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          onClick={decrement}
          className="ease-btn ease-btn-secondary ease-btn-circle ease-active-press"
          disabled={temperature <= minTemp}
          style={{ width: '48px', height: '48px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          -
        </button>
        <button 
          onClick={increment}
          className="ease-btn ease-btn-secondary ease-btn-circle ease-active-press"
          disabled={temperature >= maxTemp}
          style={{ width: '48px', height: '48px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          +
        </button>
      </div>
    </div>
  );
};

ThermostatTemperatureControl.propTypes = {
  initialTemp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  unit: PropTypes.string,
};