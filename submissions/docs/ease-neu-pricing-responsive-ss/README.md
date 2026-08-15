# Neumorphic Tier Pricing Card - Responsive Breakpoints Guide

## Overview

The Neumorphic Tier Pricing Card system delivers a modern soft-UI aesthetic combined with a fully fluid and responsive multi-tier grid layout. Built with CSS Custom Properties and standard CSS Grid, the layout transitions seamlessly across viewports from single-column mobile views to multi-column tablet and desktop layouts.

## HTML Markup Specification

Below is the standard, production-ready HTML structure wrapping `.ease-neu-pricing-card` elements inside an `.ease-pricing-grid` container:

```html
<main class="ease-pricing-grid" aria-label="Pricing Tiers">
  
  <!-- Basic Tier -->
  <section class="ease-neu-pricing-card" aria-labelledby="tier-basic">
    <h2 id="tier-basic" class="ease-pricing-tier">Basic</h2>
    <div class="ease-pricing-amount"><span>$9</span><span class="ease-pricing-period">/mo</span></div>
    <p style="text-align: center; color: var(--neu-text-secondary); font-size: 0.875rem; margin-top: 0;">Perfect for starters</p>
    <ul class="ease-pricing-features" aria-label="Basic plan features">
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 1 User Account</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 5GB Storage</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> Basic Support</li>
    </ul>
    <button type="button" class="ease-btn-neu-cta" aria-label="Subscribe to Basic plan">Get Started</button>
  </section>

  <!-- Pro Tier (Highlighted) -->
  <section class="ease-neu-pricing-card ease-neu-pricing-highlight" aria-labelledby="tier-pro">
    <h2 id="tier-pro" class="ease-pricing-tier" style="color: var(--neu-accent);">Pro</h2>
    <div class="ease-pricing-amount"><span>$29</span><span class="ease-pricing-period">/mo</span></div>
    <p style="text-align: center; color: var(--neu-text-secondary); font-size: 0.875rem; margin-top: 0;">Most popular choice</p>
    <ul class="ease-pricing-features" aria-label="Pro plan features">
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 5 User Accounts</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 50GB Storage</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> Priority Support</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> Advanced Analytics</li>
    </ul>
    <button type="button" class="ease-btn-neu-cta" style="color: var(--neu-text-primary);" aria-label="Subscribe to Pro plan">Start Free Trial</button>
  </section>

  <!-- Enterprise Tier -->
  <section class="ease-neu-pricing-card" aria-labelledby="tier-enterprise">
    <h2 id="tier-enterprise" class="ease-pricing-tier">Enterprise</h2>
    <div class="ease-pricing-amount"><span>$99</span><span class="ease-pricing-period">/mo</span></div>
    <p style="text-align: center; color: var(--neu-text-secondary); font-size: 0.875rem; margin-top: 0;">For large scale teams</p>
    <ul class="ease-pricing-features" aria-label="Enterprise plan features">
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> Unlimited Users</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 1TB Storage</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> 24/7 Dedicated Support</li>
      <li><span class="ease-pricing-icon" aria-hidden="true">✓</span> Custom Integrations</li>
    </ul>
    <button type="button" class="ease-btn-neu-cta" aria-label="Contact sales for Enterprise plan">Contact Sales</button>
  </section>

</main>
```

## Responsive Grid & Breakpoint Matrix

The grid adapts automatically across three major screen categories:

| Viewport Width | Layout Mode | Grid Configuration | Behavior & Visual Notes |
| :--- | :--- | :--- | :--- |
| `< 768px` | Mobile | `grid-template-columns: 1fr;` | Single column stacked view. Cards take full container width. Highlight card scaling is reset (`scale(1)`). |
| `768px - 1023px` | Tablet | `grid-template-columns: repeat(2, 1fr);` | Two column layout. The third card wraps smoothly to the next row. |
| `>= 1024px` | Desktop | `grid-template-columns: repeat(3, 1fr);` | Three column side-by-side grid (`align-items: center`). Highlighted card (`.ease-neu-pricing-highlight`) scales to `1.02` with increased padding. |

### Modifier Classes
- `.ease-neu-pricing-highlight`: Scales the card to `1.02` and increases padding on desktop viewports to visually emphasize the primary or recommended pricing tier ("Pro").

## CSS Custom Property Themes (Tokens)

Customize the visual appearance, color palette, and soft shadow levels by overriding the following root design tokens:

```css
:root {
  --neu-bg: #e0e5ec;           /* Page background color */
  --neu-surface: #e0e5ec;      /* Card and element surface background */
  --neu-shadow-light: #ffffff; /* Specular top-left light highlight shadow */
  --neu-shadow-dark: #a3b1c6;  /* Ambient bottom-right dark shadow */
  --neu-text-primary: #2d3748; /* Main body text and tier headers */
  --neu-text-secondary: #718096;/* Subtitles, labels, and periods */
  --neu-accent: #3182ce;       /* Accent color for highlighted elements and icons */
  --neu-radius: 24px;          /* Border radius for pricing cards */
}
```

## Accessibility & Keyboard Navigation (WCAG 2.1 AA)

- **Semantic Regions**: Each pricing card is constructed with `<section>` (or `<article>`) elements and explicitly linked to its heading via `aria-labelledby="tier-name"`.
- **Screen Reader Enhancements**: Decorative checkmark icons (`✓`) use `aria-hidden="true"` to prevent repetitive symbol announcements by assistive technologies.
- **Descriptive Feature Lists**: Each `<ul>` feature list includes an `aria-label` attribute (e.g., `aria-label="Pro plan features"`).
- **Keyboard Focus States**: Interactive Call-to-Action buttons (`.ease-btn-neu-cta`) utilize `:focus-visible` to render a high-contrast focus indicator (`outline: 2px solid var(--neu-accent); outline-offset: 4px;`).
- **High-Contrast Fallbacks**: Forced-colors media queries (`@media (forced-colors: active)`) add explicit borders (`CanvasText` / `ButtonText`) to ensure full visibility under Windows High Contrast mode.
