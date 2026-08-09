# Rock Spinner Mixin

A beginner-friendly SCSS mixin for a Rock Spinner — an "info state"
loading indicator that rocks side-to-side (like a metronome) instead of
doing a continuous 360-degree spin. It reads as calmer and less urgent
than a standard spinner, which suits inline status/info indicators
rather than long blocking loads.

## What it does

ease-rock-spinner-mixin-mixin turns any element into a ring that gently
rocks between -$angle and +$angle on an infinite loop. Internally it:

- Builds the ring shape with border-radius: 50% plus a contrasting
  border-top-color, the same technique classic CSS spinners use.
- Drives the rock motion off a CSS custom property (--ease-rock-angle)
  rather than baking the angle into the keyframes, so every call site can
  pass its own $angle without duplicating the @keyframes block.
- Swaps to a gentle opacity pulse instead of rotation whenever the user
  has prefers-reduced-motion: reduce set, so the indicator keeps
  communicating "something is happening" without the motion.

## Usage

    @use "rock-spinner-mixin" as *;

    .info-spinner {
      @include ease-rock-spinner-mixin-mixin(0.9s);
    }

    // All parameters are optional and can be overridden:
    .info-spinner--large {
      @include ease-rock-spinner-mixin-mixin(
        $duration: 1.4s,
        $size: 64px,
        $color: #17e0b8,
        $track-color: rgba(23, 224, 184, 0.15),
        $angle: 30deg
      );
    }

Markup:

    <div class="info-spinner" role="status" aria-label="Loading"></div>

### Parameters

| Parameter      | Default                | Description                              |
|----------------|-------------------------|-------------------------------------------|
| $duration      | 1.2s                    | Length of one full rock cycle.             |
| $size          | 40px                    | Width and height of the spinner ring.      |
| $color         | currentColor            | Color of the active (top) arc.             |
| $track-color   | rgba(0, 0, 0, 0.12)     | Color of the rest of the ring.             |
| $angle         | 24deg                   | How far the ring rocks in each direction.  |

## Accessibility

- Intended markup uses role="status" and an aria-label so assistive tech
  announces the element as a live status indicator rather than silent
  decoration.
- Under prefers-reduced-motion: reduce, the rotation animation is
  swapped for a slower opacity pulse — motion is reduced, not removed,
  so the indicator still conveys activity.
- Purely decorative — it carries no interactive state — so no keyboard
  handling is required.

## Why this is useful for EaseMotion CSS

Most spinner examples in the wild only offer a single continuous-spin
variant. This mixin adds a distinct, calmer motion pattern to EaseMotion
CSS's animation vocabulary for cases (info banners, inline status chips,
"still working" indicators) where a hard spin feels too aggressive.
