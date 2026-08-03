import React, { useEffect, useMemo, useState } from "react";
import "./style.css";

/**
 * GlitchBanner — React attention / loading banner with a smooth glitch effect.
 * Issue #50776 · submissions/react/feature-glitch-banner-component-ab
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Banner message content
 * @param {boolean} [props.loading=true] - When true, plays the glitch loading cue
 * @param {'soft'|'medium'|'strong'} [props.intensity='medium'] - Glitch intensity
 * @param {'primary'|'success'|'danger'|'neutral'} [props.variant='primary'] - Color variant
 * @param {string} [props.className=''] - Extra class names
 * @param {string} [props.label] - Accessible name for the status region
 * @param {string|number} [props.as='aside'] - Wrapper element tag
 */
export default function GlitchBanner({
  children = "Hello",
  loading = true,
  intensity = "medium",
  variant = "primary",
  className = "",
  label,
  as: Wrapper = "aside",
  ...rest
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);

    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  const textContent = useMemo(() => {
    if (typeof children === "string" || typeof children === "number") {
      return String(children);
    }
    return "Loading";
  }, [children]);

  const accessibleLabel =
    label ||
    (loading ? "Loading status" : "Status banner");

  const rootClass = [
    "glitch-banner-ab",
    `glitch-banner-${variant}-ab`,
    `glitch-banner-intensity-${intensity}-ab`,
    loading && !reducedMotion ? "is-glitching-ab" : "",
    loading ? "is-loading-ab" : "",
    reducedMotion ? "is-reduced-motion-ab" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper
      className={rootClass}
      role="status"
      aria-live="polite"
      aria-busy={loading ? "true" : "false"}
      aria-label={accessibleLabel}
      {...rest}
    >
      <span className="glitch-banner-track-ab">
        <span
          className="glitch-banner-layer-ab glitch-banner-layer-cyan-ab"
          aria-hidden="true"
          data-text={textContent}
        />
        <span
          className="glitch-banner-layer-ab glitch-banner-layer-magenta-ab"
          aria-hidden="true"
          data-text={textContent}
        />
        <span className="glitch-banner-text-ab">{children}</span>
      </span>

      {loading ? (
        <span className="glitch-banner-meta-ab" aria-hidden="true">
          <span className="glitch-banner-dot-ab" />
          <span className="glitch-banner-dot-ab" />
          <span className="glitch-banner-dot-ab" />
        </span>
      ) : null}
    </Wrapper>
  );
}

/**
 * Tiny playground helper (optional) — toggle loading to demo the glitch.
 * Not required by the issue; useful when embedding this submission in a sandbox.
 */
export function GlitchBannerDemoAb() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="glitch-banner-demo-ab">
      <GlitchBanner loading={loading} intensity="medium" variant="primary">
        Syncing EaseMotion tokens…
      </GlitchBanner>

      <button
        type="button"
        className="glitch-banner-demo-btn-ab"
        onClick={() => setLoading((value) => !value)}
      >
        {loading ? "Mark loaded" : "Replay loading glitch"}
      </button>
    </div>
  );
}
