# ease-recipe-timer-ring-pp

Issue: #14038

## What does this do?

A themed cooking timer progress ring extending circular progress bars with staggered, rising steam wisp animations that adapt to low, medium, or high heat intensities.

## How is it used?

Include the timer ring inside your dashboard layouts:

```html
<div class="timer-card heat-medium">
  <!-- Steam Wisps -->
  <div class="steam-wisps">
    <svg class="steam-wisp wisp-1" viewBox="0 0 20 40">
      <path
        d="M10 38 C 15 28, 5 18, 10 2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg class="steam-wisp wisp-2" viewBox="0 0 20 40">
      <path
        d="M10 38 C 5 28, 15 18, 10 2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg class="steam-wisp wisp-3" viewBox="0 0 20 40">
      <path
        d="M10 38 C 15 28, 5 18, 10 2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>

  <!-- Progress Circular -->
  <div class="ease-progress-circular" style="--ease-progress: 65">
    <svg viewBox="0 0 100 100">
      <circle class="ease-circle-bg" cx="50" cy="50" r="42"></circle>
      <circle class="ease-circle-fill" cx="50" cy="50" r="42"></circle>
    </svg>
    <div class="ease-circle-text">
      <span class="time-val">04:20</span>
    </div>
  </div>
</div>
```

To control the playback state, add `.animation-paused` to the display wrapper or parent element.

## Why is it useful?

It creates a rich, contextual cooking interface. Standard progress rings can feel static; adding delicate steam wisps with translation, blurring, and staggered delays breathes life into cooking timers. Dynamically adjusting wisp velocities and colors based on heat settings (Low, Medium, High) provides clean visual cues for timers.

## Main Classes

- `.ease-progress-circular`: Base progress ring container.
- `.steam-wisps`: Absolute container for steam wisps.
- `.steam-wisp`: A single steam path element.
- `.heat-low`, `.heat-medium`, `.heat-high`: Theme modifiers adjusting ring colors and steam animation frequencies.
- `.animation-paused`: Pauses steam keyframes and freezes ring transitions.
- `.timer-done`: Highlights a finished cooking state.

## Tech Stack

- HTML5 (custom inline SVGs)
- CSS3 (transitions, keyframe animations, filters, media queries)
- Pure JavaScript (only used in the demo to manage active intervals and class toggles)
