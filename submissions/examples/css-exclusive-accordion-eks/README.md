# CSS Exclusive Accordion with details name attribute

## What does this do?

A pure HTML exclusive accordion using the native `<details name="group">` attribute — the browser ensures only one section is open at a time, exactly like radio buttons. Animated with `::details-content`, `interpolate-size: allow-keywords`, and `@starting-style`. Zero JavaScript.

## How is it used?

```html
<details name="faq" class="accordion-item" open>
  <summary class="accordion-summary">
    <span class="accordion-title">What is this?</span>
    <svg class="accordion-icon" viewBox="0 0 24 24">...</svg>
  </summary>
  <div class="accordion-content">
    <p>An exclusive accordion — opening one closes the others.</p>
  </div>
</details>

<details name="faq" class="accordion-item">
  <summary class="accordion-summary">
    <span class="accordion-title">How does it work?</span>
    <svg class="accordion-icon" viewBox="0 0 24 24">...</svg>
  </summary>
  <div class="accordion-content">
    <p>All details elements that share the same name attribute form an exclusive group.</p>
  </div>
</details>
```

Two visual variants are included: a standard bordered style and a left-accent-bar style.

## Why is it useful?

The `<details name="group">` attribute is a relatively new native HTML feature (Chromium 120+, Firefox 131+) that eliminates the need for JavaScript to manage exclusive accordion behavior. Combined with modern CSS:

- **`::details-content`** — the pseudo-element for the content wrapper, enabling transitions
- **`interpolate-size: allow-keywords`** — enables smooth transitions from `auto` height
- **`@starting-style`** — defines the initial closed state for entry/exit animations
- **Native accessibility** — keyboard navigation, screen reader announcements, focus management

This fits EaseMotion's philosophy: leverage what the platform already provides, add polish with CSS, keep things readable and dependency-free.
