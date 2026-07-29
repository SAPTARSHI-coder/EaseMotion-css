React Glitch Banner Component
A standalone, accessible React component that applies a smooth, pure-CSS cyberpunk glitch effect to text. Designed as a visually striking banner or loading indicator.

Features
Pure CSS Animation: Uses clip-path and pseudo-elements (::before, ::after) to create the cyan/magenta RGB split effect without relying on heavy JavaScript intervals.
Accessibility First: Includes role="banner" and aria-label attributes for screen readers.
Motion Sensitivity: Fully respects @media (prefers-reduced-motion: reduce) by disabling all flashing and erratic animations automatically for users with vestibular disorders.
Scoped Styling: All classes are uniquely suffixed with -ag to prevent CSS bleed in the global EaseMotion ecosystem.

Usage
import GlitchBanner from './GlitchBanner';
function App() {
  return (
    <main>
      {/* Basic Usage */}
      <GlitchBanner />
  );
}
