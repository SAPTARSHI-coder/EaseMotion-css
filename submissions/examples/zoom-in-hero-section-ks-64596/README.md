# Zoom-In Hero Section

A pure HTML/CSS responsive hero section featuring a smooth, cinematic "zoom-in" entrance animation upon page load. Designed for modern technology platforms, developer tools, and minimalist SaaS websites.

## 1. What the Zoom-In Hero Section Does
This component provides a complete layout for the top section of a website, including a minimal navigation bar, primary marketing copy, CTA buttons, and a CSS-rendered decorative element (a mock terminal). When the page first loads, the main content and visual elements gracefully scale up and fade into view, creating an immediate sense of depth and polish.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required for layouts, interactions, or animations.
- **Zoom-In Animation**: Hardware-accelerated CSS keyframe animation (`transform` and `opacity`) applied on initial render.
- **CSS-Only Visual Element**: Includes a realistic mock terminal window constructed entirely from CSS and HTML, complete with an interactive 3D hover state.
- **Responsive Grid**: Automatically adapts from a 2-column desktop layout to a stacked, centered mobile layout.
- **Minimalist Tech UI**: Built for dark mode, utilizing subtle glows, translucent backgrounds (`backdrop-filter`), and distinct typography.
- **Accessible**: Features explicit `:focus-visible` styling for keyboard navigation and completely strips animations if the user's OS requests reduced motion.

## 3. Hero Structure
- `header.site-header`: A top navigation bar containing branding and secondary actions.
- `section.hero-section`: The main wrapper providing padding, alignment, and background glows.
- `.hero-content`: The left column containing the badge, `<h1>`, description, and CTA buttons.
- `.hero-visual`: The right column containing the CSS-rendered `.visual-card` (terminal window) and decorative `.glow-orb` elements.

## 4. How to Use It
Copy the HTML structure and the accompanying CSS. No initialization is required. The animation triggers immediately when the DOM renders the elements.

```html
<!-- Example Usage -->
<section class="hero-section">
    <div class="hero-container">
        
        <div class="hero-content">
            <h1 class="hero-title">Deploy with confidence</h1>
            <p class="hero-description">The modern platform for high-velocity teams.</p>
            <div class="hero-ctas">
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </div>
        
        <div class="hero-visual">
            <!-- Your visual element/image here -->
        </div>
        
    </div>
</section>
```

## 5. CSS Custom Properties
Customize the hero section extensively via these variables:
- `--hero-bg`, `--text-main`: Core surface and text colors.
- `--hero-accent`: Primary brand color used for buttons and glows.
- `--hero-secondary`: Background color for secondary buttons and badges.
- `--hero-card-bg`, `--hero-card-border`: Styling for the mock terminal visual.
- `--hero-duration`: Controls the speed of the entrance animation (default `0.8s`).

## 6. Zoom-In Animation Behavior
The `.hero-content` and `.hero-visual` elements utilize the `@keyframes zoom-in`. Over `0.8s`, they transition from `opacity: 0`, `scale(0.92)`, and `translateY(10px)` to their resting `(1)` states using a smooth `cubic-bezier(0.16, 1, 0.3, 1)` easing. The visual element is delayed slightly (`0.15s`) to create a staggered, sequential entrance.

## 7. Interaction Design
- **Buttons**: Both primary and secondary buttons feature a subtle `translateY(-2px)` lift and box-shadow shift on hover, managed by CSS `transition`.
- **Hero Visual**: Hovering over the hero visual container applies a subtle 3D transformation (`rotateX` and `rotateY`) to the terminal card, giving it depth and interactivity without JavaScript.

## 8. Responsive Behavior
- **Desktop (`> 1024px`)**: Full 2-column layout.
- **Tablet (`<= 1024px`)**: typography scales down, and the navigation simplifies.
- **Mobile (`<= 768px`)**: The 2-column grid collapses into a single column. The content centers itself, and the CTA buttons span the width of the screen to improve tap targets.

## 9. Accessibility & `prefers-reduced-motion` Support
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<h1>`) are used for proper document outline.
- If the user's OS requests reduced motion, a media query (`@media (prefers-reduced-motion: reduce)`) immediately forces `opacity: 1` and `transform: none`, completely bypassing the `zoom-in` animation and disabling the hover translations.

## 10. Why it fits EaseMotion CSS
This component embodies the EaseMotion approach: it leverages advanced CSS capabilities (animations, flexbox/grid, backdrop filters, 3D transforms) to create a highly engaging, professional first impression, while remaining lightweight, strictly performant, and fully accessible without any JavaScript dependencies.
