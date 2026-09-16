# CSS Conversation Form

An advanced, high-performance conversational chat-style form interface showcasing step-by-step messaging layout and animations, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS keyframe animations, staggered delays, and flexbox bubble alignments.
- **Natural Chat Flow:** Alternating bot and user message bubbles mimicking modern conversational onboarding flows.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes (`role="form"`) and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* User message bubble and button accent color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
