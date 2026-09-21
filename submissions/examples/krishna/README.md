# EaseMotion — Core Animations Engine

## Flip Turn Page Book Mixin & Utility

The **Flip Turn Page Book** pattern applies a 3D book-page turning effect pivoting along an anchor axis. Ideal for digital readers, interactive page transitions, onboarding flows, and flip-cards.

---

### Usage Options

#### 1. SCSS Mixin Integration (Recommended)
Include the mixin directly inside your SCSS stylesheets to customize parameters at compile time:

```scss
@import 'easemotion/animations';

.my-card-element {
  @include ease-flip-turn-page-book(
    $duration: 800ms,
    $timing: cubic-bezier(0.25, 1, 0.5, 1),$origin: center left
  );
}
