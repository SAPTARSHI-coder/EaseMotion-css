# Sandbox Component Showcase: EaseMotion CSS Animated Title Card

## Overview

A lightweight animated title-card experience built primarily with HTML and CSS, featuring sequential character reveals, geometric shape transitions, and a replayable loading animation. The component is fully self-contained within a sandbox environment and requires no external JavaScript libraries or animation frameworks.

## 📁 Sandbox Configuration Files

* `demo.html` — Standalone animation showcase rendering the EaseMotion CSS title sequence, decorative geometric elements, and replay controls.
* `style.css` — Encapsulated styling layer containing typography, layout rules, animation keyframes, easing curves, and visual state transitions.

## 🚀 Key Animation Mechanics

1. **Sequential Character Entrance Pipeline:** Individual characters are assigned staggered animation delays, creating a smooth letter-by-letter reveal effect. Each character transitions from an offset position into its final location using custom cubic-bezier timing functions for polished motion.

2. **Geometric Shape Accent System:** Decorative triangular markers and separator elements are animated independently from text characters. Shape-specific keyframes apply scale and position transformations to introduce visual rhythm and reinforce the loading sequence.

3. **Replayable Animation Lifecycle:** A dedicated replay control resets all animated elements to their initial hidden states before re-triggering the complete sequence. This approach recreates the original loading experience without requiring page refreshes or external state management.

4. **Pure CSS Motion Foundation:** Core visual transitions are driven entirely through CSS keyframes and transform properties. Hardware-accelerated transforms ensure smooth rendering while avoiding expensive layout recalculations during playback.

5. **Sandbox-Isolated Architecture:** All markup, styling, and animation behavior remain contained within the sandbox pathway, ensuring compatibility with framework freeze requirements and preventing side effects on the surrounding application environment.