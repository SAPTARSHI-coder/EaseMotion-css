import React from "react";
import "./style.css";

const FitnessTrackerCard = ({
  title = "Daily Activity",
  subtitle = "Fitness Tracker",
  steps = 8450,
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
  </div>
);

};

export default FitnessTrackerCard;