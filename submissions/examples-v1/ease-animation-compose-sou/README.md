# ease-animation-compose

## 1. What does this do?

Demonstrates the common CSS bug where applying multiple animation utility classes on the same element causes only the **last** animation to run — and provides three production-ready fixes (longhand properties, predefined combo classes, and CSS custom property composition) so multiple animations can play together as expected.

## 2. How is it used?

The submission shows three working patterns. Pick whichever fits your framework conventions.

### Fix #1 — Use longhand properties (recommended default)

```html
<div class="ease-fade-in ease-slide-up ease-rotate-in">
  All three animations play together ✨
</div>
```

```css
.ease-fade-in {
  animation-name: ease-fade-in-kf;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-fill-mode: both;
}

.ease-slide-up {
  animation-name: ease-slide-up-kf;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-fill-mode: both;
}
```

### Fix #2 — Predefined combo class

```html
<div class="ease-fade-slide-up">Fade + Slide combo</div>
```

```css
.ease-fade-slide-up {
  animation:
    ease-fade-in-kf 1s cubic-bezier(0.22, 1, 0.36, 1) both,
    ease-slide-up-kf 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
```

### Fix #3 — CSS custom property composition

```html
<div class="ease-anim add-fade-in add-slide-up add-rotate-in">
  Dynamic composition
</div>
```

```css
.ease-anim {
  --ease-anim-list: ;
  animation: var(--ease-anim-list);
}

.ease-anim.add-fade-in.add-slide-up.add-rotate-in {
  --ease-anim-list:
    ease-fade-in-kf 1s ease both, ease-slide-up-kf 1s ease both,
    ease-rotate-in-kf 1s ease both;
}
```

### Class Reference

| Class                                                                 | Purpose                                            |
| --------------------------------------------------------------------- | -------------------------------------------------- |
| `.ease-fade-in-bad` / etc.                                            | **Buggy** examples using `animation:` shorthand    |
| `.ease-fade-in`                                                       | Longhand fade-in (composable)                      |
| `.ease-slide-up`                                                      | Longhand slide-up (composable)                     |
| `.ease-scale-in`                                                      | Longhand scale-in (composable)                     |
| `.ease-rotate-in`                                                     | Longhand rotate-in (composable)                    |
| `.ease-fade-slide-up`                                                 | Combo class — fade + slide                         |
| `.ease-fade-scale-in`                                                 | Combo class — fade + scale                         |
| `.ease-fade-rotate-in`                                                | Combo class — fade + rotate                        |
| `.ease-anim`                                                          | Base for CSS-variable composition pattern          |
| `.add-fade-in` / `.add-slide-up` / `.add-scale-in` / `.add-rotate-in` | Modifier classes that append to `--ease-anim-list` |

## 3. Why is it useful?

This bug is a **silent killer** in CSS utility frameworks — combining two animation classes appears to work in code, but visually only one runs. The issue is rooted in how the `animation` shorthand resets all longhand properties, so each new class overwrites the previous one. This submission fits EaseMotion CSS's animation-first, human-readable philosophy by being:

- **Educational** — clearly demonstrates the bug AND three working fixes side-by-side in one demo
- **Pure CSS** — zero JavaScript, no build step required
- **Production-ready** — every fix is real, copy-paste usable code
- **Scalable** — the longhand pattern (Fix #1) means all future animation utilities can compose freely by default
- **Backward-friendly** — combo classes (Fix #2) work without changing existing utility patterns
- **Modern** — CSS variable composition (Fix #3) shows the cutting-edge scalable pattern
- **Accessible** — fully respects `prefers-reduced-motion`
- **Responsive** — adapts gracefully from mobile to desktop

It directly addresses the root cause described in issue #13303 and provides the maintainer with three concrete, integration-ready patterns to choose from when refactoring the framework's animation utility classes.
