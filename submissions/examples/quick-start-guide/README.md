# Quick Start Guide

## What does this do?

Provides a proper Quick Start guide that takes developers from CDN link to first animation in under 2 minutes. Designed to be added to both `docs/index.html` and the README.

## How is it used?

The guide follows three steps:

1. **Step 1: Add the CDN link** (1 line of HTML)
2. **Step 2: Add a class to any element** (5 seconds)
3. **Step 3: Common patterns** (hover, entrance, timing)

### Step 1 — CDN Link

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.css" />
```

### Step 2 — Add a Class

```html
<h1 class="ease-fade-in">Hello, world!</h1>
```

### Step 3 — Common Patterns

```html
<!-- Entrance animation -->
<div class="ease-slide-up">I slide up on load</div>

<!-- Hover effect -->
<button class="ease-hover-grow">I grow on hover</button>

<!-- Staggered timing -->
<p class="ease-fade-in ease-delay-100">First</p>
<p class="ease-fade-in ease-delay-200">Second</p>
<p class="ease-fade-in ease-delay-300">Third</p>

<!-- Combine layout + animation -->
<section class="ease-center ease-padding-8">
  <h1 class="ease-slide-up">Build faster.</h1>
  <button class="ease-btn ease-btn-primary ease-hover-grow ease-delay-200">
    Get Started →
  </button>
</section>
```

## Why is it useful?

- Currently missing from the docs — blocking adoption (reported by @richabishthps-ship-it)
- New developers need a clear, fast path from zero to working animation
- Reduces the barrier to entry for the framework
- Aligns with EaseMotion CSS's "link one file and start building" philosophy
