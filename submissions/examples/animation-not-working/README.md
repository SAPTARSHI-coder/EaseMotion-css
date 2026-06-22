# "My Animation Isn't Working" — Troubleshooting Flowchart

## What does this add?

A decision-tree style guide for debugging the most common reasons a CSS animation or transition silently doesn't run, as an interactive clickable flowchart (plus the same tree written out below for quick reference / search engines).

## How is it used?

Open `demo.html` and answer **Yes/No** to each question. Each path ends on the most likely cause and fix for that answer combination, then lets you restart.

## Why is it useful?

This is the exact sequence of questions a maintainer ends up asking in almost every "my animation isn't working" GitHub issue. Putting it in front of users *before* they file an issue should cut down on repeated, easily self-diagnosable reports.

---

## The Decision Tree

```
1. Is the class spelled correctly?
   ├─ No  → Fix the typo. Class names are case-sensitive and must match
   │        exactly between your HTML `class="..."` and your CSS selector.
   └─ Yes → continue

2. Is the CSS file actually loaded?
   ├─ No  → Open DevTools → Network tab, confirm the stylesheet returns
   │        200 (not 404). Check your <link> path and build output folder.
   └─ Yes → continue

3. Is another style overriding it?
   ├─ Yes → Open DevTools → Elements, look for a strikethrough on your
   │        animation/transition rule. A more specific selector or
   │        !important elsewhere is winning — increase specificity or
   │        reorder your stylesheets.
   └─ No  → continue

4. Is the element display:none initially?
   ├─ Yes → Animations never run on display:none elements — they must
   │        already be in the render tree. Use visibility:hidden +
   │        opacity:0 instead, or add the animating class only after
   │        the element becomes visible.
   └─ No  → Dig deeper. Common remaining causes:
            - Typo in animation-name vs the @keyframes name
            - animation-duration: 0s (or unset, defaulting to 0s)
            - Animating a property that can't actually transition
              (e.g. height: auto, or a property the browser can't
              interpolate)
            - The class is added before the browser has painted the
              initial state, so there's no visual "before" to animate
              from (fix: trigger on the next animation frame, or via
              a small timeout)
```

## Quick Checklist

- [ ] Class name matches exactly in HTML and CSS (check casing/typos)
- [ ] Stylesheet returns 200 in the Network tab, not 404
- [ ] No competing rule with higher specificity or `!important`
- [ ] Element isn't `display:none` when the animation should start
- [ ] `animation-name` matches the `@keyframes` name exactly
- [ ] `animation-duration` (or `transition-duration`) is set and non-zero
- [ ] The animated property is one the browser can actually interpolate

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and click through Yes/No to find your issue, or just read the decision tree above directly.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

Step transitions respect `prefers-reduced-motion: reduce` — content still switches instantly, just without the slide/fade animation.
