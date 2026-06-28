# ease-sr-only Utility Class

**Fixes:** [#5152](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5152)  
**Add to:** `core/utilities.css`

---

## Problem

EaseMotion CSS has no utility for visually hiding content while keeping
it accessible to screen readers. This is a standard accessibility pattern
used by Bootstrap, Tailwind, and every major CSS framework.

Without it, developers must write verbose inline styles repeatedly, which
is inconsistent and completely undiscoverable for new users.

---

## Solution

Add three utility classes to `core/utilities.css`:

### 1. ease-sr-only
Visually hides an element but keeps it readable by screen readers.

```css
.ease-sr-only {
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

### 2. ease-sr-only-focusable
Hidden by default but revealed on keyboard focus — used for skip links.

```css
.ease-sr-only-focusable:focus,
.ease-sr-only-focusable:focus-within {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
  background: var(--ease-color-primary);
  color: #ffffff;
  border-radius: var(--ease-radius-md);
  z-index: var(--ease-z-toast);
}
```

### 3. ease-not-sr-only
Reverses ease-sr-only — makes element visible again.

```css
.ease-not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## Usage

```html
<!-- Icon-only button -->
<button>
  ✕
  <span class="ease-sr-only">Close dialog</span>
</button>

<!-- Skip navigation link -->
<a href="#main" class="ease-sr-only ease-sr-only-focusable">
  Skip to main content
</a>

<!-- Form with hidden label -->
<label for="search" class="ease-sr-only">Search the site</label>
<input id="search" type="search" placeholder="Search..." />

<!-- Toggle visibility with JS -->
<div class="ease-sr-only" id="msg">Now visible!</div>
<script>
  document.getElementById('msg').classList.replace('ease-sr-only', 'ease-not-sr-only');
</script>
```

---

## Demo

Open `demo.html` to see all three classes in action with real-world
use cases including icon buttons, skip links, and form labels.

---

## Checklist

- [x] Follows `ease-` naming convention
- [x] Includes Windows High Contrast Mode support
- [x] No breaking changes
- [x] Covers 3 related utility classes
- [x] Includes `demo.html`, `style.css`, `README.md`