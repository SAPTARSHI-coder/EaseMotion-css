# Bounce-Pulse Pricing Table

A pure HTML/CSS responsive pricing table featuring a dynamic "bounce-pulse" hover animation for the recommended plan. Designed for minimalist technology SaaS layouts to draw attention and encourage conversions without relying on JavaScript.

## 1. Feature Overview
This component implements a 3-tier pricing layout using CSS Grid. The recommended/popular tier is visually highlighted using scaling (`transform: scale(1.05)`) and distinct border/glow colors. When a user hovers over the popular plan, it triggers a unique `@keyframes bounce-pulse` animation that combines subtle vertical translation with scaling to create an engaging "breathing" or "bouncing" effect.

## 2. Bounce-Pulse Behavior
- **Standard Cards**: On hover, standard cards smoothly translate upwards (`translateY(-8px)`) and increase their box-shadow.
- **Popular Card**: The popular card is highlighted by default. When hovered, an infinite CSS animation is triggered:
  - The card oscillates physically on the Y-axis.
  - The card's scale shifts slightly up and down.
  - The glowing box shadow pulses in intensity in sync with the physical bounce.
  - The timing function creates an organic, spring-like feel.

## 3. Pricing Table Structure
```text
main.pricing-container
├── header.pricing-header (Title and subtitle)
└── div.pricing-grid
    ├── article.pricing-card (Starter)
    ├── article.pricing-card.popular-plan (Pro - Animated)
    │   ├── div.popular-badge
    │   ├── div.card-header (Price and description)
    │   ├── div.card-body (Feature list)
    │   └── div.card-footer (CTA Button)
    └── article.pricing-card (Enterprise)
```

## 4. Features
- Pure HTML and CSS implementation.
- CSS Grid layout for equal-height columns and flexible resizing.
- Engaging `@keyframes` animations utilizing performant CSS properties (`transform` and `box-shadow`).
- Inline SVG iconography designed with standard stroke properties for easy recoloring.
- Keyboard-accessible Call-to-Action buttons with clear focus states.
- Fully responsive across desktop, tablet, and mobile.
- Native Light and Dark mode support via `prefers-color-scheme`.
- Complete `prefers-reduced-motion` accessibility support.
- Zero JavaScript or external dependencies.

## 5. CSS Custom Properties
Easily theme the pricing table by overriding these root variables:
- `--app-bg`, `--app-text`, `--app-muted`: Core page colors for background and typography.
- `--card-bg`, `--card-border`: Colors specifically for the pricing cards.
- `--accent-color`: The primary brand color used for checkmarks, the popular plan border, and primary buttons.
- `--accent-hover`: The interactive state color for primary buttons.
- `--accent-glow`: The RGBA shadow color used for the pulse animation on the popular plan.

## 6. Responsive Behavior
- **Desktop (`> 900px`)**: Cards are displayed in a 3-column grid (`grid-template-columns: repeat(3, 1fr)`). `align-items: center` is used so the popular plan can visually break the grid by being slightly scaled up.
- **Tablet (`600px - 900px`)**: The grid switches to a 2-column layout. The popular plan loses its `scale()` transform so it aligns perfectly with the adjacent card, and its animation is seamlessly swapped to a `translateY`-only version (`bounce-pulse-mobile`) to prevent layout shifting.
- **Mobile (`<= 600px`)**: The grid collapses into a single column. Cards stack vertically with appropriate spacing around the "Most Popular" badge.

## 7. Accessibility
- **Semantic HTML**: Features proper document hierarchy (`<main>`, `<header>`, `<article>`) and appropriate heading levels (`<h1>`, `<h2>`).
- **Feature Lists**: Implemented using standard `<ul>` and `<li>` elements, ensuring screen readers announce the number of features properly. Unordered lists have an `aria-label` providing context to the list.
- **Icons**: Decorative SVG checkmarks are hidden from screen readers using `aria-hidden="true"`.
- **Keyboard Navigation**: Buttons have distinct `:focus-visible` styling (`outline: 2px solid`) to assist users navigating with a keyboard.

## 8. Reduced Motion
If the user's OS specifies `prefers-reduced-motion: reduce`, the stylesheet aggressively disables the `bounce-pulse` animation and hover translations across all cards. The popular plan remains highlighted via a static border and shadow, ensuring users sensitive to motion still perceive the hierarchy without experiencing the animated effects.

## 9. Usage Instructions
Place the HTML structure inside your main content area. Ensure `style.css` is linked. The grid will automatically consume the available width up to `1200px` and center itself.

## 10. Browser Compatibility
This component utilizes modern CSS features supported by all current major browsers (Chrome, Firefox, Safari, Edge):
- CSS Grid (`grid-template-columns`, `gap`)
- CSS Flexbox (for card internals)
- CSS Animations and Transitions
- `prefers-color-scheme` and `prefers-reduced-motion` media queries
