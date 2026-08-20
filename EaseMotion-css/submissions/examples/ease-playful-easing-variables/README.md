# Playful Easing Variables Proposal (`ease-playful-easing-variables`)

A proposal for `core/variables.css` and `core/utilities.css` providing custom `cubic-bezier` curves for "bounce" and "elastic" effects.

## 🚀 Features

- **`--ease-bounce`**: A curve that overshoots its target slightly and settles back, simulating a soft physical bounce.
- **`--ease-elastic`**: A highly playful curve that pulls back before shooting forward, and overshoots before settling (spring effect).
- **Utility Classes**: Includes `.em-ease-bounce` and `.em-ease-elastic` for instant, drop-in application.
- **Motion Safe**: Fully respects `prefers-reduced-motion: reduce` by stripping the animation duration entirely.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can apply the proposed classes or variables to your transitions:

```html
<!-- Using the utility class -->
<div class="card em-hover-lift em-ease-bounce">
  Hover me!
</div>

<!-- Using the variable directly in CSS -->
<style>
.my-custom-element {
  transition: transform 0.6s var(--ease-elastic);
}
</style>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/variables.css` and `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #16967
