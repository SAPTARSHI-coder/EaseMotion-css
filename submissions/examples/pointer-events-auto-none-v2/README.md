# SCSS Pointer Events Auto None v2

An extended modular utility mixin for the EaseMotion SCSS suite. It enables seamless, accessible management of `pointer-events` interaction states with built-in visual feedback and token integration.

## Features
- **EaseMotion Token Integration:** Automatically references EaseMotion transition speed and timing tokens (`--easemotion-duration-fast`, `--easemotion-ease-standard`).
- **Cross-Browser Vendors:** Provides vendor prefixes (`-webkit-`, `-moz-`, `-ms-`) for `user-select` toggling alongside legacy IE opacity filters.
- **State Transition Feedback:** Smoothly transitions opacity and interaction capability between `none` and `auto` states.
- **Disabled State Modifier:** Provides a built-in `.is-disabled` modifier class for immediate interaction lockout.
- **Accessibility Compliance:** Respects user motion preferences with `@media (prefers-reduced-motion: reduce)` rules.

## SCSS Mixin Usage

Import `scss/mixins` into your SCSS workflow:

```scss
@import 'path/to/scss/mixins';

// 1. Basic Pass-Through Overlay (Defaults: initial 'none', active 'auto', 0.5 disabled opacity)
.click-overlay {
  @include pointer-events-v2();
}

// 2. Custom Parameters
.interactive-layer {
  @include pointer-events-v2(
    $initial-state: 'none',
    $active-state: 'auto',
    $animate-state-change: true,
    $disabled-opacity: 0.2,
    $duration: var(--easemotion-duration-medium),
    $timing: var(--easemotion-ease-standard)
  );
}
