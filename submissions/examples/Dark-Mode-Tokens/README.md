# Dark Mode Token Overrides

## 1. What does this do?

Adds automatic dark mode to the entire EaseMotion CSS framework by overriding the four semantic surface tokens inside a single `@media (prefers-color-scheme: dark)` block, with optional `.dark-mode` / `.light-mode` body classes for JavaScript-controlled toggling.

## 2. How is it used?

**Automatic (zero HTML changes required)**

Simply include `style.css` after `variables.css`. Dark mode activates automatically when the user's OS is set to dark.

```html
<link rel="stylesheet" href="../../../core/variables.css">
<link rel="stylesheet" href="style.css">

<!-- Every existing component just works — no extra classes needed -->
<div class="ease-card">This card adapts automatically.</div>
<button class="ease-btn ease-btn-primary">This button too.</button>
```

**Manual JS toggle (optional)**

```js
// Force dark
document.body.classList.add('dark-mode');

// Force light (overrides system dark preference)
document.body.classList.add('light-mode');

// Return to system auto
document.body.classList.remove('dark-mode', 'light-mode');
```

## 3. Why is it useful?

Dark mode is listed as a planned item in `VISION.md` and is one of the most-requested features in any CSS framework today.

The EaseMotion token architecture already makes the implementation trivial: the full neutral palette (`--ease-color-neutral-*`) is defined, the four semantic aliases (`--ease-color-bg`, `--ease-color-surface`, `--ease-color-text`, `--ease-color-muted`) already exist, and every component references those aliases rather than hard-coded hex values. Flipping dark mode is therefore exactly four variable overrides inside a single `@media` block — no component files touched, no HTML changes required, zero specificity fights.

The raw palette (primary, success, danger, warning, all neutrals) is intentionally left unchanged so accent colours remain vivid on dark backgrounds without further adjustment.
