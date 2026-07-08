# Text Decoration Thickness Utilities

Configure the stroke thickness and weight of underlines, overlines, and strike-throughs on text elements using standard, shorthand, and Tailwind-compatible classes.

This module makes it easy to style typographic details, build modern card borders, and design smooth transition-based link hover animations.

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Basic Underline Thickness](#basic-underline-thickness)
   - [Stylistic Combinations](#stylistic-combinations)
   - [Interactive Hover Transitions](#interactive-hover-transitions)
5. [Technical Mechanics](#technical-mechanics)
   - [Inheritance and Nested Elements](#inheritance-and-nested-elements)
   - [from-font Behavior](#from-font-behavior)
6. [Browser Compatibility](#browser-compatibility)
7. [Accessibility & WCAG Compliance](#accessibility--wcag-compliance)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the stroke width (thickness) of decorative lines applied to text.

By default, the browser decides line thickness based on font size and engine rules (`text-decoration-thickness: auto;`). These utility classes let you explicitly set the stroke width from `1px` up to `12px`, hide the stroke completely (`0px`), or align it with the font metrics metadata (`from-font`).

---

## Utility Class Reference

We provide semantic standard classes, shorthand thickness overrides, and Tailwind-like utility aliases for rapid integration.

| Class Name (Standard)                 | Shorthand Alias                  | Tailwind Alias         | Thickness Applied |
| :------------------------------------ | :------------------------------- | :--------------------- | :---------------- |
| `text-decoration-thickness-auto`      | `decoration-thickness-auto`      | `decoration-auto`      | `auto`            |
| `text-decoration-thickness-from-font` | `decoration-thickness-from-font` | `decoration-from-font` | `from-font`       |
| `text-decoration-thickness-0`         | `decoration-thickness-0`         | `decoration-0`         | `0px`             |
| `text-decoration-thickness-1`         | `decoration-thickness-1`         | `decoration-1`         | `1px`             |
| `text-decoration-thickness-2`         | `decoration-thickness-2`         | `decoration-2`         | `2px`             |
| `text-decoration-thickness-3`         | `decoration-thickness-3`         | `decoration-3`         | `3px`             |
| `text-decoration-thickness-4`         | `decoration-thickness-4`         | `decoration-4`         | `4px`             |
| `text-decoration-thickness-6`         | `decoration-thickness-6`         | `decoration-6`         | `6px`             |
| `text-decoration-thickness-8`         | `decoration-thickness-8`         | `decoration-8`         | `8px`             |
| `text-decoration-thickness-10`        | `decoration-thickness-10`        | `decoration-10`        | `10px`            |
| `text-decoration-thickness-12`        | `decoration-thickness-12`        | `decoration-12`        | `12px`            |

---

## Why is it useful?

1. **Typographic Contrast**: Default underlines can feel too thin and low-contrast on high-DPI screens or light text. Adjusting thickness ensures strokes are clearly visible.
2. **Design Freedom**: Combining thick underlines with wavy or dotted styles allows for playful warnings, interactive links, or custom headers without resorting to bottom-border hacks.
3. **Link Micro-interactions**: Smooth transitions between a thin `1px` underline and a thick `3px` underline on hover create sleek, app-like navigation links.
4. **No Custom CSS Rules**: Instead of writing separate styles or hacks like `border-bottom: 2px solid`, developers can customize decorations directly in markup.

---

## How is it used?

### Basic Underline Thickness

To apply a simple, thick `4px` underline to a header:

```html
<h2 class="underline decoration-4">Featured Heading</h2>
```

### Stylistic Combinations

To combine a wavy line style with a custom `3px` thickness and color:

```html
<p class="underline decoration-wavy decoration-3 decoration-color-rose">
  Warning: Unsaved configuration detected.
</p>
```

To create a double strike-through on pricing content:

```html
<span class="line-through decoration-double decoration-2 decoration-color-blue">
  Original Price: $99.99
</span>
```

### Interactive Hover Transitions

To create a premium link hover interaction, we define a base `decoration-1` link that transitions to `decoration-3` on hover:

```html
<!-- Pair with the interactive-link helper class for smooth transitions -->
<a class="interactive-link decoration-1 decoration-color-emerald">
  Discover new updates
</a>
```

---

## Technical Mechanics

### Inheritance and Nested Elements

Text decoration lines are not inherited like other text properties. When you apply an underline to a block-level element, the line is drawn across all text spans.

If you want to modify a child element's underline style or color independently, you must explicitly set `text-decoration-line: underline;` on the child itself:

```html
<p class="underline decoration-4">
  This is bold.
  <!-- Child will have its own thin underline -->
  <span class="underline decoration-1" style="display: inline-block;">
    This is thin.
  </span>
</p>
```

### from-font Behavior

The `from-font` value prompts the browser to look inside the active font file (like TTF/OTF OpenType profiles) for designated underline thickness dimensions.

If the font creator specified that the underline should be exactly `1.5px` thick for that font weight, the browser uses that value. If the font file lacks this metadata, the browser defaults to `auto`.

---

## Browser Compatibility

`text-decoration-thickness` is standard CSS and has universal support:

- Chrome & Chromium-based engines (Edge, Brave, Opera) since version 89.
- Firefox since version 70.
- Safari (iOS and macOS) since version 12.1.

---

## Accessibility & WCAG Compliance

- **Underline Priority**: Underlines are critical for accessibility. Color-blind users cannot always identify blue links in text blocks. Underlines provide a clear non-color layout cue.
- **Link Target Contrast**: Standard link underlines should ideally be at least `1px` or `2px` thick to remain highly legible against body backgrounds, complying with WCAG 2.2 touch-target and visual contrast rules.
- **Legibility Safeguards**: Do not make underlines too thick (e.g. `8px` or `12px`) on long, multi-line blocks of reading text, as they can collide with letters in lower rows, causing visual noise. Keep thick decorations reserved for headings, links, or alerts.

---

## Tech Stack

- **HTML**: Semantic structures.
- **CSS**: Modern layout typography rules and text decorations.
- **Zero Dependencies**: Vanilla CSS styling.

---

## Contribution Notes

- The classes have been added in an isolated folder to prevent merging conflicts.
- Utility styling is standardized to fit both custom configurations and global framework compilation.
