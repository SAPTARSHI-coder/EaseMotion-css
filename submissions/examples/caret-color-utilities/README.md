# Caret Color Utilities

An overview and guide for using CSS `caret-color` utility classes to customize insertion cursor colors inside form controls.

## Core Questions

### What does this do?

These utility classes specify the color of the text insertion cursor (caret) inside editable elements like `<input>` fields or `<textarea>` boxes.

### How is it used?

Apply the utility classes directly to any text input or textarea element:

```html
<input type="text" class="input-field cc-primary" placeholder="Type here..." />
```

### Why is it useful?

It allows developers to theme insertion cursors to match branding designs, improve focus visibility, and change caret colors dynamically during form validation states (e.g. green for valid fields and red for error alerts).

---

## Utility Classes

| Class         | CSS Declaration         | Description / Use Case                                       |
| :------------ | :---------------------- | :----------------------------------------------------------- |
| `.cc-auto`    | `caret-color: auto;`    | Uses browser-default caret colors (Default).                 |
| `.cc-primary` | `caret-color: #3b82f6;` | Sets a blue caret matching primary brand colors.             |
| `.cc-success` | `caret-color: #22c55e;` | Sets a green caret for success, matching validated fields.   |
| `.cc-danger`  | `caret-color: #ef4444;` | Sets a red caret, highlighting form input validation errors. |
| `.cc-warning` | `caret-color: #f59e0b;` | Sets a yellow caret, highlighting pending input states.      |

---

## Explanation of `caret-color` & Accessibility

The `caret-color` CSS property specifies the color of the text cursor in inputs, textareas, or elements with `contenteditable` attributes.

- **Focus Visibility & Usability**: In dark-themed applications, standard default cursors can sometimes blend into input fields or have low contrast, making it difficult for keyboard users to track their insertion focus. Styling carets with vibrant, theme-compliant colors guarantees they remain visible.
- **Contrast Ratios**: When overriding caret colors, ensure that the selected color maintains a high contrast ratio (typically at least 3:1) relative to the input field background color to guarantee visibility under standard accessibility standards (WCAG).

---

## Usage Examples

### 1. Highlight Valid Email (Success State)

```html
<input
  type="email"
  class="input-field cc-success"
  placeholder="email@example.com"
/>
```

### 2. Error Input Focus (Danger State)

```html
<input
  type="text"
  class="input-field cc-danger"
  placeholder="Required Field"
  style="border-color: #ef4444;"
/>
```

### 3. Styled Contact Box Textarea (Primary State)

```html
<textarea
  class="textarea-field cc-primary"
  placeholder="Write your message..."
></textarea>
```

---

## Common Use Cases

1. **Dynamic Form Validation States**: Toggling caretaker classes dynamically (e.g. switching from `.cc-primary` to `.cc-danger` when validation errors are present in real-time).
2. **Dashboard Search Bars**: Applying the brand's primary color highlight on key search inputs to emphasize focused user interaction.
3. **Muted Backdrop Fields**: Adjusting caret colors in nested widgets to fit with darker visual aesthetics.

---

## Browser Support Notes

CSS `caret-color` is supported by all modern desktop and mobile browsers:

- Chrome 57+
- Edge 79+
- Firefox 53+
- Safari 11.1+
- iOS Safari 11.3+
- Android Browser 57+

_Note: Internet Explorer does not support `caret-color`. In older browsers, caret colors fall back to the browser-default coloring._
