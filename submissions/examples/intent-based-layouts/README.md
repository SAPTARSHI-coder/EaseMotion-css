# Intent-Based Layout Utilities

## Overview

Intent-Based Layout Utilities provide semantic CSS classes that describe **what you want to achieve** rather than **how to implement it with CSS properties**. Instead of writing Flexbox or Grid properties, developers use human-readable class names that map directly to common layout patterns.

## Problem Statement

Traditional layout utilities require developers to think in CSS terms:

- Understand Flexbox properties (`justify-content`, `align-items`, `flex-wrap`)
- Understand Grid properties (`grid-template-columns`, `gap`)
- Combine multiple utility classes to achieve simple layouts
- Difficult for beginners to learn and reason about
- Verbose markup that doesn't convey design intent

This creates a disconnect between how designers describe layouts ("sidebar with content") and how developers implement them ("grid with two columns, gap, responsive breakpoint").

## Proposed Solution

Intent-Based Layout Utilities encode common layout patterns as semantic class names. Each utility describes the **design intent**, and the CSS handles the implementation details internally.

**Before:**

```html
<nav class="flex justify-between items-center gap-4 flex-wrap">
  <div>Logo</div>
  <ul class="flex gap-6">
    ...
  </ul>
</nav>
```

**After:**

```html
<nav class="split">
  <div>Logo</div>
  <ul>
    ...
  </ul>
</nav>
```

## Available Utilities

### `.split`

**Intent:** Push items to opposite ends (left/right separation).

**Use case:** Website headers, navbars, footers, toolbar layouts.

**Implementation:** Flexbox with `justify-content: space-between` and `align-items: center`.

**Example:**

```html
<header class="split">
  <div class="logo">Brand</div>
  <nav class="nav-items">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

**Variants:**

- `.split.compact` — Tighter spacing between items

---

### `.cluster`

**Intent:** Group related items together with automatic wrapping.

**Use case:** Button groups, tag collections, action menus, icon groups.

**Implementation:** Flexbox with `flex-wrap: wrap` and consistent gap.

**Example:**

```html
<div class="cluster">
  <button>Save</button>
  <button>Cancel</button>
  <button>Delete</button>
</div>
```

**Variants:**

- `.cluster.tight` — Smaller gaps between items

**Key feature:** Items wrap automatically on smaller screens without media queries.

---

### `.center-content`

**Intent:** Perfect centering (horizontal and vertical alignment).

**Use case:** Hero sections, modals, splash screens, centered overlays.

**Implementation:** Flexbox with `justify-content: center` and `align-items: center`.

**Example:**

```html
<div class="center-content">
  <div class="modal">
    <h2>Confirm Action?</h2>
    <p>Are you sure?</p>
  </div>
</div>
```

**Variants:**

- `.center-content.full-height` — Extends to full viewport height

---

### `.sidebar-layout`

**Intent:** Create a sidebar + main content pattern.

**Use case:** Documentation sites, admin dashboards, two-column layouts.

**Implementation:** CSS Grid with `grid-template-columns: 250px 1fr`.

**Example:**

```html
<div class="sidebar-layout">
  <aside class="sidebar">Navigation Menu</aside>
  <main>Main Content</main>
</div>
```

**Responsive behavior:** Automatically stacks (sidebar on top) on screens below 768px.

**Variants:**

- `.sidebar-layout.reverse` — Sidebar on right instead of left

---

### `.feature-layout`

**Intent:** Alternate text and media in a side-by-side pattern.

**Use case:** Marketing sections, feature showcases, product highlights.

**Implementation:** CSS Grid with `grid-template-columns: 1fr 1fr`.

**Example:**

```html
<div class="feature-layout">
  <div class="feature-text">
    <h2>Amazing Feature</h2>
    <p>Description...</p>
  </div>
  <div class="feature-media">
    <img src="feature.png" alt="Feature" />
  </div>
</div>
```

**Responsive behavior:** Stacks to single column on screens below 1024px.

**Variants:**

- `.feature-layout.reverse` — Flips media to left, text to right

---

### `.content-focus`

**Intent:** Optimize for reading with limited width and centered content.

**Use case:** Blog posts, articles, documentation, long-form content.

**Implementation:** `max-width: 65ch` with `margin: auto` for centering.

**Example:**

```html
<article class="content-focus">
  <h1>Article Title</h1>
  <p>Long-form content with optimal reading width...</p>
</article>
```

**Key benefit:** 65 characters per line is optimal for reading comprehension.

---

## Usage Examples

### Website Navigation

```html
<nav class="split">
  <div class="navbar-brand">Company</div>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Button Action Group

```html
<div class="cluster">
  <button class="btn-primary">Save</button>
  <button class="btn-secondary">Draft</button>
  <button class="btn-secondary">Cancel</button>
</div>
```

### Documentation Layout

```html
<div class="sidebar-layout">
  <aside>
    <h3>Table of Contents</h3>
    <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#api">API Reference</a></li>
    </ul>
  </aside>
  <main>
    <h2 id="intro">Introduction</h2>
    <p>Content here...</p>
  </main>
</div>
```

### Hero with Centered Content

```html
<section class="center-content full-height">
  <div class="hero">
    <h1>Welcome to Our Product</h1>
    <p>Describe the value proposition here</p>
    <button class="btn-primary">Get Started</button>
  </div>
</section>
```

### Marketing Feature Section

```html
<section class="feature-layout">
  <div class="text">
    <h2>Fast Performance</h2>
    <p>Optimized for speed across all devices</p>
  </div>
  <div class="media">
    <img src="performance-chart.png" alt="Performance" />
  </div>
</section>

<!-- Reverse order for next feature -->
<section class="feature-layout reverse">
  <div class="text">
    <h2>Easy to Use</h2>
    <p>Simple API that developers love</p>
  </div>
  <div class="media">
    <img src="interface.png" alt="Interface" />
  </div>
</section>
```

### Blog Post

```html
<article class="content-focus">
  <h1>The Future of Web Design</h1>
  <p>By Jane Doe • March 15, 2025</p>

  <p>Long-form content optimized for reading...</p>
  <p>More paragraphs with 65 character line length...</p>
</article>
```

### Combined Layout

```html
<div class="sidebar-layout">
  <aside class="sidebar">
    <div class="cluster">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    </div>
  </aside>
  <main>
    <div class="feature-layout">
      <div>Text</div>
      <div>Media</div>
    </div>
  </main>
</div>
```

---

## Comparison: Traditional vs Intent-Based

### Website Header

**Traditional (Utility Classes):**

```html
<nav class="flex justify-between items-center gap-8 flex-wrap md:gap-4">
  <div class="font-bold text-xl">Logo</div>
  <ul class="flex gap-6 items-center md:gap-3">
    <li><a href="/" class="text-gray-600 hover:text-blue-600">Home</a></li>
    <li>
      <a href="/about" class="text-gray-600 hover:text-blue-600">About</a>
    </li>
  </ul>
</nav>
```

**Intent-Based:**

```html
<nav class="split">
  <div class="navbar-brand">Logo</div>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

---

### Card Grid

**Traditional:**

```html
<div class="grid grid-cols-3 gap-6 auto-rows-max md:grid-cols-2 sm:grid-cols-1">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

**Intent-Based:**

```html
<div class="cluster">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

---

## Benefits

1. **Readability:** Code reads like English description of the layout.
2. **Maintainability:** Semantic class names serve as self-documenting code.
3. **Accessibility:** Maintains semantic HTML structure and proper DOM order.
4. **Performance:** Pure CSS with zero JavaScript overhead.
5. **Responsive:** Built-in responsive behavior (stacking on mobile).
6. **Learnable:** Beginners don't need to memorize Flexbox/Grid properties.
7. **Consistency:** Standardized layout patterns across projects.
8. **Composability:** Utilities combine well for complex layouts.

---

## Customization

### Adjust Spacing

```css
:root {
  --spacing-md: 2rem; /* Increase default gap */
  --spacing-lg: 3rem; /* Increase large spacing */
}
```

### Change Sidebar Width

```css
.sidebar-layout {
  grid-template-columns: 300px 1fr; /* Wider sidebar */
}
```

### Modify Content Focus Width

```css
:root {
  --content-width: 80ch; /* Wider reading width */
}
```

---

## Responsive Behavior

All utilities are mobile-first and responsive:

- **`.split`** — Wraps to single column on small screens
- **`.cluster`** — Maintains wrapping behavior automatically
- **`.sidebar-layout`** — Stacks sidebar above content on screens < 768px
- **`.feature-layout`** — Stacks to single column on screens < 1024px
- **`.content-focus`** — Maintains readable width with padding on all screens

No additional media query breakpoints required in most cases.

---

## Accessibility

- **Semantic HTML:** Layout utilities don't affect heading levels or content structure.
- **DOM Order:** Content maintains proper DOM order for screen readers.
- **No Hidden Content:** All utilities use CSS layout only; no content is hidden.
- **Keyboard Navigation:** All interactive elements remain keyboard accessible.

---

## Browser Support

Intent-Based Layout Utilities use standard CSS Grid and Flexbox:

- Chrome/Edge 29+
- Firefox 52+
- Safari 10.1+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Improvements

- Add `.auto-grid` for automatic grid column balancing
- Create `.equal-height` utility for equal-height columns
- Add masonry layout utility
- Provide `.justify-between-vertical` (space-between for vertical)
- Add aspect ratio utilities
- Create animation variants (e.g., `.stagger-layout`)
- Develop Figma/design token integration
- Add print-friendly layout utilities

---

## Alignment with EaseMotion Philosophy

"Write UI like you describe it in English."

Intent-Based Layout Utilities embody this by:

1. Using semantic, descriptive class names (`.split`, `.cluster`, `.sidebar-layout`).
2. Making complex layouts accessible with simple abstractions.
3. Reducing cognitive load by hiding implementation details.
4. Maintaining semantic HTML and accessibility standards.
5. Providing predictable, composable utilities.

---

## Philosophy Behind This Approach

Traditional CSS frameworks focus on **granular control**. You specify properties, values, and breakpoints individually. This gives maximum flexibility but requires developers to think in CSS terms.

Intent-Based Layout Utilities focus on **design intent**. You describe what you want to achieve, and the utility handles the implementation. This makes layouts more intuitive and closer to how designers and non-technical stakeholders think about UI.

The goal is not to replace all CSS frameworks, but to provide an alternative approach that emphasizes clarity and intent over technical granularity.

---

Built with EaseMotion CSS philosophy. Great layouts shouldn't require deep CSS knowledge.
