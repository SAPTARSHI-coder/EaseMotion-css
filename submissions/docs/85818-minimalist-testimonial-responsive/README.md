# Minimalist User Testimonial Card — Responsive Breakpoints Layout

## Overview
This guide documents responsive breakpoints for a Minimalist User Testimonial Card.

The card presents a quote, author, role, and optional avatar.

The layout remains readable from desktop to mobile.

## Markup

```html
<article class="testimonial-card">
  <blockquote class="testimonial-card__quote">“The workflow feels effortless.”</blockquote>
  <footer class="testimonial-card__author">
    <strong>Alex Morgan</strong>
    <span>Product Designer</span>
  </footer>
</article>
```

Use a real blockquote for quoted content.

Keep author information in the footer.

## Class Structure

`testimonial-card` is the component block.

`testimonial-card__quote` contains the testimonial.

`testimonial-card__author` contains attribution.

Modifiers can define compact or featured variants.

## Responsive Layout

Use comfortable padding on large screens.

Reduce padding at tablet widths.

Stack author details naturally on narrow screens.

Avoid fixed heights that can clip long quotes.

## Custom Properties

```css
.testimonial-card {
  --card-surface: #ffffff;
  --card-text: #1f2937;
  --card-muted: #667085;
  --card-radius: 1.25rem;
}
```

## Accessibility

Keep quotation text readable and high contrast.

Do not use an image as the only source of author identity.

Interactive cards should contain native links or buttons.

## Keyboard Guidance

Native interactive descendants should remain keyboard accessible.

Keep focus indicators visible.

## Reduced Motion

Optional hover effects should respect reduced-motion preferences.

## Testing

Test long quotes, mobile widths, zoom, keyboard focus, and reduced motion.

## Files

`README.md` documents responsive behavior.

`demo.html` contains the example.

`style.css` contains the responsive presentation.

## Summary

The testimonial card uses flexible sizing and breakpoint-aware spacing to keep user quotes readable everywhere.