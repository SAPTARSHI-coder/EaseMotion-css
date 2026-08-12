# Fix: Modal Size Modifiers Should Set --ease-modal-max-width Token

## Problem

`.ease-modal-sm` and `.ease-modal-lg` hardcoded `max-width` directly:

```css
.ease-modal-sm { max-width: 400px; }
.ease-modal-lg { max-width: 700px; }
```

This bypasses `--ease-modal-max-width` — if a user sets `--ease-modal-max-width` on `.ease-modal-sm`, it has no effect because `max-width: 400px` takes precedence. The size modifier classes should set the token, not override the property.

## Solution

Size modifiers set `--ease-modal-max-width` so the base `.ease-modal` token drives the actual dimension:

```css
.ease-modal-sm { --ease-modal-max-width: 400px; }
.ease-modal-lg { --ease-modal-max-width: 700px; }
```

This allows inline overrides to work correctly:

```html
<!-- Override the sm size to 300px — now works correctly -->
<div class="ease-modal ease-modal-sm" style="--ease-modal-max-width: 300px;">
```

## Usage

```html
<div class="ease-modal ease-modal-sm">Small modal</div>
<div class="ease-modal ease-modal-lg">Large modal</div>

<!-- Override size modifier -->
<div class="ease-modal ease-modal-sm" style="--ease-modal-max-width: 300px;">Custom small</div>
```

## Why it fits EaseMotion CSS

When a component exposes a CSS custom property, all modifiers should set that token rather than hardcoding the underlying property. This keeps the token as the single source of truth and allows inline overrides to work as expected.

Fixes #10430
