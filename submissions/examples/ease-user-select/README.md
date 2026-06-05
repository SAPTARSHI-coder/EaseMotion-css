# ease-user-select Utilities

## What does it do?

Controls text selection behavior on elements using the CSS
`user-select` property with full cross-browser support.

## How is it used?

```html
<!-- Prevent selection (buttons, UI elements) -->
<button class="ease-select-none">Click Me</button>

<!-- Select all on click (code snippets, tokens) -->
<code class="ease-select-all">npm install easeMotion</code>

<!-- Normal text selection -->
<p class="ease-select-text">Regular paragraph text.</p>

<!-- Browser default -->
<div class="ease-select-auto">Auto behavior.</div>
```

## Classes

- `.ease-select-none` — prevent text selection
- `.ease-select-all` — select all on click
- `.ease-select-text` — normal text selection
- `.ease-select-auto` — browser default behavior

## Tech Stack

- CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
