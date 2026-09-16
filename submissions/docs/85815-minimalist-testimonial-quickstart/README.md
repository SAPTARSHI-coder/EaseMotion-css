# Minimalist User Testimonial Card — Quickstart Guide

## Overview
This quickstart demonstrates the Minimalist User Testimonial Card.

The component needs only semantic HTML and CSS.

## Step 1 — Markup

```html
<article class="testimonial-card">
  <blockquote class="testimonial-card__quote">“The workflow feels effortless.”</blockquote>
  <footer class="testimonial-card__author"><strong>Alex Morgan</strong><span>Product Designer</span></footer>
</article>
```

Use `blockquote` for the quote.

Keep attribution in the footer.

## Step 2 — Styles

Load `style.css` after the page metadata.

The stylesheet provides responsive spacing and theme variables.

## Class Structure

`testimonial-card` is the component.

`testimonial-card__quote` is the quote.

`testimonial-card__author` is the attribution.

## Customization

Use CSS custom properties for surface, text, muted text, border, radius, and shadow.

Avoid changing the semantic structure when restyling the component.

## Accessibility

Keep quote text readable.

Use meaningful alternative text for non-decorative avatars.

Use native links or buttons for interactive content.

Preserve visible focus states.

## Responsive Behavior

Allow the quote to wrap naturally.

Reduce padding on narrow screens.

Avoid fixed card heights.

## Reduced Motion

Respect `prefers-reduced-motion` for optional effects.

## Testing

Open `demo.html` directly.

Test narrow widths, zoom, keyboard focus, and long quote content.

## Files

`README.md` is the quickstart.

`demo.html` is the browser-ready example.

`style.css` contains the component styles.

## Summary

Copy the markup, load the stylesheet, and customize the variables to integrate the testimonial card.