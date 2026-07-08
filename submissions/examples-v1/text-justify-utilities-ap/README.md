# EaseMotion CSS — Text Justify Utilities

This directory implements core utility classes for configuring CSS `text-justify` algorithms in EaseMotion CSS.

---

## What is Text Justify?

The `text-justify` property in CSS defines the spacing algorithm applied to text blocks when `text-align: justify` is enabled. It allows developers to specify whether spacing adjustments should occur between words, characters, or be handled automatically by the browser's default layout engine.

> [!IMPORTANT]
> The `text-justify` property has no effect unless the target element has `text-align: justify` applied.

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring text justification.

| Utility Class              | Standard Class                  | CSS Rule                         | Description                                                                 |
| :------------------------- | :------------------------------ | :------------------------------- | :-------------------------------------------------------------------------- |
| `.align-justify`           | `.text-justify`                 | `text-align: justify;`           | Core prerequisite: aligns text to both left and right margins.              |
| `.justify-auto`            | `.text-justify-auto`            | `text-justify: auto;`            | Browser default: determines word or character stretching based on language. |
| `.justify-none`            | `.text-justify-none`            | `text-justify: none;`            | Disables justification spacing. Renders left-aligned spacing.               |
| `.justify-inter-word`      | `.text-justify-inter-word`      | `text-justify: inter-word;`      | Distributes spacing exclusively between words. Best for Western spacing.    |
| `.justify-inter-character` | `.text-justify-inter-character` | `text-justify: inter-character;` | Distributes spacing between letters/characters. Best for CJK scripts.       |
| —                          | `.text-justify-word`            | combination                      | Sets `text-align: justify` + `text-justify: inter-word` in one helper.      |
| —                          | `.text-justify-character`       | combination                      | Sets `text-align: justify` + `text-justify: inter-character` in one helper. |

---

## Usage Examples

### 1. English Editorial Text (Inter-Word)

For Western, space-separated languages, use `.justify-inter-word` to ensure spaces are only added between words. This preserves the standard letter spacing (kerning) within words:

```html
<article class="newspaper-column">
  <p class="text-justify justify-inter-word">
    EaseMotion CSS provides clean and predictable utility scales. By applying
    the inter-word justification mode, narrow text columns avoid rivers of white
    space, keeping paragraphs perfectly formatted.
  </p>
</article>
```

### 2. East Asian Scripts (Inter-Character)

In languages such as Chinese, Japanese, and Korean (CJK), spaces are not typically used to separate words. Use `.justify-inter-character` to distribute spacing between characters:

```html
<div class="cjk-container text-justify justify-inter-character">
  東アジアのタイポグラフィにおいては、単語間にスペースが存在しないため、
  文字と文字の間の微細なギャップを調整して全体の行幅を揃えます。
</div>
```

### 3. Disabling Justification on Specific viewports

If you want to justify text on desktop viewports but align left without spacing modifications on mobile viewports, combine `text-justify-none` with responsive classes:

```html
<p class="text-justify justify-none md:justify-inter-word">
  This text is unjustified on small screens to prevent severe word stretching,
  and justifies cleanly on desktop viewports.
</p>
```

---

## Typographic Rules & Best Practices

1. **Avoid Rivers of White Space**: In very narrow blocks (under 300px), justifying text can create large white gaps (rivers) that disrupt readability. Avoid justification in narrow sidebars or compact grids unless using appropriate font sizing and line-height.
2. **Combine with Hyphenation**: To help the justification engine work smoothly, consider enabling hyphenation (`hyphens: auto;`) which allows words to split at line breaks rather than forcing large spaces between fewer words.
3. **Accessibility (WCAG 2.1)**: Justified text can create uneven word spacing that makes reading difficult for users with cognitive or reading difficulties (e.g., dyslexia).
   - _Recommendation_: Avoid forcing justification globally. Provide controls to reset alignment or ensure that spacing adjustments are moderate.
   - _Contrast_: Maintain high contrast ratios on justified text panels, as layout stretches can sometimes cause visual strain.

---

## Browser Support Notes

- **Google Chrome & Edge (Blink)**: Full support for standard values including `inter-word` and `inter-character` (sometimes mapped to `distribute`).
- **Mozilla Firefox (Gecko)**: Full support for W3C specifications.
- **Apple Safari (WebKit)**: WebKit handles general text alignment justification automatically, but has historically had limited support for explicit custom justification overrides like `inter-character`. The standard fallback maps back to auto-justification based on script context.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```
