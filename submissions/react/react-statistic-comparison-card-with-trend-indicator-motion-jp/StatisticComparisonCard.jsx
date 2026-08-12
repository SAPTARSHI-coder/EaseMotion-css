import React, { useEffect, useMemo, useState } from "react";
import "./style.css";

/**
 * Statistic comparison card with animated values and trend indicator motion.
 *
 * EaseMotion CSS utilities used:
 * - ease-fade-in
 * - ease-hover-lift
 * - ease-hover-grow
 * - ease-pulse
 */
export default function StatisticComparisonCard({
  label = "Monthly Revenue",
  currentValue = 128400,
  previousValue = 113200,
  valuePrefix = "$",
  valueSuffix = "",
  comparisonLabel = "vs previous period",
  positiveIsGood = true,
  precision = 0,
  animationDuration = 900,
  accentColor = "#6c5ce7",
  formatter,
  icon,
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(0);

  const delta = currentValue - previousValue;
  const percentageChange =
    previousValue === 0 ? 0 : (delta / Math.abs(previousValue)) * 100;

  const isPositive = delta >= 0;
  const isGood = positiveIsGood ? isPositive : !isPositive;
  const trendDirection = delta === 0 ? "neutral" : isPositive ? "up" : "down";

  useEffect(() => {
    const startTime = performance.now();
    const startValue = 0;

    let frameId;

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / Math.max(animationDuration, 1), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(startValue + (currentValue - startValue) * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [currentValue, animationDuration]);

  const formattedValue = useMemo(() => {
    if (formatter) {
      return formatter(displayValue);
    }

    return `${valuePrefix}${displayValue.toLocaleString(undefined, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    })}${valueSuffix}`;
  }, [displayValue, formatter, precision, valuePrefix, valueSuffix]);

  const formattedPrevious = formatter
    ? formatter(previousValue)
    : `${valuePrefix}${previousValue.toLocaleString(undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })}${valueSuffix}`;

  return (
    <article
      className={`stat-card-jp ease-fade-in ease-hover-lift ${className}`.trim()}
      style={{ "--stat-accent-jp": accentColor }}
      aria-label={`${label}: ${formattedValue}`}
    >
      <div className="stat-card-jp__top">
        <div className="stat-card-jp__label-group">
          {icon ? (
            <span className="stat-card-jp__icon ease-hover-grow" aria-hidden="true">
              {icon}
            </span>
          ) : null}

          <div>
            <p className="stat-card-jp__eyebrow">Performance metric</p>
            <h2>{label}</h2>
          </div>
        </div>

        <span
          className={`stat-card-jp__signal stat-card-jp__signal--${trendDirection} ${
            delta !== 0 ? "ease-pulse" : ""
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="stat-card-jp__value-row">
        <strong className="stat-card-jp__value">{formattedValue}</strong>

        <span
          className={`stat-card-jp__trend stat-card-jp__trend--${
            isGood ? "good" : trendDirection === "neutral" ? "neutral" : "bad"
          }`}
        >
          <TrendArrow direction={trendDirection} />
          {Math.abs(percentageChange).toFixed(1)}%
        </span>
      </div>

      <div className="stat-card-jp__comparison">
        <div>
          <span>Previous</span>
          <strong>{formattedPrevious}</strong>
        </div>

        <div>
          <span>Difference</span>
          <strong>
            {delta >= 0 ? "+" : "-"}
            {valuePrefix}
            {Math.abs(delta).toLocaleString(undefined, {
              minimumFractionDigits: precision,
              maximumFractionDigits: precision,
            })}
            {valueSuffix}
          </strong>
        </div>
      </div>

      <p className="stat-card-jp__footer">
        <span className={`stat-card-jp__dot stat-card-jp__dot--${isGood ? "good" : "bad"}`} />
        {comparisonLabel}
      </p>
    </article>
  );
}

function TrendArrow({ direction }) {
  if (direction === "neutral") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={direction === "down" ? "stat-card-jp__arrow--down" : ""}
    >
      <path
        d="M5 15 11 9l3.5 3.5L19 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8h4v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
