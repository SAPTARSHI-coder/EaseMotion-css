import React from "react";
import "./style.css";

type TrendDirection = "up" | "down" | "neutral";

export interface FitnessTrackerStat {
  label: string;
  value: string | number;
  helperText?: string;
}

export interface FitnessTrackerCardProps {
  title?: string;
  subtitle?: string;
  metric?: string | number;
  metricLabel?: string;
  unit?: string;
  goalLabel?: string;
  goalCurrent?: number;
  goalTarget?: number;
  trend?: string;
  trendDirection?: TrendDirection;
  stats?: FitnessTrackerStat[];
  ctaLabel?: string;
  accentColor?: string;
  className?: string;
  onCtaClick?: () => void;
}

const defaultStats: FitnessTrackerStat[] = [
  { label: "Calories", value: "540", helperText: "burned" },
  { label: "Active min", value: "48", helperText: "today" },
  { label: "Heart rate", value: "128", helperText: "bpm" },
];

const clampProgress = (value: number) => Math.min(Math.max(value, 0), 100);

const FitnessTrackerCard = ({
  title = "Daily Movement",
  subtitle = "Fitness Tracker",
  metric = "8,420",
  metricLabel = "Steps",
  unit = "steps",
  goalLabel = "Daily goal",
  goalCurrent = 8420,
  goalTarget = 10000,
  trend = "+12% vs yesterday",
  trendDirection = "up",
  stats = defaultStats,
  ctaLabel = "View workout",
  accentColor = "#16a34a",
  className = "",
  onCtaClick,
}: FitnessTrackerCardProps) => {
  const progress =
    goalTarget > 0 ? clampProgress((goalCurrent / goalTarget) * 100) : 0;
  const progressLabel = `${Math.round(progress)}%`;
  const ariaGoalTarget = Math.max(goalTarget, 0);
  const ariaGoalCurrent = Math.min(Math.max(goalCurrent, 0), ariaGoalTarget);
  const cardClasses = [
    "fitness-tracker-card",
    "ease-slide-in-from-bottom",
    "ease-duration-slow",
    "ease-card-lift",
    "ease-hover-shimmer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClasses}
      style={{ "--fitness-accent": accentColor } as React.CSSProperties}
    >
      <div className="fitness-card-header ease-fade-in">
        <div>
          <p className="fitness-card-eyebrow">{subtitle}</p>
          <h3 className="fitness-card-title">{title}</h3>
        </div>
        <span
          className={`fitness-card-trend fitness-card-trend-${trendDirection}`}
        >
          {trend}
        </span>
      </div>

      <div className="fitness-card-metric ease-slide-in-left ease-delay-100">
        <span className="fitness-card-value">{metric}</span>
        <span className="fitness-card-unit">{unit}</span>
      </div>
      <p className="fitness-card-label">{metricLabel}</p>

      <div className="fitness-card-goal ease-fade-in ease-delay-150">
        <div className="fitness-card-goal-row">
          <span>{goalLabel}</span>
          <strong>{progressLabel}</strong>
        </div>
        <div
          className="fitness-card-progress"
          role="progressbar"
          aria-label={`${goalLabel}: ${progressLabel}`}
          aria-valuemin={0}
          aria-valuemax={ariaGoalTarget}
          aria-valuenow={ariaGoalCurrent}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="fitness-card-goal-row fitness-card-goal-values">
          <span>{goalCurrent.toLocaleString()}</span>
          <span>{goalTarget.toLocaleString()}</span>
        </div>
      </div>

      <div className="fitness-card-stats ease-fade-in ease-delay-200">
        {stats.map((stat) => (
          <div className="fitness-card-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            {stat.helperText ? <small>{stat.helperText}</small> : null}
          </div>
        ))}
      </div>

      <button
        className="fitness-card-action ease-hover-grow"
        type="button"
        onClick={onCtaClick}
      >
        {ctaLabel}
      </button>
    </article>
  );
};

export default FitnessTrackerCard;
