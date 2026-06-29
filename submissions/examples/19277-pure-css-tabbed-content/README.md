# Pure CSS Tabbed Content

> **Issue:** [#19277](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19277)  
> **Category:** Component · CSS-Only  
> **Level:** Intermediate

---

## Overview

A zero-JavaScript tabbed content component powered by hidden HTML radio inputs and the CSS `:checked` pseudo-class selector. Clicking a tab label triggers the corresponding radio input, which CSS uses via the general sibling combinator (`~`) to show the matching panel and style the active label — with no JavaScript involved.

---

## Demos Included

| Demo | Description |
|------|-------------|
| **Product Feature Showcase** | Horizontal pill tabs with icons, content panels with stat chips |
| **Documentation Sections** | Pill-style variant with 4 tabs for API docs / guides |
| **Settings Panel** | Vertical sidebar tabs with mock form fields and toggle rows |

---

## How It Works

```css
/* 1. Radio inputs are invisible state holders */
.tab-radio {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* 2. All panels hidden by default */
.tab-panel {
  display: none;
}

/* 3. :checked + ~ sibling combinator reveals active panel */
#tab-1:checked ~ .tab-panels .tab-panel:nth-child(1) {
  display: block;
}

/* 4. Active label gets highlighted */
#tab-1:checked ~ .tab-list label[for="tab-1"] {
  background: var(--ease-primary);
  color: #fff;
}
```

---

## Files

```
submissions/examples/19277-pure-css-tabbed-content/
├── demo.html   — Full showcase with 3 demo variants
├── style.css   — All styling (no inline styles in HTML)
└── README.md   — This file
```

---

## Usage

Copy the HTML structure and link `style.css` into your project. Adjust the `name` attribute on radio inputs to scope tab groups independently. Each additional tab group needs a unique `name` attribute and unique `id`/`for` pairs.

```html
<input type="radio" name="my-tabs" id="tab-1" class="tab-radio" checked />
<input type="radio" name="my-tabs" id="tab-2" class="tab-radio" />

<div class="tab-list">
  <label for="tab-1" class="tab-label">Tab One</label>
  <label for="tab-2" class="tab-label">Tab Two</label>
</div>

<div class="tab-panels">
  <div class="tab-panel">Content One</div>
  <div class="tab-panel">Content Two</div>
</div>
```

---

## Accessibility

- Tab labels are `<label>` elements with proper `for` attributes — fully keyboard navigable via Tab + Spacebar/Enter
- `role="tablist"` on the container and `role="tab"` on labels added for ARIA semantics
- Panels use `display: none` which also hides them from screen readers when inactive

---

## Browser Support

Works in all modern browsers. The `:checked` pseudo-class and general sibling combinator (`~`) are supported in Chrome, Firefox, Safari, and Edge.