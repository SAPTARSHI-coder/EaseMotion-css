import React from "react";

/**
 * LandingPage
 *
 * A minimal, self-contained hero + feature-grid landing page section.
 * Intended as a drop-in starting point that demonstrates EaseMotion CSS
 * entrance and hover utilities working together on real content.
 */
export default function LandingPage({
  title = "Build motion-first interfaces",
  subtitle = "EaseMotion CSS gives you production-ready animation utilities without writing a single keyframe.",
  ctaLabel = "Get Started",
  onCtaClick,
  features = [
    { title: "Lightweight", desc: "No runtime, just utility classes." },
    { title: "Composable", desc: "Combine classes for layered motion." },
    { title: "Accessible", desc: "Respects prefers-reduced-motion." },
  ],
}) {
  return (
    <section className="ease-landing">
      <div className="ease-landing-hero ease-fade-in">
        <h1 className="ease-landing-title ease-slide-up">{title}</h1>
        <p className="ease-landing-subtitle ease-slide-up">{subtitle}</p>
        <button
          type="button"
          onClick={onCtaClick}
          className="ease-btn ease-btn-primary ease-hover-lift ease-landing-cta"
        >
          {ctaLabel}
        </button>
      </div>

      <div className="ease-landing-features">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="ease-landing-feature-card ease-hover-scale ease-fade-in"
          >
            <h3 className="ease-landing-feature-title">{feature.title}</h3>
            <p className="ease-landing-feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
