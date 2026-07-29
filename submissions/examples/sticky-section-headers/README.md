# CSS Sticky Section Headers

## What does it do?
Demonstrates `position: sticky` for section headers that stick
to the top while scrolling through grouped content — like a
contacts list or settings page.

## How is it used?
```html
<div class="ease-sticky-section">
  <div class="ease-sticky-header ease-sticky-header-blue">A</div>

  <div class="ease-sticky-item">
    <div class="ease-sticky-avatar">👤</div>
    <div>
      <p class="ease-sticky-item-title">Alice Johnson</p>
      <p class="ease-sticky-item-sub">alice@example.com</p>
    </div>
    <span class="ease-sticky-item-meta">2m ago</span>
  </div>
</div>
```

## Classes
- `.ease-sticky-section` — section group wrapper
- `.ease-sticky-header` — sticky header bar
- `.ease-sticky-header-blue/purple/green/orange/red` — color variants
- `.ease-sticky-item` — list row
- `.ease-sticky-avatar` — circular avatar
- `.ease-sticky-item-title` — item heading
- `.ease-sticky-item-sub` — item subtitle
- `.ease-sticky-item-meta` — right-aligned metadata

## Features
- Pure CSS `position: sticky`
- Shadow appears when header is stuck (via IntersectionObserver)
- 5 accent color variants
- Hover highlight on items
- Respects prefers-reduced-motion
- Minimal vanilla JS for stuck detection only

## Preview
Open `demo.html` directly in browser and scroll down.