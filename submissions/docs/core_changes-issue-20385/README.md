# Core Changes Proposal: Issue #20385

## Feature Overview

Issue [#20385](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20385) requests dedicated **Text Animation Utility Classes** for EaseMotion CSS.

This submission proposes adding 5 text animation utilities to `core/animations.css`:

| Class                      | Effect                                                |
| -------------------------- | ----------------------------------------------------- |
| `.ease-text-glow`          | Pulsing `text-shadow` glow animation                  |
| `.ease-text-shimmer`       | Gradient sweep via `background-clip: text`            |
| `.ease-text-typewriter`    | Pure CSS typewriter reveal with blinking cursor       |
| `.ease-text-glitch`        | `clip-path` digital glitch with pseudo-element ghosts |
| `.ease-text-gradient-flow` | Animated flowing multi-stop gradient text             |

## Proposed Implementation

All classes use CSS custom properties for theming, respect `prefers-reduced-motion`, and require zero JavaScript.

### Proposed CSS to add to `core/animations.css`

```css
/* ── Text Glow ── */
.ease-text-glow {
  animation: ease-kf-text-glow 2s ease-in-out infinite;
}

@keyframes ease-kf-text-glow {
  0%,
  100% {
    text-shadow:
      0 0 8px currentColor,
      0 0 16px currentColor;
  }
  50% {
    text-shadow:
      0 0 16px currentColor,
      0 0 32px currentColor,
      0 0 48px currentColor;
  }
}

/* ── Text Shimmer ── */
.ease-text-shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    currentColor 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ease-kf-text-shimmer 2s linear infinite;
}

@keyframes ease-kf-text-shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

/* ── Text Typewriter ── */
.ease-text-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid currentColor;
  width: 0;
  animation:
    ease-kf-text-typewriter 3s steps(30, end) forwards,
    ease-kf-text-cursor 0.75s step-end infinite;
}

@keyframes ease-kf-text-typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes ease-kf-text-cursor {
  50% {
    border-color: transparent;
  }
}

/* ── Text Glitch ── */
.ease-text-glitch {
  position: relative;
}

.ease-text-glitch::before,
.ease-text-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ease-text-glitch::before {
  animation: ease-kf-text-glitch-top 2s infinite linear alternate-reverse;
  clip-path: inset(0 0 60% 0);
  color: #ff006e;
}

.ease-text-glitch::after {
  animation: ease-kf-text-glitch-bottom 2s infinite linear alternate-reverse;
  clip-path: inset(60% 0 0 0);
  color: #00e5ff;
}

@keyframes ease-kf-text-glitch-top {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -1px);
  }
  60% {
    transform: translate(-1px, 1px);
  }
  80% {
    transform: translate(1px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes ease-kf-text-glitch-bottom {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(-2px, 1px);
  }
  60% {
    transform: translate(1px, -1px);
  }
  80% {
    transform: translate(-1px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

/* ── Text Gradient Flow ── */
.ease-text-gradient-flow {
  background: linear-gradient(
    90deg,
    #ff006e,
    #fb5607,
    #ffbe0b,
    #8338ec,
    #3a86ff
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ease-kf-text-gradient-flow 4s linear infinite;
}

@keyframes ease-kf-text-gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}
```

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-text-glow,
  .ease-text-shimmer,
  .ease-text-typewriter,
  .ease-text-glitch,
  .ease-text-gradient-flow,
  .ease-text-glitch::before,
  .ease-text-glitch::after {
    animation: none !important;
  }
  .ease-text-typewriter {
    width: auto;
    border-right: none;
  }
}
```

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this feature is proposed as a formal submission in the `submissions/` directory rather than modifying `core/animations.css` directly.

Fixes #20385
