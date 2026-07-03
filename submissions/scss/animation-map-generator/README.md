# SCSS Automation Layer: Animation Map & Keyframe Generator

Refactors repetitive animation timing options, layout delays, and keyframe definitions into structured SCSS maps to reduce framework footprint and simplify scaling.

## Features

- **Dynamic Keyframe Generation:** Automates the injection of `@keyframes` directives straight from data maps.
- **Dual-Mapped Utilities:** Automatically outputs both semantic classes (`.ease-duration-fast`) and numeric variants (`.ease-duration-200`) using clean iterative patterns.
- **Variable Coupling:** Utilities are bound directly to CSS variables (`var(--ease-speed-*)`) to safeguard global user runtime theme overrides.

## Configuration API Reference

### Maps Exposed
- `$ease-durations` - Maps timing metrics alongside explicit numeric aliases.
- `$ease-delays` - Manages baseline stagger timeline variables.
- `$ease-keyframes-registry` - Declares structural transitions and layout properties (`from` / `to`).

## Installation Hook

```scss
@use "submissions/scss/animation-map-generator/animation-map-generator";
```

## Generated CSS Example

``` css
:root {
  --ease-speed-fast: 200ms;
  --ease-speed-medium: 400ms;
  --ease-delay-100: 100ms;
}

@keyframes ease-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes ease-slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.ease-duration-fast, .ease-duration-200 {
  animation-duration: var(--ease-speed-fast);
}

.ease-delay-100 {
  animation-delay: var(--ease-delay-100);
}

.ease-animation-fade-in {
  animation-name: ease-fade-in;
}
```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**