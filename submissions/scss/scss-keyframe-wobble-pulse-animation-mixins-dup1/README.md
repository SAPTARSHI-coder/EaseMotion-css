# SCSS Utility: Keyframe Wobble & Pulse Animation Mixins (#28426)

An attention-grabbing SCSS animation module for the EaseMotion CSS framework that provides highly tuned `@keyframes` for wobble (rotational shaking) and pulse (scaling) effects, perfect for alerts, notifications, and primary calls to action.

## 📦 What's included?

- `_keyframe-wobble-pulse-animation-mixins.scss`: The SCSS partial containing the `@keyframes` and configuration mixins.
- `style.css`: The compiled output of the utilities.
- `demo.html`: An interactive showcase of the hover-triggered keyframe animations.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixins to attach the animations to your custom elements.

```scss
@import 'keyframe-wobble-pulse-animation-mixins';

.my-notification-bell {
  // Wobble indefinitely to grab attention
  @include ease-animate-wobble(1.2s, infinite);
}

.my-like-button.active {
  // Play a heartbeat pulse exactly once
  @include ease-animate-pulse-heartbeat(0.8s, 1);
}

.my-recording-indicator {
  // Soft scale pulse with a radiating box-shadow
  @include ease-animate-pulse-soft(2s, infinite);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your HTML elements. We provide both constant and `hover-` prefixed variants.

```html
<!-- Plays continuously -->
<div class="ease-wobble">Invalid Input</div>

<!-- Plays once when hovered -->
<button class="hover-ease-pulse-heartbeat">Like</button>

<!-- Plays continuously while hovered -->
<button class="hover-ease-pulse-soft">Record</button>
```

## 🚀 Why this fits EaseMotion

**EaseMotion** believes that motion should guide the user's attention effectively without being obnoxious. Standard CSS shakes often just rapidly move left and right (`translateX`), which feels broken and aggressive.

The `ease-wobble` keyframes in this module combine `translateX` with slight `rotate` angles to simulate a physically anchored object being pushed and swaying back to equilibrium, resulting in a much more natural, playful, and delightful interaction. The pulse animations similarly utilize custom `cubic-bezier` timing functions to feel organic rather than robotic.
