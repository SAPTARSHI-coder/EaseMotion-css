import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const FitnessTrackerCard = ({
  title,
  subtitle,
  steps,
  progress,
  goal,
  trend,
  heartRate,
  calories,
  distance,
  activeMinutes,
  buttonText,
  accentColor,
  onButtonClick,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="fitness-card ease-slide-in-from-bottom ease-card-lift ease-hover-shimmer"
      style={{ "--accent-color": accentColor }}
    >
      <div className="fitness-header">
        <div>
          <p className="fitness-subtitle">{subtitle}</p>
          <h2 className="fitness-title">{title}</h2>
        </div>
        <span className="fitness-badge">{trend}</span>
      </div>

      <div className="fitness-steps">
        <h1>{steps.toLocaleString()}</h1>
        <span>Steps</span>
      </div>

      <div className="fitness-progress-container">
        <div
          className="fitness-progress-bar"
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${title} progress toward step goal`}
        >
          <div
            className="fitness-progress-fill"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
        <div className="fitness-progress-text">
          <span>{steps.toLocaleString()}</span>
          <span>{goal.toLocaleString()}</span>
        </div>
      </div>

      <div className="fitness-stats">
        <div className="fitness-stat">
          <h3>{heartRate}</h3>
          <p>❤️ Heart Rate</p>
        </div>
        <div className="fitness-stat">
          <h3>{calories}</h3>
          <p>🔥 Calories</p>
        </div>
        <div className="fitness-stat">
          <h3>{distance}</h3>
          <p>📏 Distance</p>
        </div>
        <div className="fitness-stat">
          <h3>{activeMinutes}</h3>
          <p>⏱ Active Min</p>
        </div>
      </div>

      <button
        type="button"
        className="fitness-button ease-hover-grow"
        onClick={onButtonClick}
        aria-label={buttonText}
      > 
      View Workout
        {buttonText}
      </button>
    </div>
  );
};

FitnessTrackerCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.number,
  progress: PropTypes.number,
  goal: PropTypes.number,
  trend: PropTypes.string,
  heartRate: PropTypes.number,
  calories: PropTypes.number,
  distance: PropTypes.string,
  activeMinutes: PropTypes.number,
  buttonText: PropTypes.string,
  accentColor: PropTypes.string,
  onButtonClick: PropTypes.func,
};

FitnessTrackerCard.defaultProps = {
  title: "Daily Activity",
  subtitle: "Fitness Tracker",
  steps: 8450,
  progress: 84,
  goal: 10000,
  trend: "+12%",
  heartRate: 128,
  calories: 540,
  distance: "6.8 km",
  activeMinutes: 48,
  buttonText: "View Workout",
  accentColor: "#16a34a",
  onButtonClick: () => {},
};

export default FitnessTrackerCard;