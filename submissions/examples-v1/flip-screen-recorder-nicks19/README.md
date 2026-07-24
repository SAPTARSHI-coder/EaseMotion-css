# Flip Screen Recorder (Music Player Theme)

A pure CSS screen recorder component inspired by modern Music Player design patterns. It utilizes a 3D card flip to transition smoothly between an "Idle" (Ready to Record) state and an "Active" (Recording) state, complete with a dynamic audio visualizer.

## Features

- **Pure CSS 3D Flip**: Built using the reliable "Checkbox Hack" (`<input type="checkbox">` and `<label>`). Checking the box triggers a 3D `rotateY(180deg)` transition, revealing the back of the card without a single line of JavaScript.
- **Music Player Aesthetic**: Employs a dark mode "Deep Slate" color palette (`#1e293b`), sharp contrasts, and a glowing neon red accent (`#ef4444`) reminiscent of high-end audio software and modern music players.
- **Dynamic Audio Visualizer**: The active recording state features a pure CSS equalizer/visualizer. By leveraging the `--ease-delay` CSS variable, the `easeAudioBounce` keyframe animation is staggered across multiple bars, simulating live audio input.
- **Pulsing Status Indicators**: Uses a pure CSS `@keyframes easePulseRed` to create a glowing, breathing red dot that clearly indicates active recording status, enhancing the component's tactile feel.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`, ensuring the `<input type="checkbox">` comes immediately before the `.ease-flip-scene` container so the CSS sibling selector (`~`) works correctly.

## Usage Example

```html
<!-- The State Controller -->
<input type="checkbox" id="record-toggle" class="ease-record-toggle">

<!-- The 3D Scene Container -->
<div class="ease-flip-scene">
  <div class="ease-flip-card">

    <!-- FRONT FACE: Idle -->
    <div class="ease-flip-face ease-flip-front">
      <!-- ... Header & Static Mic Level ... -->
      <label for="record-toggle" class="ease-action-btn ease-start-btn">
        <span class="ease-record-dot"></span> REC
      </label>
    </div>

    <!-- BACK FACE: Recording -->
    <div class="ease-flip-face ease-flip-back">
      <!-- ... Pulsing Header & Active Audio Visualizer ... -->
      <label for="record-toggle" class="ease-action-btn ease-stop-btn">
        <span class="ease-stop-square"></span> STOP
      </label>
    </div>

  </div>
</div>
```

## Why it fits EaseMotion CSS

- **State-Driven Animation**: This component demonstrates how to manage complex UI states (Idle vs. Active) entirely in CSS, keeping the DOM clean and reducing reliance on JavaScript for UI state management.
- **Hardware-Accelerated Fluidity**: The 3D card flip (`rotateY`) and the audio visualizer (`scale`/`height`) utilize CSS properties that do not trigger expensive browser layout repaints, ensuring a buttery-smooth 60FPS experience.
- **Micro-interactions**: The subtle red glow on the back face and the bouncy spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) applied to the card flip bring the interface to life, aligning perfectly with EaseMotion's ethos.
