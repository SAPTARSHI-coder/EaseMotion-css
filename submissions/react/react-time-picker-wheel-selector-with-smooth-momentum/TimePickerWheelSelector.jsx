import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  memo,
  forwardRef,
} from "react";

// ============================================================
// UTILITY FUNCTIONS & CALCULATIONS
// ============================================================

/**
 * Validates the minuteStep. Must be an integer divisor of 60.
 * If invalid, defaults to 1.
 *
 * @param {number} step
 * @returns {number}
 */
export const validateMinuteStep = (step) => {
  const parsed = parseInt(step, 10);
  if (isNaN(parsed) || parsed <= 0 || 60 % parsed !== 0) {
    return 1;
  }
  return parsed;
};

/**
 * Generates options arrays for hours, minutes, and meridiem.
 */
export const generateHours = (format) => {
  if (format === "24") {
    return Array.from({ length: 24 }, (_, i) => i);
  }
  // 12-hour format options: 1 to 12
  return Array.from({ length: 12 }, (_, i) => i + 1);
};

export const generateMinutes = (step) => {
  const validatedStep = validateMinuteStep(step);
  const length = Math.floor(60 / validatedStep);
  return Array.from({ length }, (_, i) => i * validatedStep);
};

/**
 * Align arbitrary minute to the closest step.
 */
export const alignMinuteToStep = (minute, step) => {
  const validatedStep = validateMinuteStep(step);
  const index = Math.round(minute / validatedStep);
  const aligned = index * validatedStep;
  return aligned >= 60 ? 0 : aligned;
};

/**
 * Parses time string (in "HH:mm" or "hh:mm A" formats) safely.
 * Returns { hour, minute, ampm } where hour is 24-hour (0-23) and ampm is 'AM'|'PM'.
 * On parsing error, returns the current system time.
 */
export const parseTimeString = (timeStr, hourFormat) => {
  const now = new Date();
  const fallback = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    ampm: now.getHours() >= 12 ? "PM" : "AM",
  };

  if (!timeStr || typeof timeStr !== "string") {
    return fallback;
  }

  try {
    // Try to match "hh:mm A" or "HH:mm"
    const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
    if (!match) {
      return fallback;
    }

    const h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    const period = match[3] ? match[3].toUpperCase() : null;

    if (isNaN(h) || isNaN(m) || h < 0 || m < 0 || m >= 60) {
      return fallback;
    }

    let hour24 = h;
    let ampm = "AM";

    if (period) {
      // 12-hour format with period
      if (h < 1 || h > 12) return fallback;
      ampm = period;
      if (period === "PM" && h !== 12) {
        hour24 = h + 12;
      } else if (period === "AM" && h === 12) {
        hour24 = 0;
      }
    } else {
      // 24-hour format
      if (h >= 24) return fallback;
      ampm = h >= 12 ? "PM" : "AM";
    }

    return { hour: hour24, minute: m, ampm };
  } catch (e) {
    return fallback;
  }
};

/**
 * Formats 24h hour and minute integers into correct string formats.
 */
export const formatTimeString = (hour, minute, format) => {
  const mm = minute.toString().padStart(2, "0");
  if (format === "24") {
    const hh = hour.toString().padStart(2, "0");
    return `${hh}:${mm}`;
  } else {
    let h12 = hour % 12;
    if (h12 === 0) h12 = 12;
    const hh = h12.toString().padStart(2, "0");
    const period = hour >= 12 ? "PM" : "AM";
    return `${hh}:${mm} ${period}`;
  }
};

// ============================================================
// INDIVIDUAL WHEEL COLUMN COMPONENT
// ============================================================

const Wheel = memo(
  ({
    data,
    selectedValue,
    onSelect,
    format = (v) => v,
    ariaLabel,
    disabled,
    itemHeight,
  }) => {
    const scrollRef = useRef(null);
    const isScrolling = useRef(false);
    const scrollTimeoutRef = useRef(null);

    const selectedIndex = data.indexOf(selectedValue);

    // Detect prefers-reduced-motion
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    useEffect(() => {
      if (typeof window === "undefined") return;
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(media.matches);
      const listener = (e) => setIsReducedMotion(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, []);

    // Auto-scroll on mount or when selectedValue changes externally
    useEffect(() => {
      if (scrollRef.current && !isScrolling.current) {
        const idx = data.indexOf(selectedValue);
        if (idx !== -1) {
          scrollRef.current.scrollTo({
            top: idx * itemHeight,
            behavior: isReducedMotion ? "auto" : "smooth",
          });
        }
      }
    }, [selectedValue, data, itemHeight, isReducedMotion]);

    // Clean up timers on unmount
    useEffect(() => {
      return () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    const handleScroll = () => {
      if (disabled || !scrollRef.current) return;

      isScrolling.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Debounce state update until snapping settles
      scrollTimeoutRef.current = setTimeout(() => {
        if (!scrollRef.current) return;
        isScrolling.current = false;

        const scrollTop = scrollRef.current.scrollTop;
        const index = Math.round(scrollTop / itemHeight);
        const safeIndex = Math.max(0, Math.min(index, data.length - 1));

        const newValue = data[safeIndex];
        if (newValue !== selectedValue) {
          onSelect(newValue);
        }
      }, 120);
    };

    const handleKeyDown = (e) => {
      if (disabled) return;

      let nextIndex = selectedIndex;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          nextIndex = Math.max(0, selectedIndex - 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          nextIndex = Math.min(data.length - 1, selectedIndex + 1);
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = data.length - 1;
          break;
        case "PageUp":
          e.preventDefault();
          nextIndex = Math.max(0, selectedIndex - 5);
          break;
        case "PageDown":
          e.preventDefault();
          nextIndex = Math.min(data.length - 1, selectedIndex + 5);
          break;
        default:
          return;
      }

      if (
        nextIndex !== selectedIndex &&
        nextIndex >= 0 &&
        nextIndex < data.length
      ) {
        onSelect(data[nextIndex]);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: nextIndex * itemHeight,
            behavior: isReducedMotion ? "auto" : "smooth",
          });
        }
      }
    };

    const handleItemClick = (index) => {
      if (disabled) return;
      onSelect(data[index]);
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: index * itemHeight,
          behavior: isReducedMotion ? "auto" : "smooth",
        });
      }
    };

    return (
      <div
        ref={scrollRef}
        className={`ease-time-picker-column ${disabled ? "is-disabled" : ""}`}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="listbox"
        aria-label={ariaLabel}
        aria-activedescendant={`${ariaLabel}-item-${selectedValue}`}
      >
        <div className="ease-time-picker-pad" aria-hidden="true" />
        {data.map((item, index) => {
          const dist = Math.abs(index - selectedIndex);
          const isCenter = dist === 0;

          const itemStyle = {
            "--dist": dist,
            opacity: isCenter ? 1 : Math.max(0.15, 1 - dist * 0.28),
            transform: `rotateX(${dist * -15}deg) scale(${isCenter ? 1 : Math.max(0.72, 1 - dist * 0.08)})`,
          };

          return (
            <div
              key={item}
              id={`${ariaLabel}-item-${item}`}
              role="option"
              aria-selected={isCenter}
              className={`ease-time-picker-item ${isCenter ? "is-selected" : ""}`}
              style={itemStyle}
              onClick={() => handleItemClick(index)}
            >
              {format(item)}
            </div>
          );
        })}
        <div className="ease-time-picker-pad" aria-hidden="true" />
      </div>
    );
  }
);
Wheel.displayName = "Wheel";

// ============================================================
// MAIN TIME PICKER COMPONENT
// ============================================================

const TimePickerWheelSelector = memo(
  forwardRef(
    (
      {
        value,
        defaultValue,
        onChange,
        disabled = false,
        minuteStep = 1,
        hourFormat = "12",
        showMeridiem = true,
        className = "",
        style = {},
        animationClass = "ease-hover-bounce",
        size = "md",
      },
      ref
    ) => {
      const validatedStep = useMemo(
        () => validateMinuteStep(minuteStep),
        [minuteStep]
      );

      // Dynamic height configuration
      const itemHeight = useMemo(() => {
        if (size === "sm") return 34;
        if (size === "lg") return 54;
        return 44; // default 'md'
      }, [size]);

      // Options arrays
      const hours = useMemo(() => generateHours(hourFormat), [hourFormat]);
      const minutes = useMemo(
        () => generateMinutes(validatedStep),
        [validatedStep]
      );
      const periods = useMemo(() => ["AM", "PM"], []);

      // Sync state helpers
      const isControlled = value !== undefined;
      const initialParsed = useMemo(() => {
        const startVal = isControlled ? value : defaultValue;
        return parseTimeString(startVal || "", hourFormat);
      }, [value, defaultValue, isControlled, hourFormat]);

      const [internalHour, setInternalHour] = useState(
        () => initialParsed.hour
      );
      const [internalMinute, setInternalMinute] = useState(() =>
        alignMinuteToStep(initialParsed.minute, validatedStep)
      );

      // Sync internally if controlled value is updated
      useEffect(() => {
        if (isControlled && value) {
          const parsed = parseTimeString(value, hourFormat);
          setInternalHour(parsed.hour);
          setInternalMinute(alignMinuteToStep(parsed.minute, validatedStep));
        }
      }, [value, isControlled, hourFormat, validatedStep]);

      // Compute active variables
      const activeHour24 = isControlled
        ? parseTimeString(value || "", hourFormat).hour
        : internalHour;
      const activeMinuteRaw = isControlled
        ? parseTimeString(value || "", hourFormat).minute
        : internalMinute;
      const activeMinute = alignMinuteToStep(activeMinuteRaw, validatedStep);

      const activeHourCol = useMemo(() => {
        if (hourFormat === "24") {
          return activeHour24;
        }
        const h12 = activeHour24 % 12;
        return h12 === 0 ? 12 : h12;
      }, [activeHour24, hourFormat]);

      const activePeriod = useMemo(() => {
        return activeHour24 >= 12 ? "PM" : "AM";
      }, [activeHour24]);

      // SSR-Safe dynamic stylesheet injection
      useEffect(() => {
        if (typeof document === "undefined") return;
        const styleId = "ease-time-picker-wheel-selector-styles";
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = styleId;
          styleEl.textContent = STYLES;
          document.head.appendChild(styleEl);
        }
      }, []);

      const handleHourSelect = (newHourCol) => {
        if (disabled) return;
        let newHour24 = newHourCol;
        if (hourFormat === "12") {
          const isPm = activePeriod === "PM";
          if (isPm) {
            newHour24 = newHourCol === 12 ? 12 : newHourCol + 12;
          } else {
            newHour24 = newHourCol === 12 ? 0 : newHourCol;
          }
        }

        if (!isControlled) {
          setInternalHour(newHour24);
        }
        if (onChange) {
          onChange(formatTimeString(newHour24, activeMinute, hourFormat));
        }
      };

      const handleMinuteSelect = (newMin) => {
        if (disabled) return;
        const alignedMin = alignMinuteToStep(newMin, validatedStep);
        if (!isControlled) {
          setInternalMinute(alignedMin);
        }
        if (onChange) {
          onChange(formatTimeString(activeHour24, alignedMin, hourFormat));
        }
      };

      const handlePeriodSelect = (newPeriod) => {
        if (disabled || hourFormat === "24") return;
        let newHour24 = activeHour24;
        const isPm = newPeriod === "PM";
        const currentHour12 = activeHour24 % 12 === 0 ? 12 : activeHour24 % 12;

        if (isPm) {
          newHour24 = currentHour12 === 12 ? 12 : currentHour12 + 12;
        } else {
          newHour24 = currentHour12 === 12 ? 0 : currentHour12;
        }

        if (!isControlled) {
          setInternalHour(newHour24);
        }
        if (onChange) {
          onChange(formatTimeString(newHour24, activeMinute, hourFormat));
        }
      };

      const showPeriodColumn = hourFormat === "12" && showMeridiem;

      return (
        <div
          ref={ref}
          className={`ease-time-picker-container size-${size} ${disabled ? "is-disabled" : ""} ${className}`}
          style={{ ...style, "--item-height": `${itemHeight}px` }}
        >
          <div className={`ease-time-picker-wheels ${animationClass}`}>
            <div className="ease-time-picker-selection-strip" />

            <Wheel
              data={hours}
              selectedValue={activeHourCol}
              onSelect={handleHourSelect}
              format={(v) => v.toString().padStart(2, "0")}
              ariaLabel="Hours"
              disabled={disabled}
              itemHeight={itemHeight}
            />

            <div className="ease-time-picker-colon" aria-hidden="true">
              :
            </div>

            <Wheel
              data={minutes}
              selectedValue={activeMinute}
              onSelect={handleMinuteSelect}
              format={(v) => v.toString().padStart(2, "0")}
              ariaLabel="Minutes"
              disabled={disabled}
              itemHeight={itemHeight}
            />

            {showPeriodColumn && (
              <>
                <div className="ease-time-picker-spacer" aria-hidden="true" />
                <Wheel
                  data={periods}
                  selectedValue={activePeriod}
                  onSelect={handlePeriodSelect}
                  ariaLabel="AM or PM"
                  disabled={disabled}
                  itemHeight={itemHeight}
                />
              </>
            )}
          </div>
        </div>
      );
    }
  )
);

TimePickerWheelSelector.displayName = "TimePickerWheelSelector";

const STYLES = `
.ease-time-picker-container {
  background: var(--ease-color-surface, #ffffff);
  border-radius: 20px;
  padding: 16px 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
  font-family: var(--ease-font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  width: 100%;
  border: 1px solid var(--ease-color-neutral-200, #e2e8f0);
  box-sizing: border-box;
}

.ease-time-picker-container *, .ease-time-picker-container *::before, .ease-time-picker-container *::after {
  box-sizing: border-box;
}

.ease-time-picker-wheels {
  --visible-items: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--item-height) * var(--visible-items));
  position: relative;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

.ease-time-picker-selection-strip {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: var(--item-height);
  transform: translateY(-50%);
  background: var(--ease-color-neutral-100, #f1f5f9);
  border-radius: 8px;
  pointer-events: none;
  z-index: 0;
  border-top: 1px solid var(--ease-color-neutral-200, rgba(255, 255, 255, 0.8));
  border-bottom: 1px solid var(--ease-color-neutral-200, rgba(255, 255, 255, 0.8));
}

.ease-time-picker-column {
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  perspective: 600px;
  flex: 1;
  outline: none;
}

.ease-time-picker-column::-webkit-scrollbar {
  display: none;
}

.ease-time-picker-pad {
  height: calc((var(--item-height) * var(--visible-items)) / 2 - (var(--item-height) / 2));
}

.ease-time-picker-item {
  height: var(--item-height);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: var(--ease-color-neutral-500, #64748b);
  cursor: pointer;
  scroll-snap-align: center;
  user-select: none;
  transition: all 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center center;
  will-change: transform, opacity;
  font-variant-numeric: tabular-nums;
}

.ease-time-picker-item.is-selected {
  font-weight: 700;
  color: var(--ease-color-text, #0f172a);
}

.ease-time-picker-colon {
  font-weight: 700;
  color: var(--ease-color-text, #0f172a);
  margin: 0 6px;
  z-index: 1;
  user-select: none;
  text-align: center;
}

.ease-time-picker-spacer {
  width: 12px;
}

/* Sizing configurations */
.ease-time-picker-container.size-sm {
  max-width: 240px;
}
.ease-time-picker-container.size-sm .ease-time-picker-item {
  font-size: 1.2rem;
}
.ease-time-picker-container.size-sm .ease-time-picker-item.is-selected {
  font-size: 1.3rem;
}
.ease-time-picker-container.size-sm .ease-time-picker-colon {
  font-size: 1.2rem;
}

.ease-time-picker-container.size-md {
  max-width: 300px;
}
.ease-time-picker-container.size-md .ease-time-picker-item {
  font-size: 1.45rem;
}
.ease-time-picker-container.size-md .ease-time-picker-item.is-selected {
  font-size: 1.6rem;
}
.ease-time-picker-container.size-md .ease-time-picker-colon {
  font-size: 1.45rem;
}

.ease-time-picker-container.size-lg {
  max-width: 360px;
}
.ease-time-picker-container.size-lg .ease-time-picker-item {
  font-size: 1.7rem;
}
.ease-time-picker-container.size-lg .ease-time-picker-item.is-selected {
  font-size: 1.9rem;
}
.ease-time-picker-container.size-lg .ease-time-picker-colon {
  font-size: 1.7rem;
}

/* Accessible focus ring indicators */
.ease-time-picker-column:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: -2px;
  border-radius: 6px;
}

/* Disabled State overlay and layout shifts */
.ease-time-picker-container.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.ease-time-picker-container.is-disabled .ease-time-picker-column {
  overflow: hidden !important;
  cursor: not-allowed;
}

.ease-time-picker-container.is-disabled .ease-time-picker-item {
  cursor: not-allowed;
  transform: none !important;
  opacity: 0.25 !important;
}

.ease-time-picker-container.is-disabled .ease-time-picker-selection-strip {
  background-color: var(--ease-color-neutral-200, #e2e8f0);
}

/* Reduced motion settings */
@media (prefers-reduced-motion: reduce) {
  .ease-time-picker-column {
    scroll-behavior: auto !important;
  }
  .ease-time-picker-item {
    transition: none !important;
    transform: none !important;
  }
}

/* Dark theme color scheme rules */
@media (prefers-color-scheme: dark) {
  .ease-time-picker-container {
    background: var(--ease-color-surface, #141e33);
    border-color: var(--ease-color-neutral-800, #1e293b);
  }
  .ease-time-picker-selection-strip {
    background: var(--ease-color-neutral-800, #1e293b);
    border-top: 1px solid var(--ease-color-neutral-700, #334155);
    border-bottom: 1px solid var(--ease-color-neutral-700, #334155);
  }
  .ease-time-picker-item.is-selected {
    color: var(--ease-color-text, #f8fafc);
  }
  .ease-time-picker-colon {
    color: var(--ease-color-text, #f8fafc);
  }
}
`;

export default TimePickerWheelSelector;
