# ease-dynamic-glass

A glassmorphism card component that uses **CSS Relative Color Syntax** to derive its entire colour tint — background, border, and shadow — automatically from a single CSS custom property.

---

## What does this do?

`.ease-dynamic-glass` uses the modern CSS **Relative Color Syntax** to automatically extract the individual `r`, `g`, and `b` channels out of any colour stored in `--glass-theme` and re-compose them at different alpha levels:

```css
/* background at 15 % opacity */
background: rgb(from var(--glass-theme, #ffffff) r g b / 0.15);

/* border at 40 % opacity */
border: 1px solid rgb(from var(--glass-theme, #ffffff) r g b / 0.4);

/* ambient glow at 20 % opacity */
box-shadow: 0 8px 32px 0 rgb(from var(--glass-theme, #ffffff) r g b / 0.2);
```

The `from <color>` keyword instructs the browser to parse the origin colour and expose its channels as the named keywords `r`, `g`, and `b`. Those keywords are then piped straight back into `rgb()` with a custom alpha value — all in one declaration, with zero JavaScript.

---

## How is it used?

Add the class to any element and supply `--glass-theme` as an inline style or a parent-level CSS variable:

```html
<!-- Blue card -->
<div class="ease-dynamic-glass" style="--glass-theme: #3b82f6;">
  <h2>Ocean Metrics</h2>
  <p>Real-time analytics at a glance.</p>
</div>

<!-- Pink card -->
<div class="ease-dynamic-glass" style="--glass-theme: #ec4899;">
  <h2>Design System</h2>
  <p>84 components, fully themed.</p>
</div>

<!-- Emerald card -->
<div class="ease-dynamic-glass" style="--glass-theme: #10b981;">
  <h2>Carbon Tracker</h2>
  <p>Your sustainability dashboard.</p>
</div>
```

Changing `--glass-theme` instantly re-tints **every** visual layer — background, border, and shadow — because they all derive their colour from the same origin.

You can also set the variable at a parent scope to theme entire sections of a page:

```css
.dashboard-section {
  --glass-theme: #6366f1; /* Indigo — all child cards inherit this tint */
}
```

---

## Why is it useful?

Traditional glassmorphism implementations hardcode a separate `rgba()` value for every visual layer:

```css
/* ❌ Old approach — fragile and hard to maintain */
background: rgba(59, 130, 246, 0.15);
border: 1px solid rgba(59, 130, 246, 0.4);
box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.2);
```

Changing the theme colour means hunting down and updating **every** `rgba()` call manually and recalculating the raw RGB numbers each time. For a design system with dozens of tinted components, that quickly becomes unmaintainable.

With CSS Relative Color Syntax, **one variable drives everything**:

```css
/* ✅ New approach — single source of truth */
--glass-theme: #3b82f6;
```

Benefits at a glance:

| Concern | Old approach | `ease-dynamic-glass` |
|---|---|---|
| Change theme colour | Edit every `rgba()` | Change one variable |
| Support dark / light mode | Duplicate all colour declarations | Swap `--glass-theme` |
| Runtime theming via JS | `element.style.setProperty` × N | `element.style.setProperty` × 1 |
| Readable CSS | Scattered magic numbers | Self-documenting variable |

The result is a perfectly themeable glassmorphism primitive that scales effortlessly from a single component to an entire design system with **zero redundancy**.

---

## Browser support

CSS Relative Color Syntax is supported in Chrome 119+, Safari 16.4+, Firefox 128+, and Edge 119+.  
For older browsers the component gracefully falls back to the hex default (`#ffffff`) supplied in `var(--glass-theme, #ffffff)`.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Component styles + demo page body layout |
| `demo.html` | Live demo with three differently-themed cards |
| `README.md` | This document |
