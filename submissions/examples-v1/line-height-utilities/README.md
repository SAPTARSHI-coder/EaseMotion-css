# Spacing: Line Height Utilities

Logical CSS utilities controlling vertical text leading for improved typography baseline rhythm.

## What does this do?

It implements standard line-height utility classes (`.lh-none`, `.lh-tight`, `.lh-normal`, `.lh-relaxed`, and `.lh-loose`) to govern baseline spacing across text components.

## How is it used?

Add any `.lh-*` class directly to headings, text, or parent copy containers:

```html
<p class="lh-relaxed">This paragraph has relaxed line leading for articles.</p>
```

## Why is it useful?

It removes standard browser-specific font leads, ensuring developer teams can enforce exact baseline grid proportions directly in HTML. This aligns with EaseMotion CSS's focus on lightweight design control.

---

## Overview

Line height controls the vertical space between lines of text. Enforcing proportional line heights ensures high-quality typography layouts regardless of screen size or default font selections.

## Utility Table

| Class         | CSS Rules Applied    | Value  | Recommended Use Cases                                    |
| :------------ | :------------------- | :----- | :------------------------------------------------------- |
| `.lh-none`    | `line-height: 1;`    | `1`    | Single-line buttons, compact headings, and icon labels.  |
| `.lh-tight`   | `line-height: 1.25;` | `1.25` | Multi-line headings, subtitles, blockquotes, and alerts. |
| `.lh-normal`  | `line-height: 1.5;`  | `1.5`  | Standard body text copies, text summaries, and forms.    |
| `.lh-relaxed` | `line-height: 1.75;` | `1.75` | Articles, blogs, instructions, and descriptions.         |
| `.lh-loose`   | `line-height: 2;`    | `2`    | Large decorative callouts and double-spaced baselines.   |

## Usage Examples

### 1. Headline (Tight) & Description (Relaxed)

```html
<h1 class="lh-none">Breaking News Headline</h1>
<p class="lh-relaxed">
  The article leading requires relaxed space to ensure maximum legibility for
  long reading blocks.
</p>
```

### 2. Dense UI Cards (Tight)

```html
<div class="notification-card">
  <h4 class="lh-none">Task Completed</h4>
  <p class="lh-tight">
    Your recent task build finished successfully with zero errors.
  </p>
</div>
```

## Why Line-Height Matters

If text lines are too close together, characters overlap, making line changes difficult for the eyes. Conversely, excessive line height causes text lines to look disconnected. Proportional, standard utility leading classes eliminate these issues.

## Accessibility Considerations

- **WCAG 2.1 AAA Compliance:** For primary reading copies, line height should be at least **1.5 times** the font size (which maps to `.lh-normal` and `.lh-relaxed`).
- **Proportional Scaling:** Avoid setting hardcoded pixel values for line heights; use unitless values (as used in these utilities) to allow line height to scale relative to custom font sizes.

## Browser Support Notes

Line-height utility properties are part of CSS Level 1 and have universal support across all legacy and modern browsers.

## Common Use Cases

- Form input label lines.
- Dashboard info widgets and cards.
- Blog articles and long-form literature.
- Modal text descriptions and notifications.
