# Tumble Label Mixin

A beginner-friendly SCSS mixin for a Tumble Label — an exit animation
for labels, chips, and tags. Instead of a plain fade or slide, the
element rotates, drops slightly, and shrinks as it fades out, reading
like it lost its balance and tumbled off the layout.

## What it does

ease-tumble-label-mixin-mixin plays a single, non-looping exit
animation:

- Combines translateY, rotate, and a slight scale down to 0.85 with a
  fade to opacity: 0, all driven by an accelerating easing curve so the
  motion reads as a tumble rather than a smooth slide.
- Exposes $distance and $rotation as CSS custom properties
  (--ease-tumble-distance, --ease-tumble-rotation) rather than baking
  them into the keyframes, so every call site can override them without
  duplicating the @keyframes block.
- Sets pointer-events: none for the duration of the animation, since an
  element that's mid-exit shouldn't still be clickable or focusable.
- Falls back to a plain fade (no rotation or movement) under
  prefers-reduced-motion: reduce.

Because this is an exit animation, it's one-shot (forwards fill mode,
no infinite) and is meant to be triggered by adding a class right
before the element is removed from the DOM.

## Usage

    @use "tumble-label-mixin" as *;

    .label--exiting {
      @include ease-tumble-label-mixin-mixin(0.5s);
    }

    // All parameters are optional and can be overridden:
    .label--exiting-far {
      @include ease-tumble-label-mixin-mixin(
        $duration: 0.7s,
        $distance: 60px,
        $rotation: 50deg
      );
    }

Markup:

    <span class="label" id="my-label">Draft</span>

JS trigger:

    const label = document.getElementById("my-label");

    function dismissLabel() {
      label.classList.add("label--exiting");
      label.addEventListener("animationend", () => label.remove(), { once: true });
    }

### Parameters

| Parameter   | Default                         | Description                                     |
|-------------|-----------------------------------|--------------------------------------------------|
| $duration   | 0.5s                              | Length of the exit animation.                     |
| $distance   | 32px                               | How far the label drops before it's gone.         |
| $rotation   | 35deg                              | How far the label rotates during the tumble.      |
| $easing     | cubic-bezier(0.55, 0, 1, 0.45)     | Easing curve; defaults to an accelerating tumble. |

## Accessibility

- Because this is an exit animation, pair it with aria-live="polite" on
  a nearby status region (or toggle aria-hidden="true" at the same time
  the exit class is added) so assistive tech isn't left announcing an
  element that's about to disappear.
- If the exiting label can hold keyboard focus, move focus to a
  sensible place when the exit starts, rather than leaving focus on an
  element that's about to be removed.
- pointer-events: none is applied automatically so the label can't be
  re-triggered mid-exit.
- Under prefers-reduced-motion: reduce, the rotate/translate/scale
  tumble is swapped for a plain fade — the element still leaves, just
  without the physical motion.

## Why this is useful for EaseMotion CSS

Most exit animations in component libraries are a straight fade or
slide. This mixin gives EaseMotion CSS a distinct, more expressive
removal pattern for dismissible labels, tags, and chips — useful
anywhere a "discarded" or "knocked away" feeling fits better than a
neutral fade.
