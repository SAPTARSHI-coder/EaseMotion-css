# ease-read-more Component

## What does it do?

A CSS-only "read more" text expansion pattern using checkbox + max-height
animation. No JavaScript required.

## How is it used?

```html
<div class="ease-read-more" style="--ease-read-more-bg: #ffffff;">
  <input type="checkbox" id="rm1" />
  <div class="ease-read-more-content">
    <p>Your long text goes here...</p>
  </div>
  <label class="ease-read-more-toggle" for="rm1"></label>
</div>
```

## CSS Variables

- `--ease-read-more-collapsed` — collapsed height (default: 80px)
- `--ease-read-more-expanded` — expanded max-height (default: 1000px)
- `--ease-read-more-bg` — background color for fade gradient

## Classes

- `.ease-read-more` — wrapper
- `.ease-read-more-content` — collapsible content area
- `.ease-read-more-toggle` — clickable label (shows Read more/less)

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
