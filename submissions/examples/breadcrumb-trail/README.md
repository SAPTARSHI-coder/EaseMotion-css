# Animated Breadcrumb Navigation

A pure-CSS animated breadcrumb trail for showing page hierarchy. Crumbs fade-slide in on mount (staggered), hover underlines slide in from the left, the active crumb pulses softly to anchor "you are here", and separators scale in with each item. Zero JavaScript, zero dependencies.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | Crumbs fade + slide in left-to-right with staggered delay |
| Hover | Underline slides in from left via `scaleX(0 → 1)` |
| Active | Purple pill with soft repeating `box-shadow` pulse |
| Separator | Fades in with its crumb item |

---

## Files

```
submissions/examples/breadcrumb-trail/
├── demo.html    ← six live variants
├── style.css    ← all animation classes
└── README.md
```

---

## Variants

| Variant | Description |
|---------|-------------|
| Basic slash | Default `/` separator |
| Chevron SVG | Inline SVG arrow separator |
| Icon + text | Emoji/icon before each crumb label |
| Truncated | Middle crumbs collapsed to `···` ellipsis |
| Flat | No card chrome — transparent background |
| Small | `.ease-breadcrumb-sm` size modifier |

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-breadcrumb` | `<ol>` container; card chrome (bg, border, shadow) |
| `ease-breadcrumb-flat` | Remove card chrome — transparent variant |
| `ease-breadcrumb-sm` | Small text size (0.75rem) |
| `ease-breadcrumb-lg` | Large text size (0.9375rem) |
| `ease-bread-item` | `<li>` crumb item; staggered fade-slide entrance |
| `ease-bread-link` | `<a>` crumb link; hover underline slide + colour |
| `ease-bread-icon` | Icon inside a link; colour transitions on hover |
| `ease-bread-separator` | Separator between crumbs (text or SVG) |
| `ease-bread-active` | Current page crumb; purple pill + pulse animation |
| `ease-bread-ellipsis` | Collapsed middle crumbs `···` placeholder |

---

## Usage

### Basic breadcrumb

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb">

    <li class="ease-bread-item">
      <a class="ease-bread-link" href="/">Home</a>
      <span class="ease-bread-separator" aria-hidden="true">/</span>
    </li>

    <li class="ease-bread-item">
      <a class="ease-bread-link" href="/components">Components</a>
      <span class="ease-bread-separator" aria-hidden="true">/</span>
    </li>

    <li class="ease-bread-item" aria-current="page">
      <span class="ease-bread-active">Breadcrumb</span>
    </li>

  </ol>
</nav>
```

### With icons

```html
<li class="ease-bread-item">
  <a class="ease-bread-link" href="/">
    <span class="ease-bread-icon" aria-hidden="true">🏠</span>
    Home
  </a>
  <span class="ease-bread-separator" aria-hidden="true">›</span>
</li>
```

### Chevron SVG separator

```html
<span class="ease-bread-separator" aria-hidden="true">
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 2 8 6 4 10"/>
  </svg>
</span>
```

### Truncated path

```html
<li class="ease-bread-item" aria-label="Hidden path segments">
  <span class="ease-bread-ellipsis" title="Category > Sub-category > Section">···</span>
  <span class="ease-bread-separator" aria-hidden="true">›</span>
</li>
```

---

## Animation Details

### Crumb entrance — `ease-bread-appear`
```css
@keyframes ease-bread-appear {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* Each nth-child gets +60ms delay for the stagger */
```

### Hover underline — left-to-right slide
```css
.ease-bread-link::after {
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 200ms ease;
}
.ease-bread-link:hover::after {
  transform: scaleX(1);
}
```

### Active crumb pulse
```css
@keyframes ease-bread-pulse {
  0%, 100% { box-shadow: 0 0 0 0   var(--ease-bread-active-border); }
  50%       { box-shadow: 0 0 0 3px transparent; }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-bread-text-hover:    #6366f1;
  --ease-bread-underline:     #6366f1;
  --ease-bread-active-bg:     #ede9fe;
  --ease-bread-active-border: #a78bfa;
  --ease-bread-active-text:   #5b21b6;
}
```

---

## Accessibility

- `<nav>` with `aria-label` wraps the `<ol>`
- `aria-current="page"` on the active item
- `aria-hidden="true"` on all separators and decorative icons
- `aria-label` on the ellipsis item describes hidden path segments
- `focus-visible` ring on all links
- `prefers-reduced-motion` disables all animations; crumbs are fully visible immediately

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses `transform`, `opacity`, `@keyframes`, and CSS custom properties.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#20328](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20328)