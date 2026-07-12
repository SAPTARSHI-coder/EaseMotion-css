import React, { useState, useRef, useEffect, memo, forwardRef } from "react";

/**
 * Sentiment option configuration mapping.
 * Each item defines the ID, emoji character, and accessibility/visual label.
 */
const SENTIMENT_OPTIONS = [
  { id: "very-dissatisfied", emoji: "😡", label: "Very Dissatisfied" },
  { id: "dissatisfied", emoji: "🙁", label: "Dissatisfied" },
  { id: "neutral", emoji: "😐", label: "Neutral" },
  { id: "satisfied", emoji: "🙂", label: "Satisfied" },
  { id: "very-satisfied", emoji: "😍", label: "Very Satisfied" },
];

/**
 * FeedbackSentimentEmojiPicker
 * A production-quality, premium React sentiment picker component.
 */
const FeedbackSentimentEmojiPicker = memo(
  forwardRef(
    (
      {
        selected,
        defaultValue,
        onChange,
        disabled = false,
        size = "md",
        showLabels = true,
        className = "",
        style = {},
        animationClass = "ease-hover-bounce",
      },
      ref
    ) => {
      const isControlled = selected !== undefined;
      const [internalValue, setInternalValue] = useState(defaultValue || null);
      const activeValue = isControlled ? selected : internalValue;

      const buttonRefs = useRef([]);

      // SSR-Safe: Inject styles into document.head once only on client mount
      useEffect(() => {
        if (typeof document === "undefined") return;

        const styleId = "ease-sentiment-picker-styles";
        let styleEl = document.getElementById(styleId);

        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = styleId;
          styleEl.textContent = STYLES;
          document.head.appendChild(styleEl);
        }
      }, []);

      const handleSelect = (id) => {
        if (disabled) return;
        if (!isControlled) {
          setInternalValue(id);
        }
        if (onChange) {
          onChange(id);
        }
      };

      /**
       * Implements custom accessible keyboard navigation rules for radiogroup:
       * - ArrowRight / ArrowDown selects the next enabled emoji.
       * - ArrowLeft / ArrowUp selects the previous enabled emoji.
       * - Home selects the first enabled emoji.
       * - End selects the last enabled emoji.
       */
      const handleKeyDown = (e, index) => {
        if (disabled) return;

        // Filter out disabled indices (if any individual disable overrides are ever needed)
        const enabledIndices = SENTIMENT_OPTIONS.map((_, idx) => idx).filter(
          (idx) => !disabled
        );

        if (enabledIndices.length === 0) return;

        const currentIdxInEnabled = enabledIndices.indexOf(index);
        let nextIdx = -1;

        switch (e.key) {
          case "ArrowRight":
          case "ArrowDown":
            e.preventDefault();
            nextIdx =
              enabledIndices[(currentIdxInEnabled + 1) % enabledIndices.length];
            break;
          case "ArrowLeft":
          case "ArrowUp":
            e.preventDefault();
            nextIdx =
              enabledIndices[
                (currentIdxInEnabled - 1 + enabledIndices.length) %
                  enabledIndices.length
              ];
            break;
          case "Home":
            e.preventDefault();
            nextIdx = enabledIndices[0];
            break;
          case "End":
            e.preventDefault();
            nextIdx = enabledIndices[enabledIndices.length - 1];
            break;
          default:
            return;
        }

        if (nextIdx !== -1) {
          const nextOption = SENTIMENT_OPTIONS[nextIdx];
          handleSelect(nextOption.id);

          // Shift focus to the newly selected item on the next tick
          setTimeout(() => {
            buttonRefs.current[nextIdx]?.focus();
          }, 0);
        }
      };

      // Roving tabIndex logic for keyboard accessibility:
      // Only the active/selected option should have tabIndex={0}.
      // If nothing is selected, only the first enabled option gets tabIndex={0}.
      // All others get tabIndex={-1}.
      const activeIndex = SENTIMENT_OPTIONS.findIndex(
        (opt) => opt.id === activeValue
      );
      const getTabIndex = (index) => {
        if (disabled) return -1;
        if (activeIndex !== -1) {
          return index === activeIndex ? 0 : -1;
        }
        return index === 0 ? 0 : -1;
      };

      const hasSelection = activeValue !== null;

      return (
        <div
          ref={ref}
          className={`ease-sentiment-picker size-${size} ${disabled ? "is-disabled" : ""} ${className}`}
          style={style}
        >
          <div
            className={`ease-sentiment-group ${hasSelection ? "has-selection" : ""}`}
            role="radiogroup"
            aria-label="Feedback Sentiment Rating"
            aria-disabled={disabled}
          >
            {SENTIMENT_OPTIONS.map((option, index) => {
              const isSelected = activeValue === option.id;
              const tabIndex = getTabIndex(index);

              return (
                <div
                  key={option.id}
                  className={`ease-sentiment-item ${isSelected ? "is-selected" : ""}`}
                >
                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-pressed={isSelected}
                    aria-label={option.label}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    className={`ease-sentiment-btn ${animationClass}`}
                    onClick={() => handleSelect(option.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    <span
                      className="ease-sentiment-emoji"
                      role="img"
                      aria-hidden="true"
                    >
                      {option.emoji}
                    </span>
                  </button>
                  {showLabels && (
                    <span className="ease-sentiment-label" aria-hidden="true">
                      {option.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  )
);

FeedbackSentimentEmojiPicker.displayName = "FeedbackSentimentEmojiPicker";

const STYLES = `
.ease-sentiment-picker {
  display: inline-block;
  font-family: var(--ease-font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  width: 100%;
  box-sizing: border-box;
}

.ease-sentiment-picker *, .ease-sentiment-picker *::before, .ease-sentiment-picker *::after {
  box-sizing: border-box;
}

.ease-sentiment-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ease-sentiment-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  transition: opacity var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              transform var(--ease-speed-medium, 300ms) var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1)),
              filter var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
}

.ease-sentiment-btn {
  background-color: var(--ease-color-neutral-100, #f1f5f9);
  border: 2px solid transparent;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background-color var(--ease-speed-fast, 150ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              border-color var(--ease-speed-fast, 150ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              transform var(--ease-speed-fast, 150ms) var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1));
}

/* Base Hover bounce utility styling matching EaseMotion physics guidelines */
.ease-hover-bounce {
  transition: transform var(--ease-speed-medium, 300ms) var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1)),
              background-color var(--ease-speed-fast, 150ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
}

.ease-hover-bounce:hover:not(:disabled) {
  transform: translateY(-6px) scale(1.08);
  background-color: var(--ease-color-neutral-200, #e2e8f0);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.ease-hover-bounce:active:not(:disabled) {
  transform: translateY(-2px) scale(0.95);
}

.ease-sentiment-emoji {
  display: inline-block;
  line-height: 1;
  transition: transform var(--ease-speed-medium, 300ms) var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1));
  will-change: transform;
}

.ease-sentiment-btn:hover:not(:disabled) .ease-sentiment-emoji {
  transform: scale(1.22);
}

.ease-sentiment-label {
  font-weight: 500;
  color: var(--ease-color-neutral-500, #64748b);
  text-align: center;
  transition: color var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
              transform var(--ease-speed-medium, 300ms) var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1));
  user-select: none;
}

.ease-sentiment-item:hover:not(.is-disabled) .ease-sentiment-label {
  color: var(--ease-color-neutral-800, #1e293b);
}

/* Selected/Activated State */
.ease-sentiment-item.is-selected .ease-sentiment-btn {
  background-color: var(--ease-color-surface, #ffffff);
  border-color: var(--ease-color-primary, #6c63ff);
  box-shadow: 0 8px 16px rgba(108, 99, 255, 0.15), 0 0 0 3px rgba(108, 99, 255, 0.1);
  transform: translateY(-8px) scale(1.06);
}

.ease-sentiment-item.is-selected .ease-sentiment-emoji {
  transform: scale(1.28);
  animation: ease-sentiment-selected-pulse 2s ease-in-out infinite alternate;
}

.ease-sentiment-item.is-selected .ease-sentiment-label {
  color: var(--ease-color-primary, #6c63ff);
  font-weight: 700;
}

@keyframes ease-sentiment-selected-pulse {
  0% { transform: scale(1.28); }
  100% { transform: scale(1.18); }
}

/* Sibling Dimming: modern :has() approach + fallback .has-selection */
.ease-sentiment-group:has(.is-selected) .ease-sentiment-item:not(.is-selected),
.ease-sentiment-group.has-selection .ease-sentiment-item:not(.is-selected) {
  opacity: 0.45;
  filter: grayscale(50%);
}

.ease-sentiment-group:has(.is-selected) .ease-sentiment-item:not(.is-selected) .ease-sentiment-btn,
.ease-sentiment-group.has-selection .ease-sentiment-item:not(.is-selected) .ease-sentiment-btn {
  transform: scale(0.94);
}

/* Focus Ring styling on keyboard navigation focus-visible */
.ease-sentiment-btn:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 4px;
}

/* Sizes */
.ease-sentiment-picker.size-sm .ease-sentiment-btn {
  width: 44px;
  height: 44px;
}
.ease-sentiment-picker.size-sm .ease-sentiment-emoji {
  font-size: 20px;
}
.ease-sentiment-picker.size-sm .ease-sentiment-label {
  font-size: 11px;
  margin-top: 6px;
}
.ease-sentiment-picker.size-sm .ease-sentiment-group {
  gap: 8px;
}

.ease-sentiment-picker.size-md .ease-sentiment-btn {
  width: 60px;
  height: 60px;
}
.ease-sentiment-picker.size-md .ease-sentiment-emoji {
  font-size: 28px;
}
.ease-sentiment-picker.size-md .ease-sentiment-label {
  font-size: 13px;
  margin-top: 8px;
}
.ease-sentiment-picker.size-md .ease-sentiment-group {
  gap: 12px;
}

.ease-sentiment-picker.size-lg .ease-sentiment-btn {
  width: 76px;
  height: 76px;
}
.ease-sentiment-picker.size-lg .ease-sentiment-emoji {
  font-size: 36px;
}
.ease-sentiment-picker.size-lg .ease-sentiment-label {
  font-size: 15px;
  margin-top: 10px;
}
.ease-sentiment-picker.size-lg .ease-sentiment-group {
  gap: 16px;
}

/* Disabled State */
.ease-sentiment-picker.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.ease-sentiment-picker.is-disabled .ease-sentiment-btn {
  background-color: var(--ease-color-neutral-200, #e2e8f0);
  color: var(--ease-color-neutral-400, #94a3b8);
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.ease-sentiment-picker.is-disabled .ease-sentiment-emoji {
  filter: grayscale(100%);
  transform: none !important;
  animation: none !important;
}

.ease-sentiment-picker.is-disabled .ease-sentiment-label {
  color: var(--ease-color-neutral-400, #94a3b8);
}

/* Dark Mode support overrides */
@media (prefers-color-scheme: dark) {
  .ease-sentiment-btn {
    background-color: var(--ease-color-neutral-800, #1e293b);
  }
  .ease-hover-bounce:hover:not(:disabled) {
    background-color: var(--ease-color-neutral-700, #334155);
  }
  .ease-sentiment-item.is-selected .ease-sentiment-btn {
    background-color: var(--ease-color-surface, #141e33);
    box-shadow: 0 8px 16px rgba(108, 99, 255, 0.25), 0 0 0 3px rgba(108, 99, 255, 0.2);
  }
  .ease-sentiment-item:hover:not(.is-disabled) .ease-sentiment-label {
    color: var(--ease-color-text, #e2e8f0);
  }
}
`;

export default FeedbackSentimentEmojiPicker;
