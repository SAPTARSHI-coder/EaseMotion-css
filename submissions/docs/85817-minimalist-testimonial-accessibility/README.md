# Minimalist User Testimonial Card — Accessibility Setup

## Overview
This guide documents accessibility setup for a Minimalist User Testimonial Card.

The component uses semantic quotation and attribution elements.

## Markup

```html
<article class="testimonial-card">
  <blockquote class="testimonial-card__quote">“The workflow feels effortless.”</blockquote>
  <footer class="testimonial-card__author"><strong>Alex Morgan</strong><span>Product Designer</span></footer>
</article>
```

Use `blockquote` for testimonial text.

Use a footer for attribution.

## Accessibility

Keep quote and author text readable at all sizes.

If an avatar is present, provide meaningful alternative text when it conveys identity.

Use empty alt text for purely decorative images.

Do not encode the quote as an image.

## Interactive Cards

If the card links to a profile or case study, use a native anchor.

Keep the destination understandable from the accessible link name.

Preserve visible focus styling.

## Class Structure

`testimonial-card` is the wrapper.

`testimonial-card__quote` is the quotation.

`testimonial-card__author` contains attribution.

Modifiers should remain presentation-only.

## Custom Properties

```css
.testimonial-card {
  --card-surface: #ffffff;
  --card-text: #1f2937;
  --card-muted: #667085;
  --card-focus: #2457ff;
}
```

## Keyboard Guidance

Native links and buttons provide expected keyboard behavior.

Avoid making decorative containers focusable.

Keep focus order logical.

## Responsive Behavior

Let quote text wrap naturally.

Do not impose a fixed height on the card.

Test at mobile widths and high zoom.

## Reduced Motion

Disable optional movement under `prefers-reduced-motion`.

## Testing

Check semantics, contrast, alt text, keyboard focus, zoom, and narrow layouts.

## Files

`README.md` contains accessibility guidance.

`demo.html` contains the standalone example.

`style.css` contains presentation rules.

## Summary

Semantic quotation, readable attribution, native interactive elements, and visible focus provide a strong accessible foundation.