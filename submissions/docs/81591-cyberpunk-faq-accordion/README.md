# Cyberpunk FAQ Accordion — Advanced Styling

## Overview
Advanced styling guidance for a cyberpunk-inspired FAQ accordion.
The visual layer emphasizes panels, borders, glow, and clear open states.

## Markup
```html
<details class="faq">
  <summary class="faq__question">How does the effect work?</summary>
  <div class="faq__answer">The visual treatment is implemented with CSS.</div>
</details>
```

## Class Naming
`faq` is the component block.
`faq__question` identifies the summary control.
`faq__answer` identifies the content region.
Use modifiers for intentional themes or density variants.

## Advanced Styling
Use layered borders and restrained glow effects.
Keep the answer readable against the background.
Use the native `details` and `summary` interaction where possible.

## Custom Variables
Expose glow, border, surface, text, radius, and spacing values.

```css
.faq { --faq-glow: #38f2ff; --faq-surface: #0c1220; }
```

## Accessibility
Native details/summary provides keyboard interaction and disclosure semantics.
Keep the summary text descriptive.
Do not hide essential answer content behind a decorative-only interaction.
Maintain strong focus visibility.

## Keyboard Guidance
The summary is keyboard accessible natively.
Do not replace it with a non-interactive heading.

## Responsive Design
Allow long questions to wrap naturally.
Keep answer text readable on narrow screens.

## Motion
Optional glow or rotation effects should respect reduced-motion preferences.

## Testing
Test open and closed states, keyboard use, focus, contrast, zoom, and narrow layouts.

## Files
`README.md` contains advanced styling guidance.
`demo.html` is the expanded example.
`style.css` is the clean presentation layer.

## Maintenance
Keep disclosure behavior semantic.
Use CSS variables for theme changes.
Avoid excessive glow that reduces readability.
