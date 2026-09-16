# Float-Drift Navbar

A pure HTML/CSS responsive navigation bar featuring a subtle "float-drift" continuous animation and layered glow effects. Designed for minimalist tech layouts, modern web applications, and SaaS landing pages.

## 1. Feature Overview
This component implements a polished, "floating" pill-shaped navigation bar that visually hovers over the page content. It utilizes CSS keyframe animations to gently drift vertically, creating an ambient sense of depth and interactivity entirely without JavaScript.

## 2. Float-Drift Behavior
- **Floating Container**: The `.navbar` is contained within a `position: sticky` header, allowing it to float at the top of the viewport as the user scrolls.
- **Gentle Vertical Animation**: A `@keyframes float-drift` animation smoothly shifts the navbar up and down over a slow 6-second duration (`ease-in-out`).
- **Ambient Glow**: A blurred pseudo-element behind the navbar scales and pulses its opacity in sync with the float animation, enhancing the illusion of vertical depth.
- **Hover Interactions**: Links and buttons shift upward slightly (`translateY(-2px)`) with a quick transition, providing immediate physical feedback.
- **Active Navigation State**: The active link utilizes a subtle semi-transparent background and a glowing dot accent indicator.

## 3. Navbar Structure
```text
header.site-header
└── nav.navbar
    ├── a.brand (Logo and text)
    ├── div.nav-links (Container for primary links)
    │   ├── a.nav-link.active
    │   └── a.nav-link (x3)
    └── a.btn-primary (Call to action)
```

## 4. Features
- Pure HTML and CSS
- Semantic HTML5 navigation (`<header>`, `<nav>`, `<a>`)
- Responsive desktop, tablet, and mobile layouts
- Subtle Float-Drift animation via `@keyframes`
- Smooth navigation hover interactions
- Visually distinct active navigation state
- CSS custom properties for easy theming
- Keyboard-accessible navigation with explicit `:focus-visible` states
- Complete `prefers-reduced-motion` support
- No JavaScript required
- No external dependencies, fonts, or images

## 5. CSS Custom Properties
Easily theme the navbar by overriding these root variables:
- `--page-bg`, `--text-main`: Core page colors.
- `--nav-bg`: Semi-transparent background for the navbar (utilizes `backdrop-filter`).
- `--nav-text`, `--nav-muted`: Typography colors within the nav.
- `--nav-accent`: Primary brand color used for the CTA button and active indicators.
- `--nav-accent-glow`: A low-opacity RGBA version of the accent color for the ambient background glow.
- `--nav-border`, `--nav-shadow`: Defines the physical edge and elevation of the container.
- `--nav-radius`: Controls the pill shape (default `100px`, shifts to `16px` on mobile).
- `--float-duration`: Timing configuration for the continuous animation (default `6s`).

## 6. Responsive Behavior
- **Desktop (`> 768px`)**: A centered, pill-shaped horizontal navigation bar utilizing `flexbox` with `justify-content: space-between`.
- **Tablet (`600px - 768px`)**: Spacing and padding are reduced to ensure the navbar fits comfortably without overflowing.
- **Mobile (`<= 600px`)**: The navbar adapts to a `flex-direction: column` layout. The pill shape (`border-radius: 100px`) transforms into a standard card shape (`16px`). Navigation links wrap cleanly, and the primary CTA button expands to 100% width for easier tapping.

## 7. Accessibility
- **Semantic Navigation**: The `<nav>` element uses `aria-label="Primary navigation"` to properly announce itself to screen readers.
- **Keyboard Navigation**: All interactive elements are standard `<a>` tags and are naturally focusable.
- **Visible Focus**: Explicit `:focus-visible` styling provides a clear, offset outline when navigating via keyboard (Tab/Shift+Tab).
- **Contrast & Indicators**: The active link state does not rely solely on color; it uses a background change and a visual dot indicator.

## 8. Reduced Motion
If the user's OS specifies `prefers-reduced-motion: reduce`, the stylesheet aggressively disables the `float-drift` and `glow-pulse` animations. Hover translations (`translateY(-2px)`) are also neutralized, ensuring the navbar remains fully visible and usable without causing motion sickness or distraction.

## 9. Usage
Copy the HTML structure and CSS into your project. The navbar will position itself relative to the `.site-header` wrapper. Open `demo.html` in any modern browser to see the effect in action.

## 10. Browser Compatibility
This component utilizes modern CSS features supported by all current major browsers (Chrome, Firefox, Safari, Edge), including:
- CSS Custom Properties (Variables)
- CSS Flexbox
- `backdrop-filter: blur()`
- `:focus-visible` pseudo-class
- `@media (prefers-reduced-motion)`
