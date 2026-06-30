# Bug #7751 — Marquee Demo Modifier Class Name Mismatches

## The bug
`examples/marquee-demo.html` showcases variations of `.ease-marquee` (slow, fast, reverse, gap sizes, fade edges, pause-on-hover), but the demo markup used **non-namespaced short classes**:

```html
<div class="ease-marquee slow">           <!-- line 124 -->
<div class="ease-marquee fast">           <!-- line 136 -->
<div class="ease-marquee reverse">        <!-- line 152 -->
<div class="ease-marquee fade-edges">     <!-- line 168 -->
<div class="ease-marquee reverse slow fade-edges gap-xl">  <!-- line 186 -->
<div class="ease-marquee fast pause-on-hover">             <!-- line 202 -->
```

But `components/ease-marquee.css` namespaces every modifier under `.ease-marquee.ease-marquee-*` to avoid global class collisions:

```css
.ease-marquee.ease-marquee-slow        { --marquee-speed: 40s; }
.ease-marquee.ease-marquee-fast        { --marquee-speed: 10s; }
.ease-marquee.ease-marquee-reverse     { --marquee-direction: reverse; }
.ease-marquee.ease-marquee-gap-xl      { --marquee-gap: 5rem; }
.ease-marquee.ease-marquee-fade-edges  { mask-image: ...; }
.ease-marquee.ease-marquee-pause-on-hover { --marquee-pause-on-hover: paused; }
```

Because `slow`, `fast`, `reverse`, `fade-edges`, `gap-xl`, and `pause-on-hover` lack the `ease-marquee-` prefix, **none of these selectors ever match**. Every modifier demo silently falls back to the default 20s speed, default direction, default gap, no fade, and no pause-on-hover — exactly as described in the issue's reproduction steps.

## The fix
Added the `ease-marquee-` prefix to every modifier class, matching `components/ease-marquee.css` exactly:

| Line | Before | After |
|---|---|---|
| 124 | `ease-marquee slow` | `ease-marquee ease-marquee-slow` |
| 136 | `ease-marquee fast` | `ease-marquee ease-marquee-fast` |
| 152 | `ease-marquee reverse` | `ease-marquee ease-marquee-reverse` |
| 168 | `ease-marquee fade-edges` | `ease-marquee ease-marquee-fade-edges` |
| 186 | `ease-marquee reverse slow fade-edges gap-xl` | `ease-marquee ease-marquee-reverse ease-marquee-slow ease-marquee-fade-edges ease-marquee-gap-xl` |
| 202 | `ease-marquee fast pause-on-hover` | `ease-marquee ease-marquee-fast ease-marquee-pause-on-hover` |

Note line 168 (Fade Edges demo) had the exact same bug pattern but wasn't explicitly listed in the issue's line references — fixed for consistency since it's the same root cause.

## Files
- `demo.html` — the corrected demo (renamed from `marquee-demo.html`, content otherwise matches `examples/marquee-demo.html` with the class fixes applied)
- `style.css` — demo styling, extracted from the original inline `<style>` block
- `README.md` — this file

## How to verify
Open `demo.html` and compare the "Slow" and "Fast" marquees — they now scroll at visibly different speeds (40s vs 10s, vs the original mismatched 20s for both). The "Reverse Direction" marquee now scrolls right-to-left. The "Fade Edges" and "Combined Variants" demos now show the gradient mask. The "News Ticker" pauses on hover.

## Why it fits EaseMotion CSS
This is a one-line-per-demo fix with high impact: every "showcase" demo block for `.ease-marquee` modifiers was silently broken, making the component look like it has fewer features than it actually does. Restoring the correct class names makes the demo accurately represent the component's capabilities.
