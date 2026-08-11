# CSS Workout Timer

An interval workout timer built purely with CSS, featuring active/rest states and a circular progress countdown.

## What does this do?
This component creates a fully functional, animated workout interval timer entirely in CSS using custom properties (`@property`) and keyframe animations, switching automatically between a 30-second active phase and a 10-second rest phase.

## How is it used?

```html
<div class="workout-timer" role="timer" aria-label="Workout Interval Timer">
  <input type="checkbox" id="timer-toggle" class="timer-toggle" aria-label="Start/Pause Timer">
  
  <div class="timer-ring">
    <div class="timer-progress-container">
      <div class="timer-progress"></div>
    </div>
    <div class="timer-display">
      <span class="timer-state"></span>
      <span class="timer-time"></span>
    </div>
  </div>
  
  <div class="timer-controls">
    <label for="timer-toggle"></label>
  </div>
</div>
```

## Why is this useful for EaseMotion CSS?
This component expands the library's collection of ready-to-use CSS animations and UI components, helping front-end developers implement this pattern without relying on JavaScript libraries. It leverages advanced modern CSS like `@property` for variable animation, demonstrating what is possible without script intervention.
