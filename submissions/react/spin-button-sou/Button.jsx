import React from "react";

/**
 * SpinButton
 * ----------------------------------------------------------------------------
 * A reusable React Button component that leverages the EaseMotion CSS
 * `ease-spin` utility class to display a spinning icon (loader) while the
 * button is in a "loading" state.
 *
 * The component is fully controlled — the parent decides when the button is
 * loading, and the component handles the visual spin animation via
 * EaseMotion utility classes (no custom CSS required).
 *
 * @component
 * @author  soumyasekharshee265-ux
 *
 * @param {Object}   props
 * @param {React.ReactNode} [props.children="Click Me"] - Button label content.
 * @param {boolean}  [props.loading=false] - When true, shows the spinning icon
 *                                           and disables the button.
 * @param {string}   [props.variant="primary"] - Visual variant: "primary" |
 *                                               "secondary" | "ghost".
 * @param {string}   [props.size="md"] - Size token: "sm" | "md" | "lg".
 * @param {string}   [props.type="button"] - Native button type attribute.
 * @param {string}   [props.className=""] - Extra classes to append.
 * @param {function} [props.onClick] - Click handler (ignored when loading).
 * @param {boolean}  [props.disabled=false] - Force disabled state.
 *
 * @example
 *   <SpinButton loading={isSaving} onClick={handleSave}>
 *     Save Changes
 *   </SpinButton>
 */
const SpinButton = ({
  children = "Click Me",
  loading = false,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  onClick,
  disabled = false,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  // Compose EaseMotion utility classes.
  // The parent framework standardizes these to `ease-*` naming.
  const classes = [
    "ease-btn",
    `ease-btn-${variant}`,
    `ease-btn-${size}`,
    loading ? "ease-btn-loading" : "",
    "ease-hover-lift",
    "ease-transition",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (isDisabled) return;
    if (typeof onClick === "function") onClick(e);
  };

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
      aria-busy={loading}
      aria-live="polite"
      {...rest}
    >
      {loading && (
        <span
          className="ease-spin ease-btn-icon"
          role="status"
          aria-label="Loading"
        >
          {/* Minimal inline SVG spinner — no external assets needed */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="31.4 31.4"
              opacity="0.85"
            />
          </svg>
        </span>
      )}
      <span className="ease-btn-label">
        {loading ? "Loading..." : children}
      </span>
    </button>
  );
};

export default SpinButton;
