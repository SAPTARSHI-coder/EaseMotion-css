# SCSS Overscroll Y Behavior v2

An extended modular utility mixin for the EaseMotion SCSS suite. It provides precise control over vertical scroll chaining boundaries, preventing body scroll leakage in modals, bottom sheets, or popovers while integrating iOS touch momentum and token-driven scrollbar styling.

## Features
- **Scroll Boundary Control:** Easily set `overscroll-behavior-y` (`contain`, `none`, or `auto`) with cross-browser legacy fallbacks (`-ms-scroll-chaining`).
- **iOS WebKit Smooth Touch:** Enables `-webkit-overflow-scrolling: touch` for natural inertia scrolling on iOS devices.
- **Token-Driven Scrollbar Styling:** Maps custom Firefox (`scrollbar-width`, `scrollbar-color`) and WebKit (`::-webkit-scrollbar`) styles to EaseMotion design tokens.
- **Accessibility Integration:** Respects `@media (prefers-reduced-motion: reduce)` settings by disabling smooth scrolling transitions.

## SCSS Mixin Usage

Import `scss/mixins` into your SCSS workflow:

```scss
@import 'path/to/scss/mixins';

// 1. Basic Usage (Defaults: 'contain', iOS momentum enabled, scrollbars styled)
.modal-body {
  @include overscroll-y-v2();
}

// 2. Custom Parameters
.drawer-container {
  @include overscroll-y-v2(
    $behavior: 'none',
    $enable-smooth-scroll: true,
    $style-scrollbar: true,
    $duration: var(--easemotion-duration-fast),
    $timing: var(--easemotion-ease-standard)
  );
}
