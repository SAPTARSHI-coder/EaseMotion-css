# Scale-Hover Pricing Table

A responsive, pure CSS pricing table with a smooth scale animation on 
hover and keyboard focus — no JavaScript required.

## Features

- Fully responsive grid that reflows automatically for any number of plans
- Smooth scale + shadow transition on hover and keyboard focus (`:focus-within`)
- "Most Popular" badge to highlight a featured plan
- Configurable via CSS custom properties — no need to edit core styles
- Respects `prefers-reduced-motion` for accessibility
- Soft gradient backdrop and rounded card design

## Usage

Copy `style.css` into your project and structure your HTML using the 
`pricing-grid-pr` / `pricing-card-pr` classes as shown in `demo.html`.

```html
<main class="pricing-grid-pr">
  <article class="pricing-card-pr">
    <h2>Basic</h2>
    <p class="price-pr">$0<span>/mo</span></p>
    <a href="#" class="pricing-cta-pr">Choose Basic</a>
    <ul>
      <li>5 Projects / month</li>
    </ul>
    <p class="suggestion-pr">Upgrade anytime to unlock all features.</p>
  </article>
</main>
```

Add `featured-pr` to a card's class list and include a 
`<span class="badge-pr">Most Popular</span>` inside it to highlight 
a recommended plan.

## Customization

Override these CSS custom properties on `.pricing-grid-pr` to adjust 
the animation and theme without touching the core styles:

| Variable                  | Default   | Description                          |
|----------------------------|-----------|---------------------------------------|
| `--pr-scale-amount`        | `1.05`    | How much a card scales on hover/focus |
| `--pr-transition-duration` | `0.3s`    | Animation speed                       |
| `--pr-transition-easing`   | `ease`    | Timing function                       |
| `--pr-accent-color`        | `#1d2128` | Badge, border, and CTA button color   |

Example:
```css
.pricing-grid-pr {
  --pr-scale-amount: 1.1;
  --pr-transition-duration: 0.5s;
  --pr-accent-color: #6c5ce7;
}
```

## Accessibility

- Hover feedback also triggers on keyboard focus via `:focus-within`
- All animation is disabled under `prefers-reduced-motion: reduce`, 
  while layout and content remain fully visible and usable

## Why it's useful

Pricing tables are a near-universal UI need. This example demonstrates 
polished, accessible hover feedback and easy theming through CSS 
variables, without any JavaScript or external dependencies — in line 
with EaseMotion CSS's lightweight philosophy.