# CSS Usage Limit Bar

A pure CSS progress meter utilizing advanced CSS Custom Properties for dynamic width animation, featuring a scrolling striped texture and sequential entrance animations, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--track-bg`, `--status-warning`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with adapted alert colors.
- **Component Architecture (Documented in Code)**: 
  - **Dynamic CSS Variable Animation**: The width of the `.progress-fill` bar is set inline via a custom property `style="--target-width: 85%;"`. The CSS `@keyframes fillBar` animation uses `animation-fill-mode: forwards` to smoothly animate the bar from `0%` to `var(--target-width)` upon page load, removing the need for JS width calculations.
  - **Animated Striped Overlay**: A `.progress-stripes` child element uses a `repeating-linear-gradient` and an infinite `linear` animation to create a classic barber-pole scrolling texture over the fill bar.
  - **Sequential Animation**: The `.upgrade-prompt` box uses an `animation-delay` calibrated to trigger its fade-and-slide entrance only *after* the progress bar has mostly finished its fill animation.
- Fully accessible semantic structure. The progress bar uses `role="progressbar"` along with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes for screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the fill animation, stripe scrolling, and delayed entrance for motion-sensitive users.

## Usage
Open `demo.html` in your browser to watch the sequential load animation of the usage limit bar and the delayed appearance of the upgrade prompt.

## Files
- `demo.html`: The HTML structure containing the semantic progress bar and inline custom property logic.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `@keyframes` animation and variable mapping techniques.
