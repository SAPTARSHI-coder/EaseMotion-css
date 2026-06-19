# Morphing Dynamic Island Interactive Sticky Dock

## What does this do?

This component implements a floating navigation/notification widget inspired by Apple's "Dynamic Island". Built strictly in pure CSS, it morphs smoothly between three distinct states:

1. **Default State**: A compact, pill-shaped status bubble displaying status icons, notification indicator dot, and an animating music waveform.
2. **Hover State**: Horizontally expands with a bouncy ease-out transition to reveal navigation/dock icons.
3. **Click/Active State**: Expands vertically into a detailed control card (Music player controls, Chat message quick reply, or Incoming call actions) using HTML radio trigger input hacks.

## How is it used?

Structure your markup inside `.island-container` using hidden radio inputs linked to label shortcuts. The capsule `.dynamic-island` contains all view layouts:

```html
<div class="island-container">
  <!-- Hidden triggers -->
  <input type="radio" name="island-state" id="island-close" checked hidden />
  <input type="radio" name="island-state" id="island-music" hidden />
  <input type="radio" name="island-state" id="island-chat" hidden />

  <div class="dynamic-island" tabindex="0">
    <!-- Collapsed View -->
    <div class="island-view view-default">...</div>

    <!-- Hovered Dock -->
    <div class="island-view view-dock">
      <label for="island-music" class="dock-shortcut">...</label>
      <label for="island-chat" class="dock-shortcut">...</label>
    </div>

    <!-- Expanded Cards -->
    <div class="island-panel panel-music">
      <!-- Close button resets back to dock -->
      <label for="island-close" class="close-panel-btn">...</label>
    </div>
    <div class="island-panel panel-chat">...</div>
  </div>
</div>
```

## Why is it useful?

It offers a high-fidelity, interactive, and fluid user experience that consolidates notifications and widgets into a single space-saving UI element.
Key architectural advantages include:

- **Zero Scripting Overhead**: The entire state machine (toggling, morphing, and closing panels) is powered by the CSS `:checked` pseudo-class.
- **Physical Bouncy Animation**: Uses a custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing curve to simulate elastic bounce animations on morphing dimensions.
- **Accessibility Fallbacks**: Fully navigable by keyboard tab indexes. Automatically switches morphing dimensions and keyframes for simple static displays when `prefers-reduced-motion` is detected.

## Tech Stack

- HTML5
- CSS3 (Variables, Custom Bezier, Backdrop Filters, Keyframe Animations)

## Preview

Open `demo.html` directly in any modern web browser to interact with the widget.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-dynamic-island`, `.ease-dock-shortcut`) and replace hardcoded colors with project theme variables on merge.
