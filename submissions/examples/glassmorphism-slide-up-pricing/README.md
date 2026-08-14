# CSS Slide-Up Pricing Table (Glassmorphism UI)

A stunning, pure CSS interactive pricing grid designed for Glassmorphism UI Layouts. It features animated background orbs and a sophisticated "Slide-Up" hover effect that reveals detailed features without cluttering the initial interface.

## Features
- Pure CSS and HTML (No JavaScript required for hover states or animations).
- **Glassmorphism Aesthetic**: Deep slate background contrasted with slowly drifting `.bg-orb` elements. The orbs are heavily blurred (`filter: blur(90px)`) to create ambient color zones.
- The `.glass-panel` cards utilize `backdrop-filter: blur(16px)` to create a premium frosted-glass effect that allows the underlying colors to dynamically bleed through as the orbs drift.
- **The Slide-Up Effect**: The feature lists and CTA buttons (`.card-content-slide`) are initially positioned out of view below the bottom edge of the card (`bottom: -20px`, `transform: translateY(100%)`). 
- When a user hovers over a pricing card, two synchronized animations occur:
  1. The `.card-header` nudges upward (`translateY(-20px)`) to make physical space.
  2. The `.card-content-slide` slides up into view using a snappy custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function.
- The parent `.pricing-card` utilizes `overflow: hidden` to ensure the sliding content is completely invisible until the hover interaction triggers.
- Clean typography using the `Outfit` font, custom SVG checkmarks for the feature lists, and a highlighted "Most Popular" plan styling.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the ambient orb drift is frozen. The spatial sliding transitions on the card header and content are stripped. The interaction gracefully falls back to a safe, immediate opacity cross-fade to reveal the content. Additionally, on mobile viewports (where hover is problematic), the content is set to be permanently visible.

## Usage
Open `demo.html` in your browser. You will see a modern pricing grid utilizing frosted glass effects. Hover over any of the three pricing cards. Watch as the card elevates slightly, the header text nudges out of the way, and the feature list rapidly slides up into view from the bottom edge.

## Files
- `demo.html`: The HTML structure for the layout, detailing the nested elements required for the synchronized hover states.
- `style.css`: The styling, background orb animations, frosted-glass filters, and the `transform` logic driving the slide-up mechanics.
