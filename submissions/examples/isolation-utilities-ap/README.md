# EaseMotion CSS — Isolation Utilities

This directory implements core utility classes for controlling the CSS `isolation` property in EaseMotion CSS.

---

## What is Isolation?

The `isolation` property defines whether an element must create a new stacking context.

This is particularly critical when building graphic card layouts, overlapping banner texts, or complex headers utilizing CSS `mix-blend-mode` effects (like multiply, screen, overlay, or difference).

### Blending Leakage

By default, child elements applying a blend mode will blend with _every_ layer positioned underneath them in the document backdrop. For example, if a child text block inside a white card uses `mix-blend-mode: difference`, the text will blend not only with the white card background but will also bleed through and blend with any colorful gradient shapes moving behind the card itself. This makes the text look distorted and completely unreadable.

Applying `isolation: isolate` to the container card forces all of its children's blending operations to resolve _only_ against that card container layer. It isolates the blending from the document background behind it.

---

## Utility Classes Reference

EaseMotion CSS provides standard classes mapping to the isolation behavior:

| Utility Class     | CSS Equivalent                   | Description                                                                        |
| :---------------- | :------------------------------- | :--------------------------------------------------------------------------------- |
| `.isolate`        | `isolation: isolate !important;` | Forces a new stacking context, isolating child blending operations.                |
| `.isolation-auto` | `isolation: auto !important;`    | Default: stacking context is determined automatically by standard layout triggers. |

### Supporting Mix-Blend-Mode Utilities

To easily construct dynamic blend layouts, standard helper classes like `.mix-blend-normal`, `.mix-blend-multiply`, `.mix-blend-screen`, `.mix-blend-overlay`, and `.mix-blend-difference` are also provided.

---

## Usage Examples

### 1. Isolated Difference Link Text

To prevent hover blending links from bleeding through into background layout circles:

```html
<!-- Establishing stacking context boundary -->
<div class="card relative isolate" style="background-color: #fff;">
  <h4>Isolated Card</h4>
  <!-- Child difference stays within card boundaries -->
  <p class="mix-blend-difference" style="color: #ef4444;">
    Readable Blended Text
  </p>
</div>
```

---

## Accessibility (WCAG 2.1) & Readability Best Practices

- **Prevent Readability Failures (Success Criterion 1.4.3)**: Unisolated blending modes represent one of the most common causes of contrast ratio failures. If text blends with unpredictable background components (like sliding images or moving layout blobs), it can render characters invisible or cause severe visual clutter. Always wrap blending text inside an `.isolate` container to lock the contrast against a predictable backdrop.
- **Clear Text States**: Ensure hover and active focus states are legible, especially when using difference or overlay filters.

---

## Browser Compatibility Notes

- **Full support**: `isolation` is fully supported by all modern mobile and desktop browsers (Chrome, Firefox, Safari, Edge).

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders update visual blend boundaries dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
