# Recipe Step Checkbox with Strikethrough Completion

## What does this do?

An elegant checklist item animation tailored for cooking and recipe apps, featuring a custom animated checkbox with drawing checkmark, a smooth left-to-right strikethrough drawing across the text, and text dimming upon step completion.

## How is it used?

Wrap your checkbox and content in the recipe step label container:

```html
<label class="recipe-step">
  <input type="checkbox" class="step-checkbox" />
  <div class="checkbox-box">
    <!-- SVG Checkmark -->
    <svg
      class="checkmark-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  <div class="step-content">
    <span class="step-number">Step 1</span>
    <span class="step-text"
      >Pat chicken breasts dry and season with salt and pepper.</span
    >
  </div>
</label>
```

## Why is it useful?

It provides satisfying visual feedback for list/recipe completion. The strikethrough line draws dynamically across the text to symbolize completion, and the text opacity dims to draw focus to remaining active steps. The component is fully responsive, built with CSS-only animations (no JavaScript), and uses modern CSS features like `:has()` for layout state styling and CSS counters to dynamically calculate progress.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.

## Contribution Notes

- Naming suffix `-sgr` added to prevent conflicts
- Maintainer will rename classes to follow `ease-*` standards
