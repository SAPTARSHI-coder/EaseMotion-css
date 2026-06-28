# Text Indent Utilities

Configure paragraph first-line indentation and academic hanging indent formats on text blocks using standard and shorthand classes.

This typography module contains robust cross-browser fallbacks to ensure hanging indents (commonly used in bibliographies and glossaries) render identically on all desktop and mobile browsers.

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Standard Novel / Book Indentation](#standard-novel--book-indentation)
   - [Academic Citation Bibliography](#academic-citation-bibliography)
5. [Technical Mechanics & Browser Compatibility](#technical-mechanics--browser-compatibility)
   - [The Hanging Indent Fallback Hack](#the-hanging-indent-fallback-hack)
   - [Block vs. Inline Restrictions](#block-vs-inline-restrictions)
6. [Spacing Scale Reference](#spacing-scale-reference)
7. [Accessibility & Best Practices](#accessibility--best-practices)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the amount of empty horizontal space left before the first line of text inside block-level elements.

The module defines two layout behaviors:

1. **First-Line Indentation**: Standard spacing (`indent-1` through `indent-16`) shifting only the initial words of a paragraph to the right.
2. **Hanging Indentation**: Specialized layout (`indent-hanging-2` and `indent-hanging-4`) where the first line remains flush against the left margin, but all subsequent lines are pushed right.

---

## Utility Class Reference

We provide semantic standard classes and shorthand aliases.

### 1. Standard Indentation Classes

| Class Name (Standard) | Shorthand Alias | CSS Style Applied                               | Indent equivalent (rems) | Indent equivalent (pixels) |
| :-------------------- | :-------------- | :---------------------------------------------- | :----------------------- | :------------------------- |
| `text-indent-0`       | `indent-0`      | `text-indent: 0 !important;`                    | `0rem`                   | 0px                        |
| `text-indent-1`       | `indent-1`      | `text-indent: var(--ease-space-1) !important;`  | `0.25rem`                | 4px                        |
| `text-indent-2`       | `indent-2`      | `text-indent: var(--ease-space-2) !important;`  | `0.5rem`                 | 8px                        |
| `text-indent-3`       | `indent-3`      | `text-indent: var(--ease-space-3) !important;`  | `0.75rem`                | 12px                       |
| `text-indent-4`       | `indent-4`      | `text-indent: var(--ease-space-4) !important;`  | `1rem`                   | 16px                       |
| `text-indent-5`       | `indent-5`      | `text-indent: var(--ease-space-5) !important;`  | `1.25rem`                | 20px                       |
| `text-indent-6`       | `indent-6`      | `text-indent: var(--ease-space-6) !important;`  | `1.5rem`                 | 24px                       |
| `text-indent-8`       | `indent-8`      | `text-indent: var(--ease-space-8) !important;`  | `2rem`                   | 32px                       |
| `text-indent-10`      | `indent-10`     | `text-indent: var(--ease-space-10) !important;` | `2.5rem`                 | 40px                       |
| `text-indent-12`      | `indent-12`     | `text-indent: var(--ease-space-12) !important;` | `3rem`                   | 48px                       |
| `text-indent-16`      | `indent-16`     | `text-indent: var(--ease-space-16) !important;` | `4rem`                   | 64px                       |

### 2. Hanging Indentation Classes

| Class Name (Standard)   | Shorthand Alias    | Underlined Fallback Styling                   | Layout Equivalent        |
| :---------------------- | :----------------- | :-------------------------------------------- | :----------------------- |
| `text-indent-hanging-2` | `indent-hanging-2` | `padding-left: 1.5rem; text-indent: -1.5rem;` | Hanging Indent of `24px` |
| `text-indent-hanging-4` | `indent-hanging-4` | `padding-left: 2.5rem; text-indent: -2.5rem;` | Hanging Indent of `40px` |

---

## Why is it useful?

1. **Editorial Aesthetics**: Long-form magazine columns, fictional novels, and text editorials look more structured when paragraphs begin with clean indents rather than bulky block gaps.
2. **Academic Standards**: High-school papers, legal briefs, and reference documents require strict hanging indents for bibliographies, glossaries, and lists.
3. **Typography Rhythm**: Using standardized variables aligns your paragraph indentation with other margins, boxes, and padding elements in your grid.
4. **No Custon CSS Rules**: Allows designers to apply layout styles directly in HTML without having to write separate page rules or hacks.

---

## How is it used?

### Standard Novel / Book Indentation

To indent the first line of a book-style paragraph by `16px` (1rem):

```html
<div class="novel-chapter">
  <p class="indent-4">
    It was a dark and stormy night. The waves crashed against the rocky
    shoreline...
  </p>
  <p class="indent-4">
    In the distance, a lighthouse flickered through the heavy mist, signaling...
  </p>
</div>
```

### Academic Citation Bibliography

To configure academic APA/MLA bibliography list elements where citations have hanging indents of `40px` (2.5rem):

```html
<div class="bibliography-section">
  <!-- Class indent-hanging-4 automatically handles negative text-indent and left padding -->
  <p class="indent-hanging-4">
    Panda, Adrian. (2026). "Structure and Performance of Buildless CSS
    Frameworks."
    <em>Journal of Web Architecture</em>, 12(4), 205-224.
  </p>
  <p class="indent-hanging-4">
    Sadhu, Sophia. (2026). "Typographic Layouts for Long-Form Mobile Reading."
    <em>Front-End Design Quarterly</em>, 22(1), 45-63.
  </p>
</div>
```

---

## Technical Mechanics & Browser Compatibility

### The Hanging Indent Fallback Hack

Standard CSS defines a hanging keyword parameter: `text-indent: 2rem hanging;`. However, browser support for this keyword is inconsistent.

To achieve a perfect hanging indent across Chrome, Safari, Firefox, Edge, and mobile Webview engines, these utilities rely on the padding-margin combination:

1. **Left Padding**: Pushes the entire block of text to the right by `2.5rem` (`padding-left: 2.5rem;`).
2. **Negative Indent**: Pulls ONLY the first line of the text block back to the left by exactly `2.5rem` (`text-indent: -2.5rem;`).

```css
.indent-hanging-4 {
  padding-left: 2.5rem !important;
  text-indent: -2.5rem !important;
}
```

_Result_: The first line aligns flush against the left grid line, while all trailing lines align 40px to the right.

### Block vs. Inline Restrictions

The `text-indent` property applies only to block-level elements (such as `<p>`, `<div>`, `<section>`) or inline-block components. It has no effect on pure inline spans (like `<span>`, `<strong>`, `<a>`) unless their display property is modified (e.g. using `display: inline-block`).

---

## Spacing Scale Reference

Indentation offsets reference standard rem values:

- `1` &rarr; `0.25rem` (4px)
- `2` &rarr; `0.5rem` (8px)
- `3` &rarr; `0.75rem` (12px)
- `4` &rarr; `1rem` (16px)
- `5` &rarr; `1.25rem` (20px)
- `6` &rarr; `1.5rem` (24px)
- `8` &rarr; `2rem` (32px)
- `10` &rarr; `2.5rem` (40px)
- `12` &rarr; `3rem` (48px)
- `16` &rarr; `4rem` (64px)

---

## Accessibility & Best Practices

- **Reading Order**: Hanging indents and text-indents are purely visual layout decorations. They do not alter the DOM node sequence or affect screen reader accessibility.
- **Justification**: Large text indents combined with justified paragraphs (`text-align: justify;`) can occasionally create wide, distracting gaps on mobile screens. Keep indents small on mobile.
- **Mobile Responsiveness**: If a mobile screen is very narrow (320px), a large indent like `indent-16` (64px) consumes too much horizontal space. We recommend keeping mobile indents to `indent-4` (16px) or disabling floats on narrow views.

---

## Tech Stack

- **HTML**: Semantic structures.
- **CSS**: Modern layout typography rules and text decorations.
- **Zero Dependencies**: Pure CSS styling.

---

## Contribution Notes

- The classes have been implemented in an isolated directory structure to ensure backward compatibility.
- Shorthand and semantic standard classes are provided to fit all coding styles.
