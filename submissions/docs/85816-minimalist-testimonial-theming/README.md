# Minimalist User Testimonial Card — Theming Configuration

## Overview
This guide documents theme configuration for the Minimalist User Testimonial Card.

The design uses custom properties for surface, typography, border, radius, and muted text.

## Markup

```html
<article class="testimonial-card">
  <blockquote class="testimonial-card__quote">“The workflow feels effortless.”</blockquote>
  <footer class="testimonial-card__author"><strong>Alex Morgan</strong><span>Product Designer</span></footer>
</article>
```

## Class Structure

`testimonial-card` is the component block.

`testimonial-card__quote` contains the quote.

`testimonial-card__author` contains attribution.

Modifiers can define featured or compact themes.

## Custom Properties

```css
.testimonial-card {
  --card-surface: #ffffff;
  --card-text: #1f2937;
  --card-muted: #667085;
  --card-border: #e4e7ec;
  --card-radius: 1.25rem;
  --card-shadow: 0 1rem 2rem rgb(16 24 40 / 8%);
}
```

Override variables on the component or theme wrapper.

## Accessibility

Keep text contrast readable after theme changes.

Use semantic quotation and attribution elements.

Interactive descendants must retain native focus behavior.

## Responsive Behavior

Keep the quote flexible and avoid fixed heights.

Reduce padding at narrow widths.

Let long attribution text wrap naturally.

## Reduced Motion

Theme transitions are optional.

Respect `prefers-reduced-motion` for decorative effects.

## Customization

Change surfaces, border tone, radius, shadow, and muted text through variables.

Use modifiers for complete variants rather than overriding many selectors.

## Testing

Test contrast, keyboard focus, zoom, long quotes, mobile widths, and reduced motion.

## Files

`README.md` documents theming.

`demo.html` provides the example.

`style.css` contains themeable CSS.

## Summary

Custom properties keep the testimonial visual system adaptable while the semantic structure remains stable.