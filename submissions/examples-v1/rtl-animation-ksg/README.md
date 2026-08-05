# RTL-Friendly Animation Demo

## 1. What does this do?
Demonstrates how CSS directional animations (slide-in, underline reveal, toast
notifications, staggered list entrance) automatically flip to the correct direction
based on the HTML `dir` attribute — `ltr` for Left-to-Right languages like English,
and `rtl` for Right-to-Left languages like Arabic, Hebrew, and Persian — without
modifying the framework source or writing separate animation classes.

## 2. How is it used?

Set the direction on any ancestor element using the `dir` attribute, then apply
the same animation class. The CSS `:dir()` pseudo-class (with a `[dir]` attribute
selector fallback) handles the rest automatically:

```html
<!-- Left-to-Right (default) — slides in from the left -->
<div dir="ltr">
  <div class="slide-in-directional">Hello, world</div>
</div>

<!-- Right-to-Left — slides in from the right (same class, flipped automatically) -->
<div dir="rtl">
  <div class="slide-in-directional">مرحباً بالعالم</div>
</div>
```

The three core techniques used in the demo:

### Technique A — Separate LTR / RTL keyframes

```css
/* LTR: enter from the left */
@keyframes slide-in-ltr {
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* RTL: enter from the right */
@keyframes slide-in-rtl {
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Assign via :dir() — or [dir] fallback */
:is([dir="ltr"], :dir(ltr)) .slide-in-directional {
  animation: slide-in-ltr 500ms ease both;
}
:is([dir="rtl"], :dir(rtl)) .slide-in-directional {
  animation: slide-in-rtl 500ms ease both;
}
```

### Technique B — CSS logical properties (`inset-inline-start`)

```css
/* inset-inline-start = left in LTR, right in RTL — no overrides needed */
.underline-directional::after {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 300ms ease;
}
.underline-directional:hover::after { width: 100%; }
```

### Technique C — `transform: scaleX()` with `transform-origin: inline-start`

```css
/* transform-origin respects writing direction */
.progress-directional {
  transform-origin: inline-start center; /* left in LTR, right in RTL */
  animation: progress-expand 1.2s ease both;
}
```

## 3. Why is it useful?

EaseMotion CSS's philosophy is that if you can say it in English, you should be
able to write it as a class. The same principle applies globally: if you can say
"slide in from the start of the line", that should work in Arabic just as naturally
as in English.

This demo shows that directional animations don't require two separate class sets.
A single CSS pattern using `:dir()`, logical properties (`inset-inline-*`,
`padding-inline-*`, `margin-inline-*`), and direction-aware `transform-origin`
handles both writing directions with zero duplication — fully aligned with
EaseMotion's zero-dependency, human-readable approach.
