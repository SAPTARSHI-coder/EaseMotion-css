# CSS Shimmer-Sweep Card Grid

A minimalist, technology-inspired responsive card grid featuring a subtle CSS-only shimmer-sweep animation, designed for modern interfaces and SaaS layouts.

## Feature Overview

This component provides a lightweight, fully accessible card grid system that requires zero JavaScript. It utilizes CSS Grid for a fluid layout and CSS pseudo-elements for decorative icons and animations.

## Shimmer-Sweep Behavior

- **Normal State**: The cards feature a subtle border, soft glow, and comfortable padding. A highly transparent, skewed linear-gradient `::before` pseudo-element periodically sweeps across the card to simulate a slow shimmer.
- **Hover State**: When a user hovers over a card, it elevates slightly (`translateY`), the border and shadow take on the accent color for a gentle glow, and the shimmer sweeps slightly faster and more visibly across the surface.
- **Layering**: The `z-index` properties ensure that the shimmer effect stays securely behind the text and icons, maintaining perfect readability at all times.

## Card Structure

```html
<article class="card">
    <div class="card-icon" aria-hidden="true">
        <div class="icon-node"></div>
    </div>
    <div class="card-content">
        <h2>Adaptive Systems</h2>
        <p>Responsive structures designed for fluid digital experiences.</p>
    </div>
</article>
```

The decorative icon is hidden from screen readers using `aria-hidden="true"` to prevent unnecessary noise, as the title and description convey the full meaning.

## Features

- Pure HTML and CSS (Zero JavaScript)
- Responsive CSS Grid Layout
- Three-column desktop layout
- Two-column tablet layout
- Single-column mobile layout
- Performant `@keyframes` shimmer-sweep effect
- Smooth CSS hover interactions (elevation, glow, border color)
- Custom CSS-only minimalist icons
- Fully responsive across all devices
- Highly customizable via CSS custom properties
- Semantic HTML (`<main>`, `<section>`, `<article>`)
- Comprehensive `prefers-reduced-motion` support
- No external dependencies, fonts, or images

## CSS Custom Properties

Easily theme the component by adjusting these root variables:

- `--grid-bg`: Background color of the main page container.
- `--card-bg`: Primary background color of the cards.
- `--card-surface`: Background color for inner elements like the icon box.
- `--card-text`: Primary text color for headings.
- `--card-muted`: Subdued text color for descriptions.
- `--card-accent`: Primary brand color used for icons, focus rings, and hover glows.
- `--card-border`: Default border color for the cards.
- `--card-border-hover`: Border color when a card is hovered.
- `--card-radius`: Border radius applied to the cards.
- `--card-shadow`: Default elevation shadow.
- `--card-shadow-hover`: Accent-tinted elevation shadow on hover.

## Responsive Behavior

- **Desktop (`> 900px`)**: The cards are displayed in a spacious 3-column grid (`grid-template-columns: repeat(3, 1fr)`).
- **Tablet (`<= 900px`)**: The grid intelligently scales down to 2 columns, ensuring cards do not become too narrow and text remains readable.
- **Mobile (`<= 600px`)**: The grid collapses into a single-column stack, maximizing the available viewport width.

## Accessibility

- **Semantic HTML**: The use of `<main>`, `<section>`, `<header>`, and `<article>` provides excellent document structure.
- **Decorative Icons**: Pure CSS icons are wrapped in `aria-hidden="true"` to ensure screen readers focus solely on the card's actual content.
- **Contrast**: Both light and dark modes provide sufficient contrast between the text and card backgrounds.

## Reduced Motion

The component includes comprehensive `prefers-reduced-motion: reduce` support. When enabled at the OS level, all animations and transitions are forced to `0.01ms`. This effectively disables the continuous shimmer sweep and the hover elevation, ensuring a static, safe experience for users sensitive to motion, without hiding any information.

## Usage

Simply copy the HTML structure into your document and link `style.css`. Add as many `<article class="card">` elements as you need inside the `.card-grid` container. Open `demo.html` in any modern browser to see the layout in action.

## Browser Compatibility

This component uses modern web standards supported by all major browsers (Chrome, Firefox, Safari, Edge), including:
- CSS Custom Properties (Variables)
- CSS Grid layout (`grid-template-columns`, `gap`)
- CSS Animations and Transitions
- Pseudo-elements (`::before`, `::after`)
- Linear Gradients and CSS Transforms (`skewX`, `translateX`)
- `@media (prefers-reduced-motion)`
