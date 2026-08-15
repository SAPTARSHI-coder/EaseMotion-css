# Visually Hidden Text (`.sr-only`)

This submission provides the foundational CSS utility class `.sr-only` (screen reader only) and demonstrates three critical WCAG 2.1 AA use cases where visually hiding text is required to provide context to assistive technologies.

## The Problem with `display: none`

Often, a UI design relies heavily on visual context (icons, layout, proximity) to convey meaning. When developers realize this context is missing for screen readers, they try to add hidden text using `display: none` or `visibility: hidden`.

**This is a massive WCAG failure.** Both of those CSS properties remove the element entirely from the accessibility tree, meaning screen readers will ignore the text completely.

## The Solution: `.sr-only`

The `.sr-only` class is a battle-tested CSS snippet that visually hides an element by clipping it to a 1x1 pixel square off-screen, while keeping it perfectly readable by screen readers.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

## Critical Use Cases

### 1. Icon-Only Buttons

An icon-only button (like a trash can icon) provides no text for a screen reader to announce. Without intervention, it reads as "button, blank". While `aria-label` is an option, using an `.sr-only` span is often preferred because automated translation services (like Google Translate) translate text inside spans, but frequently ignore attributes like `aria-label`.

```html
<button>
    <svg aria-hidden="true">...</svg>
    <span class="sr-only">Delete Profile</span>
</button>
```
*Note: We also explicitly hide the SVG using `aria-hidden="true"` so the screen reader doesn't try to read its title or path.*

### 2. Ambiguous Links (e.g., "Read More")

Screen reader users frequently pull up a list of all links on a page to navigate quickly. If you have 5 articles that all have a "Read more" link, the user's list will just say "Read more, Read more, Read more" with zero context.

We use `.sr-only` to append hidden context to the link.

```html
<a href="/article-1">
    Read more<span class="sr-only"> about WCAG 2.2 Guidelines</span>
</a>
```
*Visual output: "Read more"*
*Screen reader output: "Read more about WCAG 2.2 Guidelines"*

### 3. Visual Formatting Meaning

Sighted users understand that a gray number with a strikethrough next to a green number implies "Original Price vs Current Price". A screen reader simply reads the numbers consecutively without the visual hierarchy.

We inject `.sr-only` spans to translate that visual formatting into explicit text.

```html
<span class="sr-only">Original price:</span>
<span class="price-old">$99.99</span>
```
