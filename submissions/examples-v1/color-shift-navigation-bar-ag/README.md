# Color Shift Navigation Bar

A reusable, fully responsive, and keyboard-accessible navigation bar featuring a premium Cyberpunk-inspired aesthetic with sophisticated color-shifting motion interactions.

## Component Overview
The **Color Shift Navigation Bar** is designed to provide modern cyberpunk visual aesthetics while maintaining absolute usability and high standards of UI engineering. It uses pure CSS transitions and an elegant `@keyframes` color shift that cycles gracefully through futuristic neon hues (cyan, pink, purple) upon hover and active states without flashing.

## Design Inspiration
Inspired by high-tech sci-fi interfaces and clean terminal control dashboards. It emphasizes neon accents with restraint, high-tech HUD decorative corners, and smooth holographic lighting transitions, avoiding excessive glowing effects or layout shifts.

## Features
- **Pure CSS Engine**: Zero JavaScript dependencies for menus, transitions, or responsive behavior.
- **HUD Decorative Accents**: Brackets that dynamically shift colors when hovering or interacting with the menu container.
- **Holographic Color-Shift**: Soft, GPU-optimized color cycle animation applied to link states and indicators.
- **Highly Responsive**: Seamlessly adapts from desktop (horizontal array) to mobile viewports (hamburger menu dropdown toggle).
- **A11y Compliant**: Semantic HTML markup, screen reader annotations, clear focus indicators, and strict respect for `prefers-reduced-motion` settings.

## Folder Structure
```text
submissions/examples/color-shift-navigation-bar-ag/
├── demo.html
├── style.css
└── README.md
```

## Usage Instructions
Include `easemotion.css` (or `easemotion.min.css`) and reference `style.css` in your HTML document:

```html
<nav class="cyber-nav-ag" aria-label="Main Navigation">
  <div class="cyber-nav-brand-ag" id="nav-brand-label">
    <span class="cyber-brand-icon-ag" aria-hidden="true">◈</span> NEURAL.NET
  </div>

  <input type="checkbox" id="cyber-nav-toggle-ag" class="cyber-nav-toggle-ag" aria-hidden="true">
  <label for="cyber-nav-toggle-ag" class="cyber-nav-toggle-btn-ag" aria-label="Toggle Navigation Menu">
    <span class="bar-ag"></span>
    <span class="bar-ag"></span>
    <span class="bar-ag"></span>
  </label>

  <div class="cyber-nav-menu-ag" role="menubar" aria-labelledby="nav-brand-label">
    <a href="#discover" class="cyber-nav-link-ag active" role="menuitem">
      <span class="nav-icon-ag" aria-hidden="true">◉</span> Discover
    </a>
    <a href="#network" class="cyber-nav-link-ag" role="menuitem">
      <span class="nav-icon-ag" aria-hidden="true">⧉</span> Network
    </a>
  </div>
</nav>
```

## Customization Options
You can tweak the theme colors directly by editing the scoped custom properties inside `style.css`:

```css
:root {
  --cyber-bg-ag: #0b0d19;                /* Dark panel background */
  --cyber-border-ag: #1e2238;            /* HUD border color */
  --cyber-neon-cyan: #00f0ff;            /* Cyan accent color */
  --cyber-neon-pink: #ff007f;            /* Pink accent color */
  --cyber-neon-purple: #9d4edd;          /* Purple accent color */
}
```

## Responsive Behavior
- **Desktop**: Features inline elements arranged with flexbox and space-between layout.
- **Mobile (< 768px)**: Adapts to a wrapped viewport where the menu links stack vertically. Clicking the custom hamburger toggle slides open the dropdown menu natively using CSS peer selectors.

## Accessibility Notes
- Semantic HTML tags (`<nav>`, `aria-*` tags, and `role` definitions) are declared.
- Keyboard navigation (tabbed layout) is fully supported with custom focus-ring indicators.
- Graceful degradation for users with motion sensitivity via `@media (prefers-reduced-motion: reduce)`.

## Browser Compatibility
Compatible with all modern green browsers supporting modern CSS Grid, Flexbox, transitions, custom properties, and backdrop-filters.

## EaseMotion Integration Details
- Respects and utilizes global EaseMotion CSS variables: `--ease-speed-medium`, `--ease-ease`, `--ease-font-sans`, `--ease-text-lg`, and `--ease-radius-md`.
- Works out-of-the-box when integrated inside the `easemotion-components` cascade layer.
