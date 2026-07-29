# Interactive Landing Page System

## What does this do?
A flagship interactive landing page example featuring sticky navigation,
a hero banner with staggered fade-up entrance, problem/solution and
feature grids with hover lift, pricing tiers (with a highlighted
featured plan), an FAQ accordion, a newsletter signup, a cookie consent
banner, and a scroll-to-top floating action button.

## How is it used?
Open `demo.html` to see the full page. Key building blocks:

```html
<nav class="ease-landing-nav">...</nav>

<header class="ease-landing-hero">
  <h1>Headline</h1>
  <p>Subheadline</p>
  <a href="#pricing" class="cta">Get Started</a>
</header>

<section class="ease-landing-section">
  <div class="ease-landing-features">
    <div class="ease-landing-feature">...</div>
  </div>
</section>

<div class="ease-landing-pricing">
  <div class="ease-pricing-card featured">...</div>
</div>

<details class="ease-faq-item">
  <summary>Question</summary>
  <p>Answer</p>
</details>

<div class="ease-cookie-consent">...</div>
<button class="ease-scrolltop-btn">↑</button>
```

## Why is it useful?
Enterprise projects need ultra-premium, interactive showcase interfaces
to demonstrate design fidelity and user experience capabilities. This
example demonstrates a flagship interactive landing page with sticky
navigation, hero banners, problem/solution and feature grids, pricing
tiers, FAQs, newsletter signups, and cookie consent — all pure CSS
animations and transitions, with minimal JS only for the cookie dismiss
and scroll-to-top actions. Includes prefers-reduced-motion support.