# CSS Card: Foucault Pendulum Swing Variation

A pure CSS card component inspired by the rhythmic motion of a
Foucault pendulum.

## ✨ Features

- Foucault pendulum-inspired visual treatment
- Continuous pendulum swing animation
- Three visual card variations
- Smooth hover elevation
- Ambient glow effects
- Layered orbit rings
- Responsive layout
- Dark-mode compatible styling
- Keyboard-accessible links
- Visible focus states
- Reduced-motion support
- Hardware-friendly CSS transforms
- No JavaScript
- No external dependencies

## 🎨 Design

The component combines:

- Circular orbit rings
- Animated pendulum line
- Glowing pendulum bob
- Dark layered surfaces
- Subtle gradients
- Smooth card elevation

The visual language is inspired by the continuous oscillation of a
Foucault pendulum.

## 🧩 Variations

The demo provides three variations:

1. Earth Motion
2. Steady Swing
3. Persistent Motion

Each card uses the same component structure with a different accent
treatment.

## ⚡ Animation

The pendulum movement is implemented with CSS keyframes:

```css
@keyframes pendulum-swing {
  0%,
  100% {
    transform: rotate(-16deg);
  }

  50% {
    transform: rotate(16deg);
  }
}