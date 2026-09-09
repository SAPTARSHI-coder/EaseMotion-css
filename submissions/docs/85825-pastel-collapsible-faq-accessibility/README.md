# Pastel Collapsible FAQ Accordion — Accessibility Setup

## Overview
This guide documents accessible setup for a Pastel Collapsible FAQ Accordion.

Each question controls one answer region.

The implementation uses native buttons and explicit state attributes.

## Markup

```html
<section class="faq" aria-labelledby="faq-title">
  <h2 id="faq-title">Frequently asked questions</h2>
  <article class="faq__item">
    <h3><button class="faq__trigger" type="button" aria-expanded="false" aria-controls="faq-answer-1">How does it work?</button></h3>
    <div class="faq__answer" id="faq-answer-1" hidden>It reveals the related answer content.</div>
  </article>
</section>
```

Use a heading for every question.

The button should own the expanded state.

## Accessibility State

`aria-expanded="false"` represents a collapsed answer.

Set it to `true` when the answer is exposed.

`aria-controls` identifies the answer region.

The `hidden` attribute keeps collapsed content unavailable to assistive technology.

## Keyboard Navigation

Native buttons support Tab, Enter, and Space.

Escape may close an expanded item when requested by the interaction model.

Do not trap focus.

Keep focus on the trigger after toggling.

## Focus and Contrast

Provide a visible focus indicator.

Pastel colors must maintain readable text contrast.

Do not use color alone to indicate open state.

## Class Structure

`faq` is the component wrapper.

`faq__item` contains one question and answer.

`faq__trigger` is the interactive control.

`faq__answer` is the controlled content region.

## Custom Properties

```css
.faq {
  --faq-surface: #fff7fb;
  --faq-accent: #8a5aa8;
  --faq-border: #e9d9e7;
  --faq-focus: #2457ff;
}
```

Use variables to adapt the palette without changing structure.

## Responsive Behavior

Allow answers to wrap naturally.

Keep question labels readable on narrow screens.

Avoid fixed heights on content regions.

## Reduced Motion

Accordion transitions are decorative.

Respect `prefers-reduced-motion` and keep state changes immediate when requested.

## Testing Checklist

- Test keyboard operation.
- Test visible focus.
- Test expanded-state announcements.
- Test collapsed content availability.
- Test narrow layouts.
- Test browser zoom.
- Test reduced motion.

## Files

`README.md` contains the accessibility guide.

`demo.html` contains the standalone example.

`style.css` contains the presentation rules.

## Summary

A robust FAQ accordion combines native controls, accurate state, clear headings, and predictable focus behavior.