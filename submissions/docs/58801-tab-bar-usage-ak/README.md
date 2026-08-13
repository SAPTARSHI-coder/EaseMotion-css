# Tab Bar — Usage Guide

Documentation for the CSS-only Tab Bar component (`submissions/examples/tab-bar`).

## What it is

A lightweight, zero-dependency tab bar built with plain CSS. No JavaScript is required for the visual states — only the `active` class controls which tab is highlighted.

## Markup

```html
<div class="tabs">
  <span class="tab active">Tab 1</span>
  <span class="tab">Tab 2</span>
</div>
```

- `.tabs` — the container; lays out tabs in a row with a rounded, dark background.
- `.tab` — an individual tab item.
- `.tab.active` — marks the currently selected tab (orange background, dark text).

You can add as many `.tab` elements inside `.tabs` as you need.

## Styling

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Key CSS classes:

| Class | Purpose |
|---|---|
| `.tabs` | Flex container, dark rounded background |
| `.tab` | Base tab styling, transparent background, muted text |
| `.tab.active` | Highlighted state, orange background |
| `.tab:hover` | Lightens text color on hover (non-active tabs) |

## Making tabs interactive

The component ships CSS-only, so switching the active tab requires a small script to toggle the `active` class:

```html
<script>
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelector('.tab.active')?.classList.remove('active');
      tab.classList.add('active');
    });
  });
</script>
```

## Customization

Override these CSS custom properties or edit `style.css` directly to theme the tab bar:

- Background color: `.tabs { background: ... }`
- Active tab color: `.tab.active { background: ...; color: ...; }`
- Padding/spacing: `.tab { padding: ...; }`

## Notes

- Works in any modern browser, no dependencies.
- Accessibility: for production use, consider adding `role="tablist"`, `role="tab"`, and `aria-selected` attributes, since the base component only provides visual styling.
