# Dynamic Card: Minimalist

A clean, typography-driven CSS card component inspired by Swiss design principles. It leverages generous whitespace and dynamically reveals extra content on interaction using modern CSS Grid techniques.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Minimalist / Swiss Aesthetics**: Focuses on strict alignment, high contrast (black on white/light gray), and strong typography (`Helvetica Neue` / `Inter`). Borders are sharp with a very subtle `4px` radius, and shadows are kept to an absolute minimum (`0.02` opacity) until interacted with.
  - **Dynamic CSS Grid Reveal**: The core feature of this card is the smooth expansion of the hidden content (`.card-reveal-area`). Traditionally, animating from `height: 0` to `height: auto` is impossible in CSS without JavaScript. This component solves that by using CSS Grid. The hidden content is wrapped in a container with `display: grid; grid-template-rows: 0fr`. On hover/focus, it transitions to `grid-template-rows: 1fr`, allowing the browser to smoothly calculate and animate the intrinsic height of the content.
  - **Morphing Visuals**: The `.geometric-shape` in the header acts as an abstract visual anchor. On hover, it smoothly morphs from a circle to a square while rotating and scaling up.
- Fully accessible semantic structure. The entire card uses `<article>` and `tabindex="0"` so it can be focused via keyboard navigation. A strong focus ring is applied on `:focus-visible`. Honors the `prefers-reduced-motion` accessibility standard by disabling the morphing and grid expansion animations if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see a compact, clean card. Hover over the card with your mouse (or tab to it with your keyboard) to see the card lift, the geometric shape morph, and the hidden paragraph and link smoothly expand from below the title.

## Files
- `demo.html`: The HTML structure defining the semantic `<article>` and the `.card-reveal-area` wrapper.
- `style.css`: The styling, the minimalist typography variables, and the CSS Grid `1fr` to `0fr` animation hack.
