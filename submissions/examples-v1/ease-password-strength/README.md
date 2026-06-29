# Password Strength Meter (`ease-password-strength`)

An animated, segmented password strength indicator. Built for the EaseMotion-css framework.

## 🚀 Features

- **Sequential Filling**: Uses 4 distinct segments that fill sequentially as the password strength increases.
- **Dynamic Coloring**: Transitions colors smoothly from Red (Weak) → Orange (Fair) → Yellow (Good) → Green (Strong).
- **CSS-Driven Visuals**: JavaScript is only used to calculate the score (0-4) and update a `data-strength` attribute (and `--ease-strength` CSS variable). The CSS handles 100% of the visual styling and transitioning via `:nth-child` selectors.
- **Smooth Animations**: Utilizes custom `cubic-bezier` timing to make the color fills feel responsive and fluid.

## 🛠️ Usage

Set up the HTML structure with 4 child segments:

```html
<div class="ease-password-meter" data-strength="0">
  <div class="ease-password-segment"></div>
  <div class="ease-password-segment"></div>
  <div class="ease-password-segment"></div>
  <div class="ease-password-segment"></div>
</div>
