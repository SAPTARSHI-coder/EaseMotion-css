# CSS-Only Accordion Dropdown

## What does this do?
This adds a fully animated accordion component — a vertically stacked set of expandable/collapsible sections. Each header can be clicked to reveal or hide its content. The open section gets a subtle purple border glow and the `+` icon rotates into a `×` to signal the open state.

## How is it used?
Wrap all accordion items in a `.accordion` container. Use a native `<details>` element for each item, with a `<summary>` as the clickable header and a `<div class="accordion-body">` for the content.

Example:
```html
<div class="accordion">
  <details>
    <summary>What is EaseMotion CSS?</summary>
    <div class="accordion-body">
      EaseMotion is an animation-first CSS framework.
    </div>
  </details>
</div>
```

## Why is it useful?
- Requires **zero JavaScript** — the `<details>` element provides open/close toggle behaviour natively in all modern browsers.
- Fully **keyboard accessible** out of the box — screen readers understand the open/closed state semantically without any ARIA attributes.
- Smooth fade-in and slide-down animation when content expands, making the interaction feel polished and intentional.
