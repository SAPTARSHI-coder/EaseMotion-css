# Unicode Bidi Utilities

An overview and guide for using CSS `unicode-bidi` and `direction` utility classes to manage bidirectional text flow.

## Core Questions

### What does this do?

These utility classes set the text writing directionality (`direction`) and customize how mixed left-to-right (LTR) and right-to-left (RTL) text blocks calculate their layout flow (`unicode-bidi`).

### How is it used?

Apply the utility classes directly to parent text blocks or inline spans containing multi-lingual words:

```html
<p class="dir-rtl ub-plaintext">تفاح (Arabic Apple text)</p>
```

### Why is it useful?

When localizing websites, mixing LTR strings (like English or URLs) and RTL strings (like Arabic or Hebrew) often causes numbers and punctuation marks to shift positions erratically. Isolating or overriding bidi logic resolves these rendering layout issues cleanly inside the HTML markup.

---

## Utility Classes

### 1. Unicode Bidi Utilities

| Class                  | CSS Declaration                   | Description / Use Case                                                            |
| :--------------------- | :-------------------------------- | :-------------------------------------------------------------------------------- |
| `.ub-normal`           | `unicode-bidi: normal;`           | Relies on the default browser rendering engine rules (Default).                   |
| `.ub-embed`            | `unicode-bidi: embed;`            | Opens an inline scope for bidirectional calculation matching container direction. |
| `.ub-bidi-override`    | `unicode-bidi: bidi-override;`    | Forces character order to match direction, reversing LTR letter displays.         |
| `.ub-isolate`          | `unicode-bidi: isolate;`          | Prevents the inline element's internal text direction from bleeding outwards.     |
| `.ub-isolate-override` | `unicode-bidi: isolate-override;` | Combines isolation with bidi-override rules locally.                              |
| `.ub-plaintext`        | `unicode-bidi: plaintext;`        | Aligns text lines based purely on the first strong character's direction.         |

### 2. Base Direction Helpers

| Class      | CSS Declaration   | Description                                                 |
| :--------- | :---------------- | :---------------------------------------------------------- |
| `.dir-ltr` | `direction: ltr;` | Sets writing direction to Left-To-Right (English, Western). |
| `.dir-rtl` | `direction: rtl;` | Sets writing direction to Right-To-Left (Arabic, Hebrew).   |

---

## Difference Between `direction` and `unicode-bidi`

- **`direction`**: Establishes the general layout starting edge. For LTR, text aligns to the left and sentences flow to the right. For RTL, text aligns to the right and sentences flow to the left.
- **`unicode-bidi`**: Decides whether the browser should open a nested bidirectional context. Applying `direction: rtl` alone on an inline `<span>` will **not** change its writing direction unless `unicode-bidi` is configured to `embed` or `override`.

---

## Usage Examples

### 1. Reversing English Text Display

```html
<div class="dir-rtl ub-bidi-override">Reverse This Line</div>
```

### 2. Bidirectional User Inputs

Ensure that input search bars containing mixed language searches (e.g. searching "Apple تفاح") do not scramble punctuation:

```html
<input type="text" class="dir-ltr ub-isolate" placeholder="Search..." />
```

### 3. Dynamic Multi-language Feed

Display a localized content feed where some posts start in English and others start in Hebrew, aligning each post correctly automatically:

```html
<div class="feed-post ub-plaintext">שלום (Aligns right)</div>
<div class="feed-post ub-plaintext">Hello (Aligns left)</div>
```

---

## Accessibility Considerations

- **Screen Reader Compatibility**: Using `bidi-override` to visually reverse text will confuse screen readers, as they may read the characters backwards. Avoid using override classes for screen-reader-critical text.
- **Form Controls**: Use `isolate` on form inputs when localized text entry is expected, to prevent cursor positioning bugs.

---

## Common Use Cases

1. **Multi-lingual Feeds**: Standardizing paragraph alignments dynamically in localized social networks.
2. **Text Reversals**: Creating simple visual mirror designs without text duplicating.
3. **Numbers in RTL Sentences**: Keeping telephone numbers or quantities from getting scrambled inside RTL layouts.

---

## Browser Support Notes

CSS `unicode-bidi` and `direction` have global browser support:

- Chrome 2+
- Edge 12+
- Firefox 1+
- Safari 1+
- iOS Safari & Android Browser (All versions)

_Note: The newer values `isolate` and `plaintext` are fully supported by all modern layouts, falling back gracefully to standard bidi embedding in obsolete environments._
