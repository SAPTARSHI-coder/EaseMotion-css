# SVG Screen Reader Accessibility Fix

This submission documents and provides the architectural fix for the catastrophic screen reader failure currently plaguing over 1,796 SVG instances across the framework.

## Issue Description
Currently, nearly 1,800 SVGs are injected directly into the HTML within interactive elements (like buttons or links) without proper accessibility attributes. Because these SVGs lack `aria-hidden="true"` or an explicit `<title>`, screen readers (like VoiceOver or NVDA) will either completely ignore the interactive element, or worse, they will attempt to incorrectly read the raw mathematical SVG path data aloud to visually impaired users (e.g., "Graphic, path d M twelve two L two..."). This is a devastating WCAG violation and creates an unusable experience for disabled users.

## Proposed Fix
To achieve perfect accessibility compliance, SVGs must be explicitly structured based on their semantic purpose:

### Scenario 1: Decorative SVGs inside an interactive element
If the SVG is purely decorative (e.g., inside an icon button), it MUST be hidden from screen readers using `aria-hidden="true"`, and the parent element MUST provide context using `aria-label`.

**❌ Incorrect:**
```html
<button class="icon-btn">
  <svg><path d="..."/></svg>
</button>
```

**✅ Correct:**
```html
<button class="icon-btn" aria-label="Close Modal">
  <svg aria-hidden="true" focusable="false"><path d="..."/></svg>
</button>
```

### Scenario 2: Standalone Informational SVGs
If the SVG conveys information on its own, it must define a `role="img"` and contain `<title>` and `<desc>` elements linked via `aria-labelledby`.

**✅ Correct:**
```html
<svg role="img" aria-labelledby="svg-title svg-desc">
  <title id="svg-title">Success</title>
  <desc id="svg-desc">Green checkmark indicating success</desc>
  <path d="..."/>
</svg>
```

The `demo.html` in this folder provides a live demonstration of this architectural fix. All 1,796+ existing unoptimized SVGs and all future submissions must strictly adopt this pattern to ensure framework-wide WCAG compliance.
