# Animated Pricing Toggle Card

An interactive, premium SaaS pricing table with a Monthly/Yearly toggle switch, pure CSS ticket roll price animations, featured card highlighting, feature lists, and responsive layouts. Designed for SaaS marketing landing pages, subscription platforms, and commercial checkout sectors.

## What does this do?
This component provides a pricing display featuring:
- **Card Hover Elevation**: Lifts cards (`translateY(-8px)`) and expands shadow glows.
- **Pure CSS Ticket Roll Price Slider**: Slides price values vertically on checkbox toggle (rolling them up and out of view) using modern `:has()` selector states.
- **Featured Plan Accents**: Highlight the "Pro" tier (`.featured`) with vertical scale scaling (`scale(1.03)`), a glowing badge indicator, and a gradient accent border.
- **Custom CTA Animations**: Expands CTA button outlines and slides arrow icons on hover.
- **Glossy Sheen Reflection**: Sweeps a soft gloss sheet across the card face on hover.

## How is it used?
Integrate the widget template into your dashboard layout:

```html
<!-- Example of Pricing Toggle Card Layout -->
<div class="pricing-container">
  <div class="pricing-toggle">
    <span>Monthly</span>

    <label class="toggle-switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>

    <span>Yearly</span>
  </div>

  <div class="pricing-cards">
    <div class="pricing-card featured">
      <h3>Pro</h3>
      <div class="price-container">
        <div class="price-roll">
          <span>$29</span>
          <span>$24</span>
        </div>
        <span class="billing-period">/ mo</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
Pricing tables are a core visual component on business landing pages. This toggle card:
1. **Drives UX value**: Highlights cost savings dynamically using fluid rolling ticket price transitions.
2. **Centers product hierarchy**: Guides users toward preferred tiers using popular badge indicators, gradient lines, and glowing drop shadows.
3. **Declutters layouts**: Eliminates duplicating cards for monthly and yearly pricing by housing both states inside a single rolling frame.
4. **Pure CSS implementation**: Operates completely without scripts or external libraries.

## Tech Stack
- HTML5
- CSS3 (Vanilla Custom Properties, Grid, Flexbox, Keyframes, `:has()` Selectors)

## Preview
To see the pricing cards in action:
1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-pricing-toggle-card/demo.html) directly in any modern web browser.
2. Toggle the billing switch and hover cards to see animations.

## Contribution Notes
- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
