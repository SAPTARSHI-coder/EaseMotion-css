import React from "react";
import "./style.css";

const FitnessTrackerCard = ({
  title = "Daily Activity",
  subtitle = "Fitness Tracker",
  steps = 8450,
  progress = 84,
  goal = 10000,
  heartRate = 128,
  calories = 540,
  distance = "6.8 km",
  activeMinutes = 48,
  buttonText = "View Workout",
  accentColor = "#16a34a",
  onButtonClick = () => {},
}) => {

    return (
  <div
    className="fitness-card ease-slide-in-from-bottom ease-card-lift ease-hover-shimmer"
    style={{ "--accent-color": accentColor }}
    >
    {/* Header */}
    <div className="fitness-header">
      <div>
        <p className="fitness-subtitle">{subtitle}</p>
        <h2 className="fitness-title">{title}</h2>
      </div>

      <span className="fitness-badge">
        +12%
      </span>
    </div>

    {/* Steps */}
    <div className="fitness-steps">
      <h1>{steps.toLocaleString()}</h1>
      <span>Steps</span>
    </div>

    {/* Progress */}
    <div className="fitness-progress-container">
      <div className="fitness-progress-bar">
        <div
          className="fitness-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="fitness-progress-text">
        <span>{steps.toLocaleString()}</span>
        <span>{goal.toLocaleString()}</span>
      </div>
    </div>
    {/* Stats */}
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
  className="fitness-button ease-hover-grow"
  onClick={onButtonClick}
>
  {buttonText}
</button>
  </div>
);

};

export default FitnessTrackerCard;