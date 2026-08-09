# Bounce-Pulse Pricing Table

A pure HTML/CSS responsive pricing table featuring a subtle "bounce-pulse" animation designed to gracefully draw attention to a featured or recommended plan. Perfect for SaaS websites, minimalist tech layouts, and digital product landing pages.

## 1. What the Bounce-Pulse Pricing Table Does
This component provides a fully responsive 3-column pricing grid. The center "Pro" plan is visually elevated using distinct borders, shadows, a floating badge, and a continuous, lightweight CSS `@keyframes` animation that subtly bounces and pulses the card to capture user attention without being aggressively distracting.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required for layout, hover states, or animations.
- **Bounce-Pulse Animation**: A hardware-accelerated CSS keyframe animation (`transform`) running on an infinite loop with built-in pauses.
- **Responsive Grid**: Uses CSS Grid to automatically adapt from a 3-column desktop layout to a wrapped tablet layout, down to a stacked mobile view.
- **Minimalist Tech UI**: Clean typography, restrained borders, modern SVG icons, and prominent CTA buttons.
- **Theming**: Inherently supports both Light and Dark mode via `prefers-color-scheme`.
- **Accessible**: Features explicit `:focus-visible` styling for keyboard navigation and disables continuous animations for users preferring reduced motion.

## 3. Pricing Card Structure
Each card uses a flexbox layout to ensure content aligns uniformly, regardless of description length.
- `.card-header`: Groups the title, large price display, and short description.
- `.plan-features`: An unordered list (`<ul>`) with flex styling for SVG icons and text.
- `.btn`: A clear Call-To-Action anchored to the bottom.

## 4. How to Use It
Copy the HTML structure and the accompanying CSS. The grid automatically handles spacing and alignment. Apply the `.pricing-card--featured` class to the plan you wish to highlight.

```html
<!-- Example Usage -->
<div class="pricing-card pricing-card--featured">
    <div class="featured-badge">Recommended</div>
    <div class="card-header">
        <h2 class="plan-title">Pro</h2>
        <div class="plan-price">
            <span class="currency">$</span>
            <span class="amount">49</span>
            <span class="period">/mo</span>
        </div>
    </div>
    <!-- Features and CTA... -->
</div>
```

## 5. CSS Custom Properties
Customize the table extensively via these variables:
- `--pricing-bg`, `--card-bg`: Surface colors.
- `--card-border`, `--card-text`, `--card-muted`: Base structural styling.
- `--card-accent`: The primary brand color used for icons and primary buttons.
- `--card-shadow`, `--card-shadow-hover`: Elevation styling.
- `--featured-border`, `--featured-badge-bg`: Specific overrides for the highlighted plan.
- `--animation-duration`: Controls the speed of the bounce-pulse (default `2s`).

## 6. Bounce-Pulse Animation Behavior
The `.pricing-card--featured` utilizes an infinite `@keyframes` animation. Over the course of its `2s` duration, it quickly performs a sequence of translations (`translateY(-6px)` to `translateY(2px)`) and tiny scales (`scale(1.01)`), then rests at `translateY(0) scale(1)` for the remainder of the loop. This creates a "heartbeat" rhythm rather than a constant, fatiguing motion. Hovering over the card pauses the animation.

## 7. Responsive Behavior
- **Desktop (`> 992px`)**: A horizontal 3-column grid. The featured card has extra vertical padding to stand slightly taller.
- **Tablet (`<= 992px`)**: Wraps to a 2-column grid. The third card centers itself below.
- **Mobile (`<= 768px`)**: Stacks into a single column with ample vertical gap to accommodate the floating "Recommended" badge.

## 8. Accessibility Considerations
- Uses semantic `<h2>` tags for plan titles and standard `<ul>` lists for features.
- Buttons include clear focus rings (`:focus-visible`) offset from the element for visibility.
- Meaningful button text ("Start Free Trial" vs generic "Click Here").
- Decorative SVG icons are inline and scale with text size.

## 9. `prefers-reduced-motion` Support
If the user's OS requests reduced motion, the CSS strips the `bounce-pulse` animation and hover translation effects entirely. The featured card remains clearly identifiable via its static border, badge, and shadow styling.

## 10. Example Usage
Open `demo.html` in a browser for a live demonstration of the complete grid layout.

## 11. Why it fits EaseMotion CSS
This component perfectly captures the EaseMotion philosophy: it leverages advanced CSS capabilities to create a polished, engaging micro-interaction that draws the eye, while strictly maintaining performance, responsiveness, and accessibility—all without writing a single line of JavaScript.
