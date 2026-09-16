import React, { useState } from "react";

/**
 * BlurAvatar
 * ----------------------------------------------------------------------------
 * A reusable React Avatar component that leverages the EaseMotion CSS
 * `ease-blur` utility class to render a soft blur placeholder while the
 * avatar image loads (progressive-image style), and to apply an optional
 * blur effect for offline / away / disabled user states.
 *
 * The component is fully controlled by props — the parent decides the src,
 * size, status, and alt text. Under the hood, `ease-blur` provides the
 * blur transition and the component composes it with other EaseMotion
 * utilities (`ease-transition`, `ease-hover-lift`) for a polished feel.
 *
 * @component
 * @author  soumyasekharshee265-ux
 *
 * @param {Object} props
 * @param {string}  props.src                    - Image source URL.
 * @param {string} [props.alt=""]                - Alt text for the image.
 * @param {string} [props.name=""]               - Used to generate initials
 *                                                 when no image is provided.
 * @param {"xs"|"sm"|"md"|"lg"|"xl"} [props.size="md"] - Avatar size token.
 * @param {"circle"|"rounded"|"square"} [props.shape="circle"] - Avatar shape.
 * @param {"online"|"away"|"offline"|"none"} [props.status="none"] - Status ring.
 * @param {boolean} [props.blurred=false]        - Force the avatar into a
 *                                                 blurred state (useful for
 *                                                 offline / disabled users).
 * @param {boolean} [props.progressive=true]     - When true, the image starts
 *                                                 blurred and un-blurs once
 *                                                 it finishes loading.
 * @param {string}  [props.className=""]         - Extra classes appended.
 * @param {function} [props.onClick]             - Optional click handler.
 *
 * @example
 *   // Progressive image loading (blurred → sharp)
 *   <BlurAvatar
 *     src="https://example.com/avatar.jpg"
 *     alt="Jane Doe"
 *     name="Jane Doe"
 *     size="lg"
 *     status="online"
 *   />
 *
 *   // Offline user — force blurred state
 *   <BlurAvatar
 *     src="https://example.com/avatar.jpg"
 *     alt="John Smith"
 *     status="offline"
 *     blurred
 *   />
 */
const BlurAvatar = ({
  src,
  alt = "",
  name = "",
  size = "md",
  shape = "circle",
  status = "none",
  blurred = false,
  progressive = true,
  className = "",
  onClick,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  // Build initials from `name` (falls back to first char of alt)
  const initials = (name || alt || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase() || "?";

  // Should the image be visually blurred right now?
  const isBlurred =
    blurred || (progressive && !loaded && !errored) || status === "offline";

  // Compose EaseMotion utility classes.
  const wrapperClasses = [
    "ease-avatar",
    `ease-avatar-${size}`,
    `ease-avatar-${shape}`,
    status !== "none" ? `ease-avatar-status-${status}` : "",
    "ease-transition",
    onClick ? "ease-hover-lift" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageClasses = [
    "ease-avatar-img",
    "ease-transition",
    isBlurred ? "ease-blur" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (typeof onClick === "function") onClick(e);
  };

  const showImage = src && !errored;

  return (
    <span
      className={wrapperClasses}
      role={onClick ? "button" : "img"}
      aria-label={alt || name || "avatar"}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(e);
              }
            }
          : undefined
      }
      {...rest}
    >
      {showImage ? (
        <img
          className={imageClasses}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          draggable={false}
        />
      ) : (
        <span className="ease-avatar-fallback" aria-hidden="true">
          {initials}
        </span>
      )}

      {status !== "none" && (
        <span
          className={`ease-avatar-badge ease-avatar-badge-${status}`}
          aria-label={`status: ${status}`}
        />
      )}
    </span>
  );
};

export default BlurAvatar;
