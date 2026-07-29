import React, { useEffect, useMemo, useState } from "react";
import "./style.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  const getInitialPreference = () => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return false;
    }

    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  };

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialPreference);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const handlePreferenceChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handlePreferenceChange);
      return () =>
        mediaQuery.removeEventListener("change", handlePreferenceChange);
    }

    mediaQuery.addListener(handlePreferenceChange);
    return () => mediaQuery.removeListener(handlePreferenceChange);
  }, []);

  return prefersReducedMotion;
}

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function MotionAccessibilityGuard({
  animationClass,
  fallbackClass,
  respectReducedMotion = true,
  disabled = false,
  className,
  as: Component = "div",
  onMotionDisabled,
  children,
  ...restProps
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const reducedMotionDisabled = respectReducedMotion && prefersReducedMotion;
  const motionDisabled = disabled || reducedMotionDisabled;
  const disabledReason = disabled
    ? "disabled"
    : reducedMotionDisabled
      ? "reduced-motion"
      : null;
  const appliedMotionClass = motionDisabled ? fallbackClass : animationClass;

  const composedClassName = useMemo(
    () => joinClasses(className, appliedMotionClass),
    [className, appliedMotionClass]
  );

  useEffect(() => {
    if (motionDisabled && typeof onMotionDisabled === "function") {
      onMotionDisabled(disabledReason);
    }
  }, [disabledReason, motionDisabled, onMotionDisabled]);

  return (
    <Component className={composedClassName || undefined} {...restProps}>
      {children}
    </Component>
  );
}

export default function Demo() {
  return (
    <main className="motion-guard-page">
      <section
        className="motion-guard-card"
        aria-labelledby="motion-guard-title"
      >
        <p className="motion-guard-kicker">EaseMotion CSS</p>
        <h1 id="motion-guard-title">MotionAccessibilityGuard</h1>
        <p className="motion-guard-copy">
          Wrap existing animation classes and let the component decide when
          motion is appropriate.
        </p>

        <MotionAccessibilityGuard
          animationClass="fade-up"
          fallbackClass="fade"
          className="motion-guard-demo"
          respectReducedMotion
        >
          <button className="demo-button" type="button">
            Accessible Motion
          </button>
        </MotionAccessibilityGuard>

        <p className="reduced-motion-message" role="status">
          If reduced motion is enabled, the fallback fade class is used instead
          of fade-up.
        </p>
      </section>
    </main>
  );
}
