# EaseVoice Command Badge

A premium, highly interactive, and responsive CSS-only status and feedback system representing voice assistant integration, speech capture activity, and speech-to-text response cycles.

## What does this do?

This component provides a sleek, modern, glassmorphic voice assistant badge with beautiful animations representing:

- **Idle/Ready State**: Pulse indicator to show the assistant is ready.
- **Listening State**: Concentric ripple waves pulsing outwards coupled with a 4-bar soundwave equalizer visualizer.
- **Processing State**: A spinning conic gradient border indicating speech-to-text processing or thinking.
- **Feedback States (Success/Error)**: Color-coded pulses and shake gestures to provide instant visual validation.

## How is it used?

### 1. Default (Idle / Ready) State

```html
<button class="ease-voice-badge" aria-label="Voice Command Assistant">
  <span class="ease-voice-badge__mic-wrap">
    <svg viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z..." />
    </svg>
  </span>
  <span class="ease-voice-badge__content">
    <span class="ease-voice-badge__title">Voice Control</span>
    <span class="ease-voice-badge__status">
      <span class="ease-voice-badge__dot"></span>
      Ready
    </span>
  </span>
</button>
```

### 2. Modifier Classes

To trigger animations and state changes, append the following modifiers to the `.ease-voice-badge` container:

- **Listening**: `.ease-voice-badge--listening` (also include `.ease-voice-badge__ripple` elements and `.ease-voice-badge__visualizer` inside container)
- **Processing**: `.ease-voice-badge--processing`
- **Success**: `.ease-voice-badge--success`
- **Error / Rejected**: `.ease-voice-badge--error`
- **Compact (Icon Only)**: `.ease-voice-badge--compact`

### 3. Full Structure for Listening/Ripple Waves

```html
<button class="ease-voice-badge ease-voice-badge--listening">
  <!-- Ripples -->
  <span class="ease-voice-badge__ripple ease-voice-badge__ripple--1"></span>
  <span class="ease-voice-badge__ripple ease-voice-badge__ripple--2"></span>

  <span class="ease-voice-badge__mic-wrap">...</span>

  <span class="ease-voice-badge__content">
    <span class="ease-voice-badge__title">Voice Control</span>
    <span class="ease-voice-badge__status">
      <span class="ease-voice-badge__dot"></span>
      Listening
    </span>
  </span>

  <!-- Visualizer bars -->
  <span class="ease-voice-badge__visualizer">
    <span class="ease-voice-badge__bar"></span>
    <span class="ease-voice-badge__bar"></span>
    <span class="ease-voice-badge__bar"></span>
    <span class="ease-voice-badge__bar"></span>
  </span>
</button>
```

## Why is it useful?

Integrations with AI agents, chatbots, and speech recognition (Web Speech API) are becoming standard in modern web applications. The **EaseVoice Command Badge** offers a pre-packaged, zero-dependency, and high-performance layout containing all the crucial states and micro-interactions required for a world-class voice assistant UI, preserving accessibility standards and respecting system performance settings.

## Design Customization (CSS Variables)

You can customize the theme and behavior of the badge by overriding the following custom properties:

| Variable                        | Description                | Default                                                         |
| :------------------------------ | :------------------------- | :-------------------------------------------------------------- |
| `--ease-voice-primary`          | Primary brand color        | `#6c63ff`                                                       |
| `--ease-voice-active`           | Active recording/mic color | `#ff4a5a`                                                       |
| `--ease-voice-processing-start` | Conic gradient start color | `#8b5cf6`                                                       |
| `--ease-voice-processing-end`   | Conic gradient end color   | `#3b82f6`                                                       |
| `--ease-voice-success`          | Success/recognition color  | `#10b981`                                                       |
| `--ease-voice-error`            | Error/unrecognized color   | `#ef4444`                                                       |
| `--ease-voice-bg`               | Glassmorphic background    | `rgba(255,255,255,0.75)` (Light) / `rgba(15,23,42,0.65)` (Dark) |
| `--ease-voice-glass-blur`       | Backdrop filter strength   | `blur(12px)`                                                    |

## Accessibility (A11y)

- **Keyboard Interaction**: Built using `<button>` elements ensuring native focus, focus rings, and action trigger capability via Space/Enter.
- **Screen Readers**: Includes descriptive `aria-label` tags and allows full status reading.
- **Motion Sensitivity**: Incorporates `@media (prefers-reduced-motion: reduce)` block to instantly disable high-motion ripples, spinning indicators, shaking animations, and bouncing bars, providing a static yet visually distinct equivalent state.
