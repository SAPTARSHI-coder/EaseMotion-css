# field-sizing: Auto-Resizing Form Inputs Demo (ksn)

## What does this do?

Demonstrates the `field-sizing: content` CSS property — enabling form inputs and textareas to automatically resize to fit their content without JavaScript. This eliminates the need for contenteditable hacks or JavaScript measuring-and-resizing logic.

## How is it used?

```css
/* Auto-sizing: input grows and shrinks to fit its value */
.ease-field-sizing-both {
  field-sizing: content;
  min-inline-size: 4ch;
  max-inline-size: 100%;
  overflow: hidden;
  white-space: nowrap;
}

/* Auto-height textarea: no scrollbar, no manual resize */
.ease-textarea-auto {
  field-sizing: content;
  resize: none;
  overflow: hidden;
}
```

Apply `.ease-field-sizing-both` to any `<input>` to make it auto-size. Apply `.ease-textarea-auto` to any `<textarea>` to make it auto-grow vertically.

## What the demo shows

1. **Inline auto-sizing inputs** — fields that grow/shrink to fit user data
2. **Auto-resizing textarea** — natural height with no scrollbar
3. **With vs. Without comparison** — side-by-side visual contrast
4. **Practical form** — a contact form where every field adapts

## Why is it useful?

Traditional web forms have a fundamental mismatch: inputs have a fixed width while their content varies in length. `field-sizing: content` solves this inelegantly with JavaScript DOM measurement, or forces users to scroll within inputs. `field-sizing: content` is a 2024 CSS feature that lets the browser handle this natively — inputs simply fit their content, end of story. This submission provides drop-in utility classes and educates EaseMotion CSS contributors on this modern capability.
