# Morph-Glow Card Grid

A pure HTML/CSS responsive grid of feature cards featuring a layered "morph-glow" hover effect. Designed to provide a premium, interactive feel for tech layouts, product features, and marketing pages without relying on JavaScript.

## 1. Feature Overview
This component presents a responsive grid of cards that utilize CSS Grid for layout and CSS pseudo-elements to create a soft, glowing aura. When a user hovers over a card, the card physically lifts, its borders highlight, and a subtle continuous morphing glow animation begins running behind the card, drawing focus to the content.

## 2. Morph-Glow Card Grid Behavior
The morph-glow effect is achieved by layering elements:
- The `.card` wrapper creates a stacking context.
- A `.card-glow` element sits securely behind the main content (via `z-index: 0` and `absolute` positioning) and utilizes a `radial-gradient` and `filter: blur()`.
- The `.card-content` sits on top (via `z-index: 10`), providing the solid background.
- Upon hover, the `.card` translates up by `6px`, and the hidden `.card-glow` triggers an infinite `@keyframes` animation (`transform: scale()`) to pulse slightly.

## 3. Card Structure
- `article.card`: The outer container.
- `.card-glow`: The background layer responsible for the animated gradient shadow.
- `.card-content`: The solid foreground layer.
- `.card-icon`: A flex container for the SVG iconography.
- `h2.card-title` & `p.card-description`: Semantic typography.
- `a.card-link`: The actionable "Learn more" link.

## 4. Features
- **Zero JavaScript**: Entirely CSS-driven interaction and grid management.
- **Morphing Hover Glow**: Uses `@keyframes` to create a continuous, subtle scale/pulse effect on hover.
- **Hardware Accelerated**: Animations rely strictly on `transform` and `opacity` to ensure 60fps performance without triggering browser repaints.
- **Responsive Grid**: Automatically reflows from 3 columns (desktop) to 2 columns (tablet) to 1 column (mobile) using CSS Grid.
- **Theming**: Inherently supports both Light and Dark mode via `prefers-color-scheme`.
- **Accessible**: Features explicit `:focus-visible` styling and comprehensive `prefers-reduced-motion` support.

## 5. CSS Custom Properties
Easily theme the grid by overriding these root variables:
- `--bg-main`, `--text-main`: Core page colors.
- `--card-bg`, `--card-border`, `--card-text`: Card surface styling.
- `--card-accent`: Primary brand color used for icons and borders on hover.
- `--glow-color`: The rgba value used for the radial gradient glow.
- `--card-radius`: Outer edge rounding (default `16px`).

## 6. Responsive Behavior
- **Desktop (`> 992px`)**: 3-column grid via `grid-template-columns: repeat(3, minmax(0, 1fr))`.
- **Tablet (`<= 992px`)**: 2-column grid. The CSS automatically handles an odd number of cards by making the last card span the full width (`grid-column: 1 / -1`).
- **Mobile (`<= 640px`)**: 1-column grid. Typography scales down slightly.

## 7. Accessibility
- **Semantic HTML**: Uses `<main>`, `<section>`, `<article>`, and appropriate heading levels (`<h1>`, `<h2>`).
- **Keyboard Navigation**: The `.card-link` inside each card receives a distinct `:focus-visible` outline. Additionally, focusing within a card triggers the same hover state translations via `:focus-within`.
- **Contrast**: Muted text colors have been chosen to ensure they still meet WCAG contrast guidelines against their respective dark/light backgrounds.

## 8. Reduced-Motion Support
If `@media (prefers-reduced-motion: reduce)` is active, the CSS aggressively strips out all translations, continuous keyframe animations, and scaling effects. Hovering over a card will simply brighten the border and the static glow opacity, ensuring users sensitive to motion can still perceive the interactive state without discomfort.

## 9. Usage Instructions
Drop the HTML structure and CSS into your project. The CSS Grid automatically handles spacing; simply add or remove `<article class="card">` elements as needed.

```html
<!-- Example Usage -->
<div class="card-grid">
    <article class="card">
        <div class="card-glow"></div>
        <div class="card-content">
            <div class="card-icon"><!-- SVG --></div>
            <h2 class="card-title">Feature Name</h2>
            <p class="card-description">Description text goes here.</p>
            <a href="#" class="card-link">Learn more</a>
        </div>
    </article>
</div>
```

## 10. Why it fits EaseMotion CSS
This component perfectly represents the EaseMotion CSS philosophy: it delivers a premium, complex-looking micro-interaction (the morphing glow) using structurally sound, pure CSS techniques. It relies on performant `transform` properties and provides an immediate fallback for accessibility, ensuring a robust developer and user experience.
