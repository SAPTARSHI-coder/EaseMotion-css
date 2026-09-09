# Accessible Skip Links (The `tabindex="-1"` Target Fix)

This submission demonstrates how to build an accessible "Skip Link" that allows keyboard-only and screen reader users to bypass repetitive navigation blocks and jump directly to the primary content of the page.

## The Problem: The Anchor Focus Bug

A standard skip link looks like this: `<a href="#main-content">Skip to Main</a>`. 

When a user clicks this link, the browser scrolls down to the element with `id="main-content"`. **However, in older browsers (like IE/Edge Legacy) and many modern Single Page Applications (SPAs), the keyboard focus does not move with the scroll.**

If a user clicks the skip link, and then presses `Tab` again, their focus will jump right back to the first navigation link at the top of the page, completely defeating the purpose of the skip link.

## The Solution: Programmatic Focus (`tabindex="-1"`)

To guarantee that the browser actually transfers keyboard focus to the target element, the target element **must be focusable**. 

Because a `<main>` element is not natively focusable (like a button or input), you must explicitly allow it to receive programmatic focus by adding `tabindex="-1"`.

```html
<!-- 1. The Skip Link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Navigation goes here... -->

<!-- 2. The Target (CRITICAL: tabindex="-1") -->
<main id="main-content" tabindex="-1">
    <h1>Page Title</h1>
</main>
```

### Why `tabindex="-1"` and not `tabindex="0"`?

- `tabindex="0"` adds the element to the natural Tab sequence. You do not want users to naturally Tab onto the `<main>` container every time they navigate the page.
- `tabindex="-1"` removes the element from the natural Tab sequence, but allows it to receive focus programmatically (via JavaScript `focus()` or via an anchor link jump). This is exactly what we need.

## Visual Styling (The Visually Hidden Pattern)

A skip link should not clutter the visual design for mouse users. It should be hidden by default, and only appear when a keyboard user presses the `Tab` key to focus it.

**Do not use `display: none` or `visibility: hidden`.** This completely removes the element from the DOM, and screen readers/keyboard users will never be able to focus it.

Instead, push it off-screen, and bring it on-screen on `:focus`.

```css
.skip-link {
    position: absolute;
    top: -100px; /* Off-screen */
    left: 1rem;
    z-index: 9999;
}

.skip-link:focus {
    top: 0; /* Snap on-screen when Tabbed */
}
```

## High Contrast (Forced Colors) Support

Because the skip link relies heavily on `background-color` to stand out when it appears over the site header, it can become invisible in Windows High Contrast Mode (where backgrounds are stripped). We use the `forced-colors` media query to apply a solid border and guarantee legibility.

```css
@media (forced-colors: active) {
    .skip-link {
        border: 2px solid CanvasText;
    }
}
```
