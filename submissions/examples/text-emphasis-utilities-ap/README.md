# Text Emphasis Utilities

Configure repeating accent marks (dots, circles, triangles, sesames, and custom characters/emojis) over or under inline text runs using standard and shorthand CSS classes.

This typography module contains fallback configurations for WebKit and standard rendering engines, allowing developers to emphasize words cleanly without background spans or bold font overrides.

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Standard Circle Emphasis](#standard-circle-emphasis)
   - [Hollow Triangle Emphasis](#hollow-triangle-emphasis)
   - [Custom Emoji Emphasis](#custom-emoji-emphasis)
5. [Technical Mechanics](#technical-mechanics)
   - [Line-Height and Collisions](#line-height-and-collisions)
   - [Prefix and Cross-Browser Fallbacks](#prefix-and-cross-browser-fallbacks)
   - [East Asian Typography Roots](#east-asian-typography-roots)
6. [Positioning Rules](#positioning-rules)
7. [Accessibility & Best Practices](#accessibility--best-practices)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Apply decorative emphasis marks directly adjacent to inline text.

Unlike underlines or highlights, emphasis marks (small icons, shapes, or emojis) repeat above or below every single letter/character in the styled text block (except spaces and punctuation). This provides a native typographic accent method derived from East Asian print layout traditions.

The module provides full-length semantic class names and shorthand aliases for:

- **Filled Shapes**: Solid circles, dots, triangles, and sesames.
- **Hollow Shapes**: Outline-only (open) circles, dots, triangles, and sesames.
- **Custom Strings**: repeating emojis (🔥, 💀) or symbols (★, ♥, ✔).
- **Positional Layouts**: Aligning marks above (`over`) or below (`under`) text lines.

---

## Utility Class Reference

We provide semantic standard classes and shorthand aliases.

### 1. Shape Style Classes

| Class Name (Standard)              | Shorthand Alias               | CSS Style Applied                            | Shape Result               |
| :--------------------------------- | :---------------------------- | :------------------------------------------- | :------------------------- |
| `text-emphasis-none`               | `emphasis-none`               | `text-emphasis-style: none;`                 | No marks (Default).        |
| `text-emphasis-dot`                | `emphasis-dot`                | `text-emphasis-style: filled dot;`           | Solid small dots.          |
| `text-emphasis-circle`             | `emphasis-circle`             | `text-emphasis-style: filled circle;`        | Solid large circles.       |
| `text-emphasis-double-circle`      | `emphasis-double-circle`      | `text-emphasis-style: filled double-circle;` | Solid concentric circles.  |
| `text-emphasis-triangle`           | `emphasis-triangle`           | `text-emphasis-style: filled triangle;`      | Solid small triangles.     |
| `text-emphasis-sesame`             | `emphasis-sesame`             | `text-emphasis-style: filled sesame;`        | Solid diagonal dashes.     |
| `text-emphasis-open-dot`           | `emphasis-open-dot`           | `text-emphasis-style: open dot;`             | Hollow small dots.         |
| `text-emphasis-open-circle`        | `emphasis-open-circle`        | `text-emphasis-style: open circle;`          | Hollow large circles.      |
| `text-emphasis-open-double-circle` | `emphasis-open-double-circle` | `text-emphasis-style: open double-circle;`   | Hollow concentric circles. |
| `text-emphasis-open-triangle`      | `emphasis-open-triangle`      | `text-emphasis-style: open triangle;`        | Hollow small triangles.    |
| `text-emphasis-open-sesame`        | `emphasis-open-sesame`        | `text-emphasis-style: open sesame;`          | Hollow diagonal dashes.    |

### 2. Custom Symbol Classes

| Class Name (Standard) | Shorthand Alias  | CSS Style Applied            | Symbol Result          |
| :-------------------- | :--------------- | :--------------------------- | :--------------------- |
| `text-emphasis-star`  | `emphasis-star`  | `text-emphasis-style: '★';`  | Repeating stars.       |
| `text-emphasis-heart` | `emphasis-heart` | `text-emphasis-style: '♥';`  | Repeating hearts.      |
| `text-emphasis-check` | `emphasis-check` | `text-emphasis-style: '✔';`  | Repeating check marks. |
| `text-emphasis-fire`  | `emphasis-fire`  | `text-emphasis-style: '🔥';` | Repeating fire emojis. |

### 3. Position Classes

| Class Name (Standard)          | Shorthand Alias           | CSS Position Applied                   |
| :----------------------------- | :------------------------ | :------------------------------------- |
| `text-emphasis-position-over`  | `emphasis-position-over`  | `text-emphasis-position: over right;`  |
| `text-emphasis-position-under` | `emphasis-position-under` | `text-emphasis-position: under right;` |

---

## Why is it useful?

1. **Typographic Polish**: Emphasis marks offer a neat alternative to traditional underlines or background highlight blocks, creating a clean editorial layout.
2. **Accented Copy**: Highlighting key keywords inside a long-form article using circles or dots keeps readers engaged with crucial metrics.
3. **No Markup Bloat**: Adding emphasis marks traditionally required wrapping every single letter in a `<span>` tag. CSS text-emphasis performs this natively, keeping DOM nodes clean.
4. **Cross-Browser Standard**: Combines standard properties with WebKit vendor-prefixes to ensure unified layouts on Chrome, Safari, and Firefox.

---

## How is it used?

### Standard Circle Emphasis

To add solid circles above key words in a paragraph (uses pink color accent):

```html
<p style="line-height: 2.2;">
  We must prioritize
  <span class="emphasis-circle emphasis-color-pink">performance metrics</span>
  in the next build.
</p>
```

### Hollow Triangle Emphasis

To place hollow triangles under words (uses indigo color accent):

```html
<p style="line-height: 2.2;">
  The transaction database logged a
  <span
    class="emphasis-open-triangle emphasis-position-under emphasis-color-indigo"
    >success event</span
  >.
</p>
```

### Custom Emoji Emphasis

To draw repeating fire emojis above a critical warning span:

```html
<p style="line-height: 2.2;">
  Warning: <span class="emphasis-fire">Critical memory leak</span> detected in
  main cluster.
</p>
```

---

## Technical Mechanics

### Line-Height and Collisions

Because emphasis marks are drawn outside the standard bounding box of inline text, they require extra space. If your paragraph has a normal line spacing (like `line-height: 1.4;`), emphasis marks will overlap with letters on the line above:

```css
/* Recommended container style */
.emphasis-block {
  line-height: 2.2 !important;
}
```

Setting `line-height` to at least `2.0` ensures the spacing has enough breathing room for symbols to render without collision.

### Prefix and Cross-Browser Fallbacks

Modern browsers support `text-emphasis`, but WebKit engines (Safari, Chrome, Edge, Brave) historically required vendor prefixes. These utilities include fallbacks for seamless presentation:

```css
.emphasis-dot {
  -webkit-text-emphasis-style: filled dot !important;
  text-emphasis-style: filled dot !important;
}
```

### East Asian Typography Roots

This property was originally created to support Japanese (_kentou_ / emphasis dots) and Chinese (_bofu_) typographic rules. The browser handles character boundaries natively, drawing the marks correctly above each letter while ignoring spacing and punctuation marks.

---

## Positioning Rules

In horizontal layouts, the emphasis marks default to `over right` (above the text). In vertical writing modes (common in Japanese/Chinese), the position aligns to the `right` side of the vertical text column.

- Use `emphasis-position-over` to position marks above text lines.
- Use `emphasis-position-under` to position marks below text lines (ideal when combining with overlines).

---

## Accessibility & Best Practices

- **Reading Order**: Emphasis marks do not affect screen readers. Text content remains fully accessible as standard text strings.
- **Contrast Compliance**: Sizing emphasis marks is managed by the browser relative to font size. Ensure you use high-contrast color classes (like `emphasis-color-pink` or `emphasis-color-emerald`) to guarantee visibility.
- **Usage Limits**: Refrain from applying emphasis marks to massive, multi-paragraph text blocks. Reserve them for single words, key metrics, or warning spans, as excessive repeating icons can cause visual fatigue.

---

## Tech Stack

- **HTML**: Semantic text nodes.
- **CSS**: CSS Text Decoration Module Level 3, vendor-prefixed emphasis styling.
- **Zero Dependencies**: Vanilla buildless CSS.

---

## Contribution Notes

- The classes have been implemented in an isolated directory structure to prevent global compilation regressions.
- Shorthand and semantic standard classes are provided to fit all coding styles.
