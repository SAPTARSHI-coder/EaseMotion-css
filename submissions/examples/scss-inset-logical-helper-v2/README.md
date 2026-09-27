# SCSS CSS Inset Logical Helper v2

An extended modular utility mixin for the EaseMotion SCSS suite. It brings modern CSS logical inset properties (`inset`, `inset-block-start`, `inset-inline-end`, etc.) into your design system with complete backwards compatibility for physical positioning properties (`top`, `right`, `bottom`, `left`).

## Features
- **Shorthand Mapping (1-4 Values):** Accepts single value (all sides), 2 values (vertical/horizontal), 3 values, or 4 values mirroring native CSS shorthand syntax.
- **RTL & I18n Ready:** Generates logical `inset-block` and `inset-inline` declarations for seamless right-to-left layout adaptation.
- **Cross-Browser Physical Fallbacks:** Emits physical `top`/`right`/`bottom`/`left` rules alongside `@supports (inset: 0)` blocks.
- **EaseMotion Animation Tokens:** Integrates optional inset transitions powered by EaseMotion timing (`--easemotion-duration-fast`) and curve (`--easemotion-ease-bounce`) tokens.
- **Accessibility Safeguards:** Automatically includes `@media (prefers-reduced-motion: reduce)` overrides.

## SCSS Mixin Usage

Import `scss/mixins` into your SCSS pipeline:

```scss
@import 'path/to/scss/mixins';

// 1. Basic Full Inset (Position: absolute, inset: 0)
.modal-backdrop {
  @include inset-logical-v2(0);
}

// 2. Custom Position and Directional Shorthand
.floating-bar {
  @include inset-logical-v2(10px 20px, fixed);
}

// 3. Animated Inset Shift
.slide-drawer {
  @include inset-logical-v2(
    $values: 100% 0 -100% 0,
    $position: absolute,
    $animate-inset: true,
    $duration: var(--easemotion-duration-medium),
    $timing: var(--easemotion-ease-bounce)
  );

  &:hover {
    @include inset-logical-v2(0, absolute, false);
  }
}
