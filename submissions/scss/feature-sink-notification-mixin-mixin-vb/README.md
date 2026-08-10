# Sink Notification Mixin

A beginner-friendly SCSS mixin for a Sink Notification — an entrance
animation for warning-state notifications and banners. Instead of a
plain drop or fade-in, the element sinks past its resting point like a
weighted object settling into place, then eases back up to rest. It
reads as heavier and more deliberate than a bouncy entrance, which
suits a warning that should feel serious rather than playful.

## What it does

ease-sink-notification-mixin-mixin plays a single entrance animation:

- Starts above its resting position and invisible, drops down past
  rest (an overshoot), rebounds slightly upward, then settles at
  translateY(0) — the "sink" comes from that overshoot-and-settle
  motion, not a straight drop.
- Deepens its box-shadow as it lands, so the element visually gains
  weight the moment it settles, reinforcing the "sinking into place"
  feel.
- Exposes $start and $overshoot as CSS custom properties
  (--ease-sink-start, --ease-sink-overshoot) rather than baking them
  into the keyframes, so every call site can override them without
  duplicating the @keyframes block.
- Uses animation-fill-mode: backwards so the element holds its
  invisible, pre-entrance state until the animation actually starts,
  instead of flashing its final appearance for one frame beforehand.
- Falls back to a plain fade-in under prefers-reduced-motion: reduce,
  with no vertical movement or overshoot.

## Usage

    @use "sink-notification-mixin" as *;

    .notification--warning {
      @include ease-sink-notification-mixin-mixin(0.6s);
    }

    // All parameters are optional and can be overridden:
    .notification--warning-heavy {
      @include ease-sink-notification-mixin-mixin(
        $duration: 0.8s,
        $start: 32px,
        $overshoot: 16px
      );
    }

Markup:

    <div class="notification notification--warning" role="alert">
      Your session will expire in 2 minutes.
    </div>

### Parameters

| Parameter   | Default                          | Description                                      |
|-------------|-------------------------------------|-----------------------------------------------------|
| $duration   | 0.6s                                 | Length of the sink-and-settle entrance.              |
| $start      | 24px                                 | How far above rest the notification starts.          |
| $overshoot  | 10px                                 | How far past rest it dips before rebounding back up. |
| $easing     | cubic-bezier(0.34, 1.1, 0.4, 1)      | Easing curve driving the overshoot-and-settle feel.  |

## Accessibility

- Intended markup uses role="alert" (or role="status" for less urgent
  variants) so assistive tech announces the warning as soon as it's
  inserted into the DOM, independent of the animation.
- The animation is purely visual polish on top of that announcement —
  it never delays or blocks the notification's content from being
  read.
- Under prefers-reduced-motion: reduce, the overshoot/settle motion is
  swapped for a plain fade-in — the notification still appears
  clearly, just without the physical motion.
- animation-fill-mode: backwards prevents a flash-of-final-state
  before the animation begins, so users don't see a flicker.

## Why this is useful for EaseMotion CSS

Most entrance animations in component libraries are a straight fade,
slide, or bouncy pop-in. This mixin gives EaseMotion CSS a distinct,
weightier entrance pattern that fits warning/alert-style notifications
better than a playful bounce — useful anywhere the interface needs to
signal "pay attention" without feeling alarmist or gimmicky.
