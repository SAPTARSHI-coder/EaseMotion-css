import PropTypes from 'prop-types';

/**
 * ThresholdAlertIndicator Component
 * Uses EaseMotion CSS utility classes to animate an alert based on critical levels.
 */
export const ThresholdAlertIndicator = ({ 
  value, 
  threshold, 
  label = 'System Load', 
  statusText = 'Normal' 
}) => {
  const isTriggered = value >= threshold;

  const containerClasses = `ease-threshold-alert-indicator padding-medium border-radius-medium ${
    isTriggered 
      ? 'ease-bg-danger ease-color-white ease-pulse-urgent ease-border-flash' 
      : 'ease-bg-surface ease-color-text ease-hover-lift'
  }`;

  const badgeClasses = `status-badge ${
    isTriggered 
      ? 'ease-bg-white ease-color-danger ease-pop-in' 
      : 'ease-bg-primary ease-color-white'
  }`;

  return (
    <div className={containerClasses}>
      <div className="alert-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="alert-label" style={{ fontWeight: 'bold' }}>{label}</span>
        <span className={badgeClasses} style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
          {isTriggered ? 'CRITICAL' : statusText}
        </span>
      </div>
      
      <div className="alert-body" style={{ marginTop: '12px' }}>
        <div className="value-display" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {value} / {threshold}
        </div>
        <p style={{ margin: '4px 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
          {isTriggered 
            ? 'Warning: Threshold breached. Immediate attention required.' 
            : 'System operating within safe parameters.'}
        </p>
      </div>
    </div>
  );
};

ThresholdAlertIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  threshold: PropTypes.number.isRequired,
  label: PropTypes.string,
  statusText: PropTypes.string,
};