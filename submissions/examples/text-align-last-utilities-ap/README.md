# Text Align Last Utilities

Configure the alignment of the final line in text blocks, descriptions, and signature panels using standard and shorthand utility classes.

This module makes it easy to control paragraph layouts, especially when dealing with fully justified text blocks where the last line needs custom alignment (centered, right-aligned, or justified).

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Centered Summary Block](#centered-summary-block)
   - [Solid Justified Blocks](#solid-justified-blocks)
   - [Right-Aligned Signatures](#right-aligned-signatures)
5. [Technical Mechanics](#technical-mechanics)
   - [Forced Line Breaks](#forced-line-breaks)
   - [Interaction with text-align](#interaction-with-text-align)
6. [Browser Compatibility](#browser-compatibility)
7. [Accessibility (a11y) & Readability](#accessibility-a11y--readability)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the alignment of the final line in a block of text immediately before a forced line break (like a `<br>` tag) or the end of the container.

In CSS, paragraph alignment is controlled via `text-align`. However, when paragraphs are fully justified, the final line is automatically aligned to the start/left to prevent short sentences from stretching out awkwardly.

The `text-align-last` utilities let developers override this default behavior to force custom layouts:

1. **Center**: Centers the final words. Great for abstract summaries or blockquotes.
2. **Justify**: Stretches the final words to touch both margins. Creates a solid rectangular layout.
3. **Right/End**: Aligns the final words to the right. Excellent for signature stamp elements.
4. **Left/Start**: Keeps the final words left-aligned (the standard presentation).

---

## Utility Class Reference

We provide both full-length semantic classes and shorthand aliases for rapid coding.

| Class Name (Standard)     | Shorthand Alias     | CSS Rule Applied                       | Alignment Result                      |
| :------------------------ | :------------------ | :------------------------------------- | :------------------------------------ |
| `text-align-last-auto`    | `text-last-auto`    | `text-align-last: auto !important;`    | Follows standard paragraph alignment. |
| `text-align-last-center`  | `text-last-center`  | `text-align-last: center !important;`  | Centers the final line.               |
| `text-align-last-justify` | `text-last-justify` | `text-align-last: justify !important;` | Spreads final line across full width. |
| `text-align-last-right`   | `text-last-right`   | `text-align-last: right !important;`   | Aligns final line to the right.       |
| `text-align-last-left`    | `text-last-left`    | `text-align-last: left !important;`    | Aligns final line to the left.        |
| `text-align-last-start`   | `text-last-start`   | `text-align-last: start !important;`   | Aligns final line to writing start.   |
| `text-align-last-end`     | `text-last-end`     | `text-align-last: end !important;`     | Aligns final line to writing end.     |

---

## Why is it useful?

1. **Typographic Elegance**: Centering the last line of a summary block or blockquote adds a neat, balanced symmetry to landing page elements.
2. **Solid Layout Blocks**: Graphic designers often prefer text to look like a solid grid block. Justifying the last line achieves this clean rectangular profile.
3. **Signature Separation**: In reports, testimonials, or letters, aligning the final line to the right creates a natural visual break before the author's signature.
4. **No Custom Styles**: Instead of writing complex nested CSS rules, developers can style paragraphs directly in HTML using utility classes.

---

## How is it used?

### Centered Summary Block

To justify a summary paragraph and center its last line for balanced layout symmetry:

```html
<p class="text-last-center" style="text-align: justify;">
  This paragraph has a fully justified body, but its final line centers
  perfectly, offering a balanced and polished visual end to the summary block.
</p>
```

### Solid Justified Blocks

To force a paragraph to remain a perfect, solid rectangular block (commonly used in editorial print designs):

```html
<p class="text-last-justify" style="text-align: justify;">
  This paragraph maintains a solid shape from start to finish. The last line
  stretches to fill the container margins, creating a neat block profile.
</p>
```

### Right-Aligned Signatures

To align the final line of a quote or review paragraph to the right:

```html
<p class="text-last-right" style="text-align: justify;">
  "EaseMotion CSS has completely restructured how we handle fast-paced
  prototyping. The utilities are lightweight and extremely easy to learn."
  <br />
  — Pratyush Panda, Lead Dev
</p>
```

---

## Technical Mechanics

### Forced Line Breaks

The `text-align-last` property doesn't just affect the absolute end of a container. It also applies to any line right before a forced line break (such as a `<br>` tag):

```html
<p class="text-last-center" style="text-align: justify;">
  This text line will have its last words centered. <br />
  And this second block will also have its last line centered.
</p>
```

_Result_: Both lines preceding the `<br>` and the end of the element will follow the centered last-line alignment.

### Interaction with text-align

`text-align-last` overrides the block's `text-align` setting **only for the final line**. All other lines in the block are styled by the base `text-align` property:

- If `text-align` is `left` and `text-align-last` is `center`, all lines are left-aligned except the last line, which is centered.
- If `text-align` is `justify` and `text-align-last` is `auto`, the browser justification rules apply, but the last line defaults to left-aligned.

---

## Browser Compatibility

The `text-align-last` property has wide support in all modern rendering engines:

- Chrome & Chromium (Edge, Opera, Brave) since version 47.
- Firefox since version 12.
- Safari since version 16.
- Mobile engines (iOS Safari, Android Webview, Chrome for Android) support this natively.

---

## Accessibility (a11y) & Readability

- **Spacing Gaps**: When using `text-last-justify`, if the final line contains only two or three words, the browser will introduce massive white spaces between those words to stretch them across the container. This can impair readability, especially for dyslexic readers. Use this class only on containers with predictable, longer line endings.
- **Reading Flow**: Maintain standard reading alignments (left-aligned or start-aligned last lines) for long-form reading content. Reserve centered or right-aligned last lines for short, featured callouts, quotes, or decorative components.

---

## Tech Stack

- **HTML**: Semantic structures.
- **CSS**: Modern layout typography rules and align overrides.
- **Zero Dependencies**: Pure buildless CSS implementation.

---

## Contribution Notes

- The classes have been implemented in an isolated directory structure to ensure backward compatibility.
- Class shorthand aliases are provided to fit all developer syntax habits.
