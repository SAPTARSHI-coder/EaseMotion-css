# Glowing SaaS Progress Bar

A premium, sleek progress bar component built with pure CSS. Designed specifically for modern SaaS dashboards (e.g., storage quotas, usage limits, analytics), this component utilizes dark mode aesthetics, vivid gradients, and multi-layered CSS animations to create a highly polished visual experience.

## Features

- **Multi-layered Glow System**: 
  - **Internal Shine**: A glossy `linear-gradient` sweep animation (`@keyframes shine`) runs continuously inside the progress fill to draw the eye and indicate active status.
  - **Ambient External Glow**: A separate `.progress-glow` layer sits strictly *behind* the progress track (`z-index` and `isolation: isolate`). It utilizes `filter: blur(12px)` and a slow pulsing `@keyframes` animation to emit a dynamic, breathing neon light into the surrounding container.
- **SaaS Typography & Gradients**: Uses the `Inter` font family and a high-contrast blue-to-purple (`#3b82f6` to `#8b5cf6`) gradient scheme typical of modern SaaS platforms.
- **Accessibility**: Includes standard `role="progressbar"` along with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes for screen reader compatibility.
- **Fluid Transitions**: Modifying the inline `width` percentage dynamically (via JS or backend templating) triggers a smooth `cubic-bezier` transition for both the internal fill and external glow layers.

## Usage
Include `demo.html` and `style.css` in your project. Update the inline `style="width: 75%;"` on both the `.progress-fill` and `.progress-glow` elements to dynamically update the progress value.
