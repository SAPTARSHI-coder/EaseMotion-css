# Orbit Diff Viewer

## What does this do?

`orbit-diff-viewer-codex` is a pure-CSS release comparison component that presents before-and-after code changes within a subtle animated orbital backdrop.

## How is it used?

Include `style.css` after EaseMotion CSS, then use the component structure below. The radio controls provide unified and split comparison modes without JavaScript.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />

<section class="orbit-diff ease-fade-in" aria-labelledby="orbit-diff-title">
  <fieldset class="orbit-diff__controls">
    <legend>Comparison view</legend>
    <input checked id="orbit-unified" name="orbit-view" type="radio" />
    <label for="orbit-unified">Unified</label>
    <input id="orbit-split" name="orbit-view" type="radio" />
    <label for="orbit-split">Split</label>
  </fieldset>

  <div class="orbit-diff__comparison">
    <section class="orbit-diff__panel orbit-diff__panel--before">...</section>
    <section class="orbit-diff__panel orbit-diff__panel--after">...</section>
  </div>
</section>
```

## Why is it useful?

The component packages a portfolio-style diff presentation into an accessible, responsive building block. It uses EaseMotion's `ease-fade-in` utility and motion variables while remaining dependency-free and usable by opening `demo.html` directly in a browser.

## Accessibility and responsiveness

- Native radio inputs make the display switch keyboard-operable and announce its state to assistive technology.
- Clear labels, sufficient contrast, and semantic regions describe the before-and-after content.
- The comparison collapses to a single column on narrow screens.
- `prefers-reduced-motion` disables the orbital and transition effects.
