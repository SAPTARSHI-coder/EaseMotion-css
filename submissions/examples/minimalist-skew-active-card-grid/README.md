# CSS Skew-Active Card Grid (Minimalist Tech)

A pure CSS interactive grid component designed for Minimalist Tech Layouts. It utilizes the hidden radio-button hack to manage mutually exclusive active states, and features a dynamic "Skew-Active" background animation upon selection.

## Features
- Pure CSS and HTML (No JavaScript required for state management).
- The grid uses the `input[type="radio"]:checked + label` CSS sibling selector pattern. By hiding the radio buttons and styling the labels as cards, the browser handles the complex active-state logic natively.
- The `.skew-bg` element sits behind the card content. In its default (unselected) state, it is pushed down out of view and heavily skewed (`transform: translateY(100%) skewY(-15deg)`).
- When a card is selected, the background element transitions to `translateY(0) skewY(0deg)`, creating a satisfying "snap" effect as the skewed edge straightens out while filling the card.
- A selection checkmark pops into view simultaneously using a bouncy `cubic-bezier` scale transition.
- Clean, structured aesthetic utilizing the `Inter` and `JetBrains Mono` fonts, ideal for SaaS pricing tables or configuration wizards.
- Fully responsive CSS Grid layout that automatically adapts columns based on the viewport width using `auto-fit`.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translation, skewing, and scaling are entirely stripped. The complex interaction gracefully falls back to a simple opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a grid of three pricing tier cards. The "Hobby" tier is selected by default. Click on the "Pro" or "Enterprise" tiers to watch the active state transfer. Notice the green background block snapping up from a skewed angle, and the content physically nudging upwards slightly upon selection.

## Files
- `demo.html`: The HTML structure for the grid layout, detailing the critical `<input type="radio">` and `<label>` pairing required for the CSS-only state management.
- `style.css`: The styling, CSS Grid configurations, and the pure CSS `transform: skewY()` and `:checked` logic driving the interactive mechanics.
