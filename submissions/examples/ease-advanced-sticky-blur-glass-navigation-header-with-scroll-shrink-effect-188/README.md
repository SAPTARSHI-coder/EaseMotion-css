# Sticky Blur Glass Navigation Header with Scroll Shrink Effect

## What does this do?

This submission provides a responsive navigation header that uses a translucent backdrop,
neumorphic depth, and an eased compact state after the page begins scrolling.

The demonstration also includes an accessible mobile menu and updates the current navigation item
as each linked section enters the viewport.

## How is it used?

Copy `demo.html` and `style.css` into the same directory, then open `demo.html` directly in a
modern browser. The component has no server, package, font, CDN, or framework dependency.

Use the header shell and matching section anchors as follows:

```html
<header class="site-header" data-scrolled="false">
  <div class="nav-shell">
    <a class="brand" href="#home">Northline</a>
    <nav class="primary-nav" aria-label="Primary navigation">
      <a href="#routes" aria-current="page">Routes</a>
      <a href="#stories">Stories</a>
    </nav>
  </div>
</header>
```

The inline script in `demo.html` changes `data-scrolled` when `window.scrollY` passes 32 pixels.
The compact appearance is controlled by this selector:

```css
.site-header[data-scrolled="true"] .nav-shell {
  min-height: 62px;
}
```

Colors, blur strength, shadows, and the expanded or compact heights can be adjusted through the
custom properties and navigation rules near the beginning of `style.css`.

## Why is it useful?

The component keeps primary navigation available without permanently occupying a large part of the
viewport. Its state change is communicated through restrained motion, while the glass layer and
paired light and dark shadows create a distinct neumorphic finish without sacrificing contrast.

It fits EaseMotion CSS's animation-first philosophy because the visual transition follows a clear,
human-readable state: `data-scrolled="false"` for the spacious header and `data-scrolled="true"`
for the compact one.

## Accessibility and responsive behavior

- A skip link lets keyboard users bypass the fixed navigation.
- The mobile menu exposes `aria-expanded`, supports Escape, and closes after navigation.
- Current-section links use `aria-current="page"`.
- Every interactive element has a visible focus indicator.
- `prefers-reduced-motion` removes smooth scrolling and reduces transition durations.
- The layout collapses at 900, 760, and 480 pixels without changing the document order.
